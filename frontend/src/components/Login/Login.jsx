import Card from '../global/Card/Card';
import React, {useState} from 'react';

function Login({Login, error}) {
  const [details, setDetails] = useState({name: '', email: '', password: ''});

  const submitHandler = e => {
    e.preventDefault();
    Login(details);
  }
  return (
    <Card>
      <div className="form">
          <form onSubmit={submitHandler}>
              <div className="form__head">
                  <h2 className="form__title">Login</h2>
              </div>

              <div className="form__body">
                  <div className="form__row">
                      <label htmlFor="login-email" className="form__label">Email</label>

                      <input type="email" id="login-email" className="form__input" />
                  </div>

                  <div className="form__row">
                      <label htmlFor="login-first-name" className="form__label">Password</label>

                      <input type="password" id="login-password" className="form__input" />
                  </div>
              </div>

              <div className="form__actions">
                  <button type="submit" className="btn">Login</button>
              </div>
          </form>
      </div>
    </Card>
  )
}

export default Login;