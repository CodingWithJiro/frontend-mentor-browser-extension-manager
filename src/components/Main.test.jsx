import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Main from "./Main";
import { expect } from "vitest";

beforeEach(() => {
  localStorage.clear();
});

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

  test("shows empty state when all extensions removed", async () => {
    const user = userEvent.setup();
    render(<Main />);

    while (true) {
      const removeButtons = screen.queryAllByRole("button", {
        name: /^remove$/i,
      });

      if (removeButtons.length === 0) break;

      await user.click(removeButtons[0]);
      const confirmButton = screen.getByRole("button", {
        name: /remove .* from extensions/i,
      });
      await user.click(confirmButton);
    }

    const noExtensionsMessage = screen.getByText(/no installed extensions/i);
    expect(noExtensionsMessage).toBeInTheDocument();
    const viewRemoveButton = screen.getByRole("button", {
      name: /view removed/i,
    });
    expect(viewRemoveButton).toBeInTheDocument();
  });
});

describe("Remove flow", () => {
  test("shows correct modal behavior when clicking a remove button", async () => {
    const user = userEvent.setup();
    render(<Main />);
    const devLensHeading = screen.getByRole("heading", { name: /devlens/i });
    const card = devLensHeading.closest("section");

    const removeButton = within(card).getByRole("button", { name: /remove/i });
    await user.click(removeButton);

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveAttribute("open");

    const confirmButton = screen.getByRole("button", {
      name: /remove devlens from extensions/i,
    });
    expect(confirmButton).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    await user.click(cancelButton);
    expect(dialog).not.toHaveAttribute("open");
    expect(card).toBeInTheDocument();

    await user.click(removeButton);
    await user.click(confirmButton);
    expect(card).not.toBeInTheDocument();
  });

  test("shows correct toast behavior when clicking the confirm button", async () => {
    const user = userEvent.setup();
    render(<Main />);

    const devLensHeading = screen.getByRole("heading", { name: /devlens/i });
    const card = devLensHeading.closest("section");
    const removeButton = within(card).getByRole("button", { name: /remove/i });
    await user.click(removeButton);
    const confirmButton = screen.getByRole("button", {
      name: /remove devlens from extensions/i,
    });
    await user.click(confirmButton);
    expect(card).not.toBeInTheDocument();

    const toast = await screen.findByText(/devlens removed/i);
    expect(toast).toBeInTheDocument();

    const undoButton = screen.getByRole("button", { name: /^undo$/i });
    expect(undoButton).toBeInTheDocument();

    await user.click(undoButton);
    expect(
      screen.getByRole("heading", { name: /devlens/i })
    ).toBeInTheDocument();

    await user.click(removeButton);
    await user.click(confirmButton);

    const viewButton = screen.getByRole("button", { name: /^view$/i });
    expect(viewButton).toBeInTheDocument();

    await user.click(viewButton);
    const restoreHeading = screen.getByRole("heading", {
      name: /recently removed/i,
    });
    expect(restoreHeading).toBeInTheDocument();
  });
});

describe("Restore flow", () => {
  test("shows correct restore modal behavior", async () => {
    const user = userEvent.setup();
    render(<Main />);

    const devLensHeading = screen.getByRole("heading", { name: /devlens/i });
    const card = devLensHeading.closest("section");
    const removeButton = within(card).getByRole("button", { name: /remove/i });
    await user.click(removeButton);
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveAttribute("open");

    const confirmButton = screen.getByRole("button", {
      name: /remove devlens from extensions/i,
    });
    await user.click(confirmButton);

    const viewButton = screen.getByRole("button", { name: /^view$/i });
    expect(viewButton).toBeInTheDocument();
    await user.click(viewButton);

    const restoreAllButton = screen.getByRole("button", {
      name: /restore all/i,
    });
    expect(restoreAllButton).toBeInTheDocument();

    await user.click(restoreAllButton);
    const message = screen.getByText(/all extensions restored/i);
    expect(message).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);
    expect(dialog).not.toHaveAttribute("open");
    expect(
      screen.getByRole("heading", { name: /devlens/i })
    ).toBeInTheDocument();
  });
});
