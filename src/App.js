import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    nameEntered: '',
    isNameValid: false,
    emailEntered: '',
    isEmailValid: false,
    phoneNumberEntered: '',
    isPhoneNumberValid: false
  };

  inputClassNameHelper = boolean => {
    switch (boolean) {
      case true:
        return 'is-valid';
      case false:
        return 'is-invalid';
      default:
        return '';
    }
  };

  isEveryFieldValid = () => {
    const { isNameValid, isEmailValid, isPhoneNumberValid } = this.state;
    return isNameValid && isEmailValid && isPhoneNumberValid;
  };

  renderSubmitBtn = () => {
    if (this.isEveryFieldValid()) {
      return (
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      );
    }

    return (
      <button type="submit" className="btn btn-primary btn-block" disabled>
        Submit
      </button>
    );
  };

  validateName = nameEntered => {
    if (nameEntered.length > 1) {
      this.setState({
        isNameValid: true,
        nameEntered
      });
    } else {
      this.setState({
        isNameValid: false,
        nameEntered
      });
    }
  };

  isEnteredNameValid = () => {
    const { nameEntered, isNameValid } = this.state;

    if (nameEntered) return isNameValid;
  };

  validateEmail = emailEntered => {
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

    if (emailEntered.match(emailRegExp)) {
      this.setState({
        isEmailValid: true,
        emailEntered
      });
    } else {
      this.setState({
        isEmailValid: false,
        emailEntered
      });
    }
  };

  isEnteredEmailValid = () => {
    const { emailEntered, isEmailValid } = this.state;

    if (emailEntered) return isEmailValid;
  };

  validatePhoneNumber = phoneNumberInput => {
    const phoneNumberRegExp = /^\d{3}-\d{3,4}-\d{4}$/;

    if (phoneNumberInput.match(phoneNumberRegExp)) {
      this.setState({
        isPhoneNumberValid: true,
        phoneNumberEntered: phoneNumberInput
      });
    } else {
      this.setState({
        isPhoneNumberValid: false,
        phoneNumberEntered: phoneNumberInput
      });
    }
  };

  isEnteredPhoneNumberValid = () => {
    const { phoneNumberEntered, isPhoneNumberValid } = this.state;

    if (phoneNumberEntered) return isPhoneNumberValid;
  };

  render() {
    return (
      <div className="App">
        <form className="myForm">
          <div className="form-group">
            <label htmlFor="nameInput">이름</label>
            <input
              type="text"
              className={`form-control ${this.inputClassNameHelper(
                this.isEnteredNameValid()
              )}`}
              id="nameInput"
              placeholder="홍길동"
              onChange={e => this.validateName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">이메일</label>
            <input
              type="email"
              className={`form-control ${this.inputClassNameHelper(
                this.isEnteredEmailValid()
              )}`}
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="abc@gmail.com"
              onChange={e => this.validateEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumberInput">휴대폰 번호</label>
            <input
              type="text"
              className={`form-control ${this.inputClassNameHelper(
                this.isEnteredPhoneNumberValid()
              )}`}
              id="phoneNumberInput"
              placeholder="010-1234-1234"
              onChange={e => this.validatePhoneNumber(e.target.value)}
              required
            />
          </div>
          {this.renderSubmitBtn()}
        </form>
      </div>
    );
  }
}

export default App;
