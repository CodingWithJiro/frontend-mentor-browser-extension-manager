import { renderHook } from "@testing-library/react";
import useMain from "./useMain";
import LIST from "../data/extensions.json";
import { act } from "react";

afterEach(() => {
  localStorage.clear();
});

describe("useMain", () => {
  test("initializes filter to 'all' on mount", () => {
    const { result } = renderHook(() => useMain());
    expect(result.current.filter).toBe("all");
  });

  test("initializes removedExtensions as empty array", () => {
    const { result } = renderHook(() => useMain());
    expect(result.current.removedExtensions.length).toBe(0);
  });

  test("initializes filteredExtensions with the same contents as LIST", () => {
    const { result } = renderHook(() => useMain());
    const { filteredExtensions } = result.current;
    expect(filteredExtensions).toEqual(LIST);
  });

  test("updates filteredExtensions correctly when filter is changed to active", () => {
    const { result } = renderHook(() => useMain());
    const { setFilter } = result.current;
    act(() => setFilter("active"));
    const { filteredExtensions } = result.current;
    const expectedActive = LIST.filter(({ isActive }) => isActive);
    expect(filteredExtensions).toEqual(expectedActive);
  });

  test("updates filteredExtensions correctly when filter is changed to inactive", () => {
    const { result } = renderHook(() => useMain());
    const { setFilter } = result.current;
    act(() => setFilter("inactive"));
    const { filteredExtensions } = result.current;
    const expectedInactive = LIST.filter(({ isActive }) => !isActive);
    expect(filteredExtensions).toEqual(expectedInactive);
  });
});
