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
});
