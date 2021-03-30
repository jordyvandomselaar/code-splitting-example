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

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <GlobalStyles />
        <Route path="/" component={Dashboard}/>
        <Route path="/app/account" component={Account}/>
        <Route path="/app/dashboard" component={Dashboard}/>
        <Route path="/app/products" component={ProductList}/>
        <Route path="/app/settings" component={Settings}/>
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default App;
