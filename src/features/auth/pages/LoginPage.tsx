import { useState, type FormEvent } from "react";
import { useAuth } from "../useAuth";
import "./LoginPage.css";
import { ROLE_ROUTE_MAP } from "../../../config/routes";
import type { AuthData } from "../auth.types";
import { NavLink, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let emailErrorMessage = "";
    let passwordErrorMessage = "";

    if (!email.trim()) {
      emailErrorMessage = "Email is required";
    }

    if (!password.trim()) {
      passwordErrorMessage = "Password is required";
    }

    setEmailError(emailErrorMessage);
    setPasswordError(passwordErrorMessage);

    if (emailErrorMessage || passwordErrorMessage) {
      return;
    }

    setLoginError("");
    setIsLoading(true);

    try {
      const auth: AuthData = await login({
        email: email.trim(),
        password,
      });
      const route = ROLE_ROUTE_MAP[auth.role];
      navigate(`/${route}/dashboard`);
    } catch (err) {
      console.error(err);
      setLoginError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              autoComplete="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
                setLoginError("");
              }}
            />

            {emailError && <p className="error-message">{emailError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
                setLoginError("");
              }}
            />

            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>

          {loginError && <p className="login-error">{loginError}</p>}

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="request-access">
          <span>Don't have an account?</span>
          <NavLink to="/requestAccess">Request access</NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
