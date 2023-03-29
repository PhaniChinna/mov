import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitFailureData = errorMsg => {
    this.setState({
      showErrorMsg: true,
      errorMsg,
    })
  }

  onSubmitSuccess = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const UserDetails = {username, password}
    const LoginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }
    const response = await fetch(LoginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state
    return (
      <div className="Login-container">
        <div className="Login-page-container">
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679643790/Group_7399_bzo5kj.png"
            className="Movies-LoginPage"
            alt="Movies"
          />
          <div className="Login-form-container">
            <form className="Form-Container" onSubmit={this.onSubmitSuccess}>
              <h1 className="Form-Heading">Login</h1>
              <label className="Login-user-username" htmlFor="username">
                USERNAME
              </label>
              <input
                className="Login-user-input"
                type="text"
                id="username"
                value={username}
                placeholder="Username"
                onChange={this.onChangeUsername}
              />
              <label className="Login-user-password" htmlFor="Password">
                PASSWORD
              </label>
              <input
                className="Login-user-password-input"
                type="password"
                id="Password"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
              {showErrorMsg && <p>{errorMsg}</p>}
              <button className="Login-input-button" type="submit">
                LogIn
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginRoute
