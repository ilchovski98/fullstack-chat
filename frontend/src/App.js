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

  const LoginFunc = details => {
    console.log(details);
    
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log('Logged in');
      setUser({name: details.name, email: details.email});
      return;
    }

    console.log('Credentials doesnt match!');
  }

  const LogoutFunc = () => {
    console.log('logout');
    setUser({name: '', email: ''});
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login">
          {(user.email !== '') ? (
            <div className="welcome">
              <h2>Welcome, <span>{user.name}</span></h2>
              <button onClick={LogoutFunc}>Logout</button>
            </div>
          ) : (
            <Section className="section--small">
              <Login LoginFunc={LoginFunc} error={error} />
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
