import './styles/index.scss';

import { ThemeContext } from './providers/ThemeProvider/lib/ThemeContext';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

function MyComponent() {
  const { t, i18n } = useTranslation();

  const languageToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <h1>{t('Welcome to React')}</h1>
      <button onClick={languageToggle}>{t('Translate')}</button>
    </div>
  );
}

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', { we: false }, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <MyComponent />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
