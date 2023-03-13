import { expect, test } from "vitest";
import { sum } from "../sum";

test("add", () => {
  expect(sum(1, 1)).toBe(2);
  expect(sum(2, 3)).toMatchSnapshot();
  expect(sum(4, 5)).toMatchInlineSnapshot('9');
});
