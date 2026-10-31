import { test } from 'node:test';
import assert from 'node:assert';
import { add } from '../src/math.js';

test('Addition of two numbers', () => {
    assert.strictEqual(add(10, 20), 30);
});

test('Addition of negative numbers', () => {
    assert.strictEqual(add(-5, 5), 0);
});