import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { About } from 'pages/About';
import { Main } from 'pages/Main';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

const AppRouter = () => {
  const { t, i18n } = useTranslation();

  return (
    <Suspense fallback={<div>{t('Loading...')}</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
