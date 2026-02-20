import { renderHook } from "@testing-library/react";
import useMain from "./useMain";

afterEach(() => {
  localStorage.clear();
});

describe("useMain", () => {
  test("initializes filter to 'all' on mount", () => {
    const { result } = renderHook(() => useMain());
    expect(result.current.filter).toBe("all");
  });
});
