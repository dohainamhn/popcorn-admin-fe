import RedirectComponent from 'components/common/RedirectComponent';
import { addSlashPrefixToString } from 'helpers';
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import {
  CatalogPath,
  HomePath,
  InventoryPath,
  loginSuffix,
  notFoundPageSuffix,
  SalesOrderPath,
  SalesOrderPath_Invoice,
  SalesOrderPath_Orders,
  SalesOrderPath_PaymentSetting,
  WorkShopPath,
} from './routes-conts';

const HomePage = React.lazy(() => import('pages'));
const LoginPage = React.lazy(() => import('pages/Login'));
const NotFoundPage = React.lazy(() => import('pages/NotFoundPage'));

const OrdersPage = React.lazy(() => import('pages/salesOrders/Orders'));
const InvoicePage = React.lazy(() => import('pages/salesOrders/Invoice'));
const PaymentSettingsPage = React.lazy(() => import('pages/salesOrders/PaymentSettings'));

const CatalogPage = React.lazy(() => import('pages/Catalog'));
const WorkshopPage = React.lazy(() => import('pages/Workshop'));
const InventoryPage = React.lazy(() => import('pages/Inventory'));

const Routers = () => {
  const routes = [
    {
      element: <PrivateRoute />,
      children: [
        {
          path: HomePath,
          element: <HomePage />,
        },
        {
          path: SalesOrderPath,
          element: (
            <RedirectComponent defaultChildPath={`/${SalesOrderPath}/${SalesOrderPath_Orders}`} path={SalesOrderPath} />
          ),
          children: [
            {
              path: SalesOrderPath_Orders,
              element: <OrdersPage />,
            },
            {
              path: SalesOrderPath_Invoice,
              element: <InvoicePage />,
            },
            {
              path: SalesOrderPath_PaymentSetting,
              element: <PaymentSettingsPage />,
            },
          ],
        },
        {
          path: CatalogPath,
          element: <CatalogPage />,
        },
        {
          path: WorkShopPath,
          element: <WorkshopPage />,
        },
        {
          path: InventoryPath,
          element: <InventoryPage />,
        },
      ],
    },
    {
      element: <AuthRoute />,
      children: [{ path: addSlashPrefixToString(loginSuffix), element: <LoginPage /> }],
    },
    { path: addSlashPrefixToString(notFoundPageSuffix), element: <NotFoundPage /> },
    {
      path: '*',
      element: <Navigate to={addSlashPrefixToString(notFoundPageSuffix)} />,
    },
  ];
  const elements = useRoutes(routes);
  return elements;
};

export default Routers;
