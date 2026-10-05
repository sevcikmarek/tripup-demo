import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../src/prototype.js', import.meta.url), 'utf8');
const sandbox = { DCLogic: class {} };
vm.runInNewContext(source + '\nthis.api = { freshExp, pool0, alloc, calc, splitFit, ledger, cleanAmt, initial };', sandbox, { timeout: 1000 });
const { freshExp, pool0, alloc, calc, splitFit, ledger, cleanAmt, initial } = sandbox.api;

test('new sessions enter Lisbon and have a balanced demo ledger', () => {
  assert.deepEqual(Array.from(initial().stack), ['trips', 'trip']);
  assert.equal(initial().owe, 591);
  assert.equal(Object.values(ledger(null)).reduce((a, b) => a + b, 0), 0);
});
test('a shared dinner allocates equally among included people', () => {
  const expense = freshExp(); expense.amt = '120';
  const result = calc(expense);
  assert.equal(result.my, 30);
  assert.equal(Object.values(result.A.out).reduce((a, b) => a + b, 0), 120);
  assert.equal(result.A.ok, true);
});
test('a separate part can be split by a subset without charging excluded people', () => {
  const expense = freshExp(); expense.amt = '120'; expense.partOn = true; expense.partAmt = '40';
  expense.incPart = { sofia: true, maya: true, nic: false, eleanor: false };
  const result = calc(expense);
  assert.equal(result.my, 40);
  assert.equal(result.B.out.nic, undefined);
  assert.equal(Object.values(result.A.out).reduce((a, b) => a + b, 0) + Object.values(result.B.out).reduce((a, b) => a + b, 0), 120);
});
test('weighted shares preserve the total and reject zero weights', () => {
  const pool = pool0(); pool.mode = 'shares'; pool.shares = { sofia: 2, maya: 1 };
  const result = alloc(90, { sofia: true, maya: true }, pool);
  assert.equal(result.out.sofia, 60); assert.equal(result.out.maya, 30);
  pool.shares = { sofia: 0, maya: 0 };
  assert.equal(alloc(90, { sofia: true, maya: true }, pool).ok, false);
});
test('custom amounts and percentages must account for the full expense', () => {
  const pool = pool0(); pool.mode = 'amount'; pool.amts = { sofia: 30, maya: 50 };
  assert.equal(alloc(90, { sofia: true, maya: true }, pool).ok, false);
  pool.amts.maya = 60;
  assert.equal(alloc(90, { sofia: true, maya: true }, pool).ok, true);
  pool.mode = 'percent'; pool.pcts = { sofia: 25, maya: 75 };
  assert.equal(alloc(80, { sofia: true, maya: true }, pool).out.sofia, 20);
  pool.pcts.maya = 70;
  assert.equal(alloc(80, { sofia: true, maya: true }, pool).ok, false);
});
test('an oversized separate part or overallocated amounts cannot be submitted', () => {
  const expense = freshExp(); expense.amt = '100'; expense.partOn = true; expense.partAmt = '101';
  assert.equal(splitFit(expense).ok, false);
  expense.partOn = false; expense.poolRest.mode = 'amount'; expense.poolRest.amts = { sofia: 101 };
  assert.equal(splitFit(expense).ok, false);
});
test('amount entry accepts decimal commas and limits cent precision', () => {
  assert.equal(cleanAmt('€ 0012,345'), '12.34');
  assert.equal(cleanAmt('.50'), '0.50');
  assert.equal(cleanAmt('12.3.4'), '12.34');
});
