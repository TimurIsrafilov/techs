import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Navbar.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

type NavbarProps = {
  className?: string;
};

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
        to about
      </AppLink>
      <AppLink to={'/main'} theme={AppLinkTheme.SECONDARY}>
        to main
      </AppLink>
    </div>
  );
};

export default Navbar;
