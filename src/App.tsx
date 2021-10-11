import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Create from './pages/Create';
import CustomerList from './pages/CustomerList';
import PageNotFound from './pages/PageNotFound';
import Update from './pages/Update';

import { createTheme, ThemeProvider } from '@material-ui/core';
import { deepPurple, purple } from '@material-ui/core/colors';

import Layout from './components/layout/Layout';

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: purple,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
            <Route exact path='/update/:id'>
              <Update />
            </Route>
            <Route exact path='/customers'>
              <CustomerList />
            </Route>
            <Route path='*'>
              <PageNotFound />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
