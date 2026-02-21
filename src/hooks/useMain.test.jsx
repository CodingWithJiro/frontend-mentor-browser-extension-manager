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

  test("removes extension after calling handleRemove, stores in removedExtensions, sets toast, and resets toRemove", () => {
    const { result } = renderHook(() => useMain());
    const hasDevLens = (extensions) =>
      extensions.some(({ name }) => name === "DevLens");

    const { filteredExtensions: previousExtensions } = result.current;
    act(() => result.current.setToRemove("DevLens"));
    act(() => result.current.handleRemove());
    const { filteredExtensions: currentExtensions } = result.current;

    expect(hasDevLens(previousExtensions)).toBe(true);
    expect(hasDevLens(currentExtensions)).toBe(false);
    expect(currentExtensions.length).toBe(previousExtensions.length - 1);

    const { removedExtensions } = result.current;
    expect(hasDevLens(removedExtensions)).toBe(true);
    expect(removedExtensions.length).toBe(1);

    const { toast } = result.current;
    expect(toast.name).toBe("DevLens");
    expect(toast.message).toBe("DevLens removed");
    expect(result.current.toRemove).toBe(null);
  });

  test("checks if undo restores extension on remove", () => {
    const { result } = renderHook(() => useMain());
    const hasDevLens = (extensions) =>
      extensions.some(({ name }) => name === "DevLens");

    act(() => result.current.setToRemove("DevLens"));
    act(() => result.current.handleRemove());

    const { filteredExtensions: previousExtensions } = result.current;

    act(() => result.current.handleUndo("DevLens"));

    const { filteredExtensions: currentExtensions } = result.current;

    expect(hasDevLens(previousExtensions)).toBe(false);
    expect(hasDevLens(currentExtensions)).toBe(true);
    expect(currentExtensions).toEqual(LIST);
    expect(result.current.removedExtensions.length).toBe(0);
    expect(result.current.toast).toBe(null);
  });

  test("initializes extensions from localStorage if available", () => {
    const mockExtensions = [
      {
        logo: "devlens",
        name: "DevLens",
        description:
          "Quickly inspect page layouts and visualize element boundaries.",
        isActive: true,
      },
      {
        logo: "style-spy",
        name: "StyleSpy",
        description: "Instantly analyze and copy CSS from any webpage element.",
        isActive: true,
      },
      {
        logo: "speed-boost",
        name: "SpeedBoost",
        description:
          "Optimizes browser resource usage to accelerate page loading.",
        isActive: false,
      },
    ];
    const mockRemovedExtensions = [
      {
        logo: "json-wizard",
        name: "JSONWizard",
        description:
          "Formats, validates, and prettifies JSON responses in-browser.",
        isActive: true,
      },
      {
        logo: "tab-master-pro",
        name: "TabMaster Pro",
        description: "Organizes browser tabs into groups and sessions.",
        isActive: true,
      },
      {
        logo: "viewport-buddy",
        name: "ViewportBuddy",
        description:
          "Simulates various screen resolutions directly within the browser.",
        isActive: false,
      },
      {
        logo: "markup-notes",
        name: "Markup Notes",
        description:
          "Enables annotation and notes directly onto webpages for collaborative debugging.",
        isActive: true,
      },
      {
        logo: "grid-guides",
        name: "GridGuides",
        description:
          "Overlay customizable grids and alignment guides on any webpage.",
        isActive: false,
      },
      {
        logo: "palette-picker",
        name: "Palette Picker",
        description: "Instantly extracts color palettes from any webpage.",
        isActive: true,
      },
      {
        logo: "link-checker",
        name: "LinkChecker",
        description: "Scans and highlights broken links on any page.",
        isActive: true,
      },
      {
        logo: "dom-snapshot",
        name: "DOM Snapshot",
        description: "Capture and export DOM structures quickly.",
        isActive: false,
      },
      {
        logo: "console-plus",
        name: "ConsolePlus",
        description:
          "Enhanced developer console with advanced filtering and logging.",
        isActive: true,
      },
    ];
    localStorage.setItem("userExtensions", JSON.stringify(mockExtensions));
    localStorage.setItem(
      "userRemovedExtensions",
      JSON.stringify(mockRemovedExtensions)
    );

    const { result } = renderHook(() => useMain());

    expect(result.current.filteredExtensions).toEqual(mockExtensions);
    expect(result.current.removedExtensions).toEqual(mockRemovedExtensions);
  });
});
