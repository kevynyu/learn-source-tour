import { describe, it, expect } from 'vitest';
import { isObject, isOn } from '../src';

describe('测试工具库', () => {
  it('测试isObject', () => {
    expect(isObject({})).toBe(true);
    expect(isObject(1)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject('')).toBe(false);
    expect(isObject([])).toBe(true);
  });
  it('测试isOn', () => {
    expect(isOn('onClick')).toBe(true);
    expect(isOn('click')).toBe(false);
  });
});
