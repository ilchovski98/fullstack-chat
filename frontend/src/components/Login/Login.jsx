import Card from '../global/Card/Card';
import React, {useState} from 'react';

function Login({LoginFunc, error}) {
  const [details, setDetails] = useState({name: '', email: '', password: ''});

  const submitHandler = e => {
    e.preventDefault();
    LoginFunc(details);
  }
  return (
    <Card>
      <div className="form">
          <form onSubmit={submitHandler}>
              <div className="form__head">
                  <h2 className="form__title">Login</h2>
              </div>

              {/*Error*/}

              <div className="form__body">
                  <div className="form__row">
                    <label htmlFor="login-name" className="form__label">Name</label>

                    <input type="text" id="login-name" className="form__input" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                  </div>

                  <div className="form__row">
                      <label htmlFor="login-email" className="form__label">Email</label>

                      <input type="email" id="login-email" className="form__input" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                  </div>

                  <div className="form__row">
                      <label htmlFor="login-first-name" className="form__label">Password</label>

                      <input type="password" id="login-password" className="form__input" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
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