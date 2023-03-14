import { expect, test, describe, it } from "vitest";
import storage from "../storage";
import { sum } from "../sum";

test("add", () => {
  expect(sum(1, 1)).toBe(2);
  expect(sum(2, 3)).toMatchSnapshot();
  expect(sum(4, 5)).toMatchInlineSnapshot("9");
});

describe("storage", () => {
  it("可以缓存值", () => {
    storage.set("newKey", "hello");
    expect(localStorage.getItem("my-app-newKey")).toEqual("hello");
  });

  it("可以设置值", () => {
    localStorage.setItem("my-app-newKey", "hello");
    expect(storage.get("newKey")).toEqual("hello");
  });
});
