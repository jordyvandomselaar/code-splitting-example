import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import ProductList from './pages/ProductList';
import Settings from './pages/Settings';

export const routes = {
  home: {
    path: "/",
    component: Dashboard,
  },
  account: {
    path: "/app/account",
    component: Account,
  },
  dashboard: {
    path: "/app/dashboard",
    component: Dashboard,
  },
  productList: {
    path: "/app/products",
    component: ProductList,
  },
  settings: {
    path: "/app/settings",
    component: Settings,
  },
}
