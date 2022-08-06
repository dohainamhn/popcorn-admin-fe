import {
  CatalogPath,
  HomePath,
  InventoryPath,
  SalesOrderPath,
  SalesOrderPath_Invoice,
  SalesOrderPath_Orders,
  SalesOrderPath_PaymentSetting,
  WorkShopPath,
} from 'routes/routes-conts';
import Logo from 'assets/images/icon-example-2.svg';
import { Menu } from 'interfaces';

export const menus: Menu[] = [
  {
    title: 'Dashboard',
    path: HomePath,
    items: [],
    icon: Logo,
  },
  {
    title: 'Sales-Orders',
    path: SalesOrderPath,
    items: [
      {
        title: 'Orders',
        link: SalesOrderPath_Orders,
      },
      {
        title: 'Invoice',
        link: SalesOrderPath_Invoice,
      },
      {
        title: 'Payment Settings',
        link: SalesOrderPath_PaymentSetting,
      },
    ],
    icon: Logo,
  },
  {
    title: 'Catalog',
    path: CatalogPath,
    items: [],
    icon: Logo,
  },
  {
    title: 'Workshop',
    path: WorkShopPath,
    items: [],
    icon: Logo,
  },
  {
    title: 'Inventory',
    path: InventoryPath,
    items: [],
    icon: Logo,
  },
];
