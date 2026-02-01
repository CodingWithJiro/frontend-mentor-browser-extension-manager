const ThemeButton = ({ onThemeChange, theme, children }) => {
  const isLightTheme = theme === "light";
  const isPressed = !isLightTheme;
  const label = `Switch to ${isLightTheme ? "dark" : "light"} theme`;

  return (
    <button
      className="relative flex h-full w-full cursor-pointer items-center justify-center py-3.25"
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
