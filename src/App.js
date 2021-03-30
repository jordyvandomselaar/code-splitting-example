import 'react-perfect-scrollbar/dist/css/styles.css';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import './mixins/chartjs';
import theme from './theme';
import DashboardLayout from './components/DashboardLayout';
import { routes } from './routes';
import { Switch } from 'react-router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <GlobalStyles />
        <Switch>
          {Object.keys(routes).map(key => {
            return (
              <Route key={key} path={routes[key].path} component={routes[key].component} exact />
            );
          })}
        </Switch>
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default App;
