import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          {/* <Route exact path="/">
            <WelcomePage />
          </Route> */}
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
