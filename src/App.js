import React, {lazy, Suspense} from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import './mixins/chartjs';
import theme from './theme';
import DashboardLayout from './components/DashboardLayout';
import { Switch } from 'react-router';

const Account = lazy(() => import('./pages/Account'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ProductList = lazy(() => import('./pages/ProductList'));
const Settings = lazy(() => import('./pages/Settings'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <GlobalStyles />
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/app/account" component={Account}/>
            <Route exact path="/app/dashboard" component={Dashboard}/>
            <Route exact path="/app/products" component={ProductList}/>
            <Route exact path="/app/settings" component={Settings}/>
          </Switch>
        </Suspense>
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default App;
