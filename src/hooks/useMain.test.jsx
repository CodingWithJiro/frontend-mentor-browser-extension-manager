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

  test("checks if calling handleRestoreAll still has same order with LIST", () => {
    const { result } = renderHook(() => useMain());

    act(() => result.current.setToRemove("DevLens"));
    act(() => result.current.handleRemove());
    act(() => result.current.setToRemove("TabMaster Pro"));
    act(() => result.current.handleRemove());
    act(() => result.current.setToRemove("DOM Snapshot"));
    act(() => result.current.handleRemove());
    act(() => result.current.setToRemove("StyleSpy"));
    act(() => result.current.handleRemove());
    expect(result.current.filteredExtensions).not.toEqual(LIST);

    act(() => result.current.handleRestoreAll());
    expect(result.current.filteredExtensions).toEqual(LIST);
  });

  test("toggles isActive correctly and untouched extensions remains unchanged", () => {
    const { result } = renderHook(() => useMain());
    const getExtensionsOtherThanDevLens = (extensions) =>
      extensions.filter(({ name }) => name !== "DevLens");

    const { isActive: previousIsActive } =
      result.current.filteredExtensions.find(({ name }) => name === "DevLens");
    const previousOtherExtensions = getExtensionsOtherThanDevLens(
      result.current.filteredExtensions
    );

    act(() => result.current.toggleActive("DevLens"));

    const { isActive: currentIsActive } =
      result.current.filteredExtensions.find(({ name }) => name === "DevLens");
    const currentOtherExtensions = getExtensionsOtherThanDevLens(
      result.current.filteredExtensions
    );

    expect(previousIsActive).not.toBe(currentIsActive);
    expect(previousOtherExtensions).toEqual(currentOtherExtensions);

    act(() => result.current.toggleActive("DevLens"));
    const { isActive: finalIsActive } = result.current.filteredExtensions.find(
      ({ name }) => name === "DevLens"
    );

    expect(previousIsActive).toBe(finalIsActive);
    expect(result.current.filteredExtensions).toEqual(LIST);
  });
});
