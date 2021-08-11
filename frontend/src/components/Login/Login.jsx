import Card from '../global/Card/Card';

function Login() {

  return (
    <Card>
      <div className="form">
          <form action="">
              <div className="form__head">
                  <h2 className="form__title">Login</h2>
              </div>

              <div className="form__body">
                  <div className="form__row">
                      <label htmlFor="register-email" className="form__label">Email</label>

                      <input type="email" id="register-email" className="form__input" />
                  </div>

                  <div className="form__row">
                      <label htmlFor="register-first-name" className="form__label">Password</label>

                      <input type="password" id="register-password" className="form__input" />
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