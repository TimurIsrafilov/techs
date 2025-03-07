import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Button
        className={classNames(cls.ThemeSwitcher, {}, [className])}
        onClick={toggleTheme}
        theme={ThemeButton.CLEAR}
      >
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    </>
  );
};
