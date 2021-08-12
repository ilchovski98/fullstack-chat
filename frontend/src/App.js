import Header from './components/global/Header/Header';
import Login from './components/Login/Login';
import Home from './components/page-home/Home';
import Register from './components/Register/Register';
import Section from './components/global/Section/Section';
import './assets/styles/main.scss';

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Route path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Section className="section--small">
          <Login />
        </Section>
      </Route>

      <Route path="/register">
        <Section className="section--small">
          <Register />
        </Section>
      </Route>
    </div>
  );
}

export default App;
