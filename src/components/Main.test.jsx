import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Main from "./Main";

describe("Filter flow", () => {
  test("applies filters correctly and enforces single selection", async () => {
    const user = userEvent.setup();
    render(<Main />);

    const activeButton = screen.getByRole("button", { name: /^active$/i });
    const inactiveButton = screen.getByRole("button", { name: /^inactive$/i });
    const allButton = screen.getByRole("button", { name: /^all$/i });
    const getToggles = () =>
      screen.getAllByRole("button", {
        name: /toggle .* active status/i,
      });

    await user.click(activeButton);
    expect(activeButton).toHaveAttribute("aria-pressed", "true");
    expect(inactiveButton).toHaveAttribute("aria-pressed", "false");
    expect(allButton).toHaveAttribute("aria-pressed", "false");
    const activeToggles = getToggles();
    const activeCount = activeToggles.length;
    activeToggles.forEach((toggle) => {
      expect(toggle).toHaveAttribute("aria-pressed", "true");
    });

    await user.click(inactiveButton);
    expect(activeButton).toHaveAttribute("aria-pressed", "false");
    expect(inactiveButton).toHaveAttribute("aria-pressed", "true");
    expect(allButton).toHaveAttribute("aria-pressed", "false");
    const inactiveToggles = getToggles();
    const inactiveCount = inactiveToggles.length;
    inactiveToggles.forEach((toggle) => {
      expect(toggle).toHaveAttribute("aria-pressed", "false");
    });

    await user.click(allButton);
    expect(activeButton).toHaveAttribute("aria-pressed", "false");
    expect(inactiveButton).toHaveAttribute("aria-pressed", "false");
    expect(allButton).toHaveAttribute("aria-pressed", "true");
    const allToggles = getToggles();
    const allCount = allToggles.length;
    expect(allCount).toBe(activeCount + inactiveCount);
  });

  test("defaults to all filters on initial render", () => {
    render(<Main />);

    const allButton = screen.getByRole("button", { name: /^all$/i });
    expect(allButton).toHaveAttribute("aria-pressed", "true");

    const toggles = screen.getAllByRole("button", {
      name: /toggle .* active status/i,
    });
    const activeToggles = toggles.filter(
      (toggle) => toggle.getAttribute("aria-pressed") === "true"
    );
    const inactiveToggles = toggles.filter(
      (toggle) => toggle.getAttribute("aria-pressed") === "false"
    );
    expect(activeToggles.length).toBeGreaterThan(0);
    expect(inactiveToggles.length).toBeGreaterThan(0);
  });

  test("shows empty state when no extensions are active", async () => {
    const user = userEvent.setup();
    render(<Main />);

    const activeButton = screen.getByRole("button", { name: /^active$/i });
    const toggles = screen.getAllByRole("button", {
      name: /toggle .* active status/i,
    });
    const initiallyActive = toggles.filter(
      (toggle) => toggle.getAttribute("aria-pressed") === "true"
    );
    expect(initiallyActive.length).toBeGreaterThan(0);

    for (const toggle of initiallyActive) {
      await user.click(toggle);
    }
    await user.click(activeButton);
    const noActiveMessage = screen.getByText(/no active extensions/i);
    expect(noActiveMessage).toBeInTheDocument();

    const activeToggles = screen.queryAllByRole("button", {
      name: /toggle .* active status/i,
    }).length;
    expect(activeToggles).toBe(0);
  });

  test("shows empty state when no extensions are inactive", async () => {
    const user = userEvent.setup();
    render(<Main />);

    const inactiveButton = screen.getByRole("button", { name: /^inactive$/i });
    const toggles = screen.getAllByRole("button", {
      name: /toggle .* active status/i,
    });
    const initiallyInactive = toggles.filter(
      (toggle) => toggle.getAttribute("aria-pressed") === "false"
    );
    expect(initiallyInactive.length).toBeGreaterThan(0);

    for (const toggle of initiallyInactive) {
      await user.click(toggle);
    }
    await user.click(inactiveButton);
    const noInactiveMessage = screen.getByText(/no inactive extensions/i);
    expect(noInactiveMessage).toBeInTheDocument();

    const inactiveToggles = screen.queryAllByRole("button", {
      name: /toggle .* active status/i,
    }).length;
    expect(inactiveToggles).toBe(0);
  });
});
