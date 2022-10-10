/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test("Returns false for wrong data", () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman("1024")).toBe(false)
  expect(convertBytesToHuman([1, "1"])).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
});

test("Returns the correct value", () => {
  expect(convertBytesToHuman(1024)).toBe("1 KB")
  expect(convertBytesToHuman(123456789)).toBe("117.74 MB")
  expect(convertBytesToHuman(1234567)).toBe("1.18 MB")
  expect(convertBytesToHuman(12312312300)).toBe("11.47 GB")
  expect(convertBytesToHuman(123412341234123412)).toBe("109.61 PB")
  expect(convertBytesToHuman(0)).toBe("0 B")
});