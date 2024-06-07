import upDefaultTo from "../index";

describe("upDefaultTo function", () => {
  test("if property passed is undefined", () => {
    const undefinedFunction = undefined;
    const defaultValue = upDefaultTo("test", undefinedFunction, {
      test: "test",
    });
    expect(defaultValue).toBe("test");
  });

  test("if property passed is null", () => {
    const nullFunction = null;
    const defaultValue = upDefaultTo("test", nullFunction, { test: "test" });
    expect(defaultValue).toBe("test");
  });

  test("if property passed is a function", () => {
    const desiredFunction = () => "desiredFunction";
    const defaultValue = upDefaultTo("test", desiredFunction, { test: "test" });
    expect(defaultValue).toBe("desiredFunction");
  });

  test("if property passed is a function with an argument", () => {
    const desiredFunction = (args) => `desiredFunction${args.test}`;
    const defaultValue = upDefaultTo("test", desiredFunction, { test: "test" });
    expect(defaultValue).toBe("desiredFunctiontest");
  });

  test("if value returned actually depends on the provided arguments", () => {
    const visibleFn = ({ isAuthorized }) => !!isAuthorized;
    const isVisible1 = upDefaultTo(false, visibleFn, { isAuthorized: true });
    const isVisible2 = upDefaultTo(false, visibleFn, { isAuthorized: false });
    expect(isVisible1).toBe(true);
    expect(isVisible2).toBe(false);
  });

  test("if property passed is defined and not a function", () => {
    const defaultValue = upDefaultTo(null, true, { test: "test" });
    expect(defaultValue).toBe(true);
  });

  test("if property function returns undefined and default value is a number", () => {
    const undefinedFunction = () => undefined;
    const defaultValue = upDefaultTo(1, undefinedFunction, { test: "test" });
    expect(defaultValue).toBe(0);
  });

  test("if property function returns null and default value is a number", () => {
    const nullFunction = () => null;
    const defaultValue = upDefaultTo(1, nullFunction, { test: "test" });
    expect(defaultValue).toBe(0);
  });

  test("if property function returns undefined and default value is not a number", () => {
    const undefinedFunction = () => undefined;
    const defaultValue = upDefaultTo("test", undefinedFunction, {
      test: "test",
    });
    expect(defaultValue).toBe(false);
  });

  test("if property function returns null and default value is not a number", () => {
    const nullFunction = () => null;
    const defaultValue = upDefaultTo("test", nullFunction, { test: "test" });
    expect(defaultValue).toBe(false);
  });
});
