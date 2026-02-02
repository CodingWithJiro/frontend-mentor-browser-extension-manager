import ThemeIcon from "./ThemeIcon";
import ThemeButton from "./ThemeButton";
import useTheme from "../hooks/useTheme";

const Theme = () => {
  const { theme, handleThemeChange } = useTheme();

  return (
    <div className="flex max-w-12.5 min-w-12.5 items-center justify-center rounded-xl bg-(--COLOR-BUTTON-PRIMARY) hover:bg-(--COLOR-BUTTON-PRIMARY-HOVER) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out">
      <ThemeButton onThemeChange={handleThemeChange} theme={theme}>
        <ThemeIcon theme={theme} />
      </ThemeButton>
    </div>
  );
};

export default Theme;
