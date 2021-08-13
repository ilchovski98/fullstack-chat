import Header from './components/global/Header/Header';
import Login from './components/Login/Login';
import Home from './components/page-home/Home';
import Register from './components/Register/Register';
import Section from './components/global/Section/Section';
import './assets/styles/main.scss';
import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);
    return '';
  }

  const Logout = () => {
    console.log('logout');
    return '';
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login">
          {(user.email !== '') ? (
            <div className="welcome">
              <h2>Welcome, <span>{user.name}</span></h2>
              <button>Logout</button>
            </div>
          ) : (
            <Section className="section--small">
              <Login Login={Login} error={error} />
            </Section>
          )}
        </Route>

        <Route path="/register">
          <Section className="section--small">
            <Register />
          </Section>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
