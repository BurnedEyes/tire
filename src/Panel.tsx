import React, { ChangeEvent } from "react";
import "./Panel.css";
import { PanelType } from "./PanelType";
import LoadingSpinner from "./LoadingSpinner";

class Panel extends React.Component<PanelProps, RegisterState> {
  constructor(props: PanelProps) {
    super(props);
    this.state = {
      login: "",
      password: "",
      mail: "",
      repassword: "",
      isLoading: false,
      succeed: false,
    };
  }

  render() {
    return this.state.isLoading ? (
      <div className="Panel">
        <LoadingSpinner />
      </div>
    ) : this.state.succeed ? (
      <div className="Panel">
        <div>
          <h1>Gratulacje!</h1>
          <p>
            Udało się poprawnie{" "}
            {this.props.type === PanelType.Register
              ? "zarejestrować"
              : "zalogować"}
            .
          </p>
        </div>
      </div>
    ) : (
      <div className={this.props.initActive ? "Panel" : "Panel Inactive"}>
        <h1>{PanelType[this.props.type]}</h1>
        <div className="PanelInput">
          <input
            placeholder="login"
            type="text"
            name="login"
            onChange={this.onInputChange}
          />
          <input
            className={
              this.props.type === PanelType.Register &&
              this.state.password.length > 0 &&
              !this.validatePassword()
                ? "error"
                : ""
            }
            id="pass"
            placeholder="password"
            type="password"
            name="password"
            onChange={this.onInputChange}
          />
          {this.props.type === PanelType.Register && (
            <input
              className={
                this.state.repassword.length > 0 &&
                !this.checkPasswordsEquality()
                  ? "error"
                  : ""
              }
              id="repass"
              placeholder="confirm password"
              type="password"
              name="repassword"
              onChange={this.onInputChange}
            />
          )}
          {this.props.type === PanelType.Register && (
            <input
              className={
                this.state.mail.length > 0 && !this.validateMail()
                  ? "error"
                  : ""
              }
              placeholder="example@mail.com"
              type="email"
              name="mail"
              onChange={this.onInputChange}
            />
          )}
        </div>
        {this.props.type === PanelType.Register ? (
          <button onClick={this.handleSignIn}>Sign in</button>
        ) : (
          <button onClick={this.handleLogIn}>Log in</button>
        )}
      </div>
    );
  }

  validatePassword = (): boolean => {
    return this.state.password.length > 7;
  };

  checkPasswordsEquality = (): boolean => {
    return this.state.password === this.state.repassword;
  };

  validateMail = (): boolean => {
    return this.state.mail.includes("@");
  };

  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as any);
  };

  handleSignIn = (e: any) => {
    e.preventDefault();
    if (
      this.validateMail() &&
      this.checkPasswordsEquality() &&
      this.validatePassword()
    ) {
      this.setState({ isLoading: true });
      setTimeout(
        () => this.setState({ succeed: true, isLoading: false }),
        3000
      );
    }
  };

  handleLogIn = (e: any) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ succeed: true, isLoading: false }), 3000);
  };
}

type PanelProps = {
  initActive: boolean;
  type: PanelType;
};

type RegisterState = {
  login: string;
  password: string;
  mail: string;
  repassword: string;
  isLoading: boolean;
  succeed: boolean;
};

export default Panel;
