const ThemeButton = ({ onThemeChange, theme, children }) => {
  const isLightTheme = theme === "light";
  const isPressed = !isLightTheme;
  const label = `Switch to ${isLightTheme ? "dark" : "light"} theme`;

  return (
    <button
      className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl py-3.25 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--COLOR-BUTTON-PRIMARY-FOCUS)"
      type="button"
      aria-label={label}
      aria-pressed={isPressed}
      onClick={onThemeChange}
    >
      {children}
    </button>
  );
};

export default ThemeButton;
