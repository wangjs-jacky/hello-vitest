import { expect, test, describe, it } from "vitest";
import { objToSearchStr } from "../objToSearchStr";
import storage from "../storage";
import { sum } from "../sum";

test("add", () => {
  expect(sum(1, 1)).toBe(2);
  expect(sum(2, 3)).toMatchSnapshot();
  expect(sum(4, 5)).toMatchInlineSnapshot("9");
});

describe("测试 window 上的 storage", () => {
  it("可以缓存值", () => {
    storage.set("newKey", "hello");
    expect(localStorage.getItem("my-app-newKey")).toEqual("hello");
  });

  it("可以设置值", () => {
    localStorage.setItem("my-app-newKey", "hello");
    expect(storage.get("newKey")).toEqual("hello");
  });
});

describe("基于 TDD 测试开", () => {
  it("将对象转化为查询字符串", () => {
    expect(
      objToSearchStr({
        a: "1",
        b: "2",
      }),
    ).toEqual("a=1&b=2");
  });
});
