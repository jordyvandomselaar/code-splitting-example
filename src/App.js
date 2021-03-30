import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import './mixins/chartjs';
import theme from './theme';
import DashboardLayout from './components/DashboardLayout';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import Settings from './pages/Settings';
import { Switch } from 'react-router';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/app/account" component={Account}/>
          <Route exact path="/app/dashboard" component={Dashboard}/>
          <Route exact path="/app/products" component={ProductList}/>
          <Route exact path="/app/settings" component={Settings}/>
        </Switch>
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default App;
