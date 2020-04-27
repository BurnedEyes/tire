import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      mail: '',
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            login:
        <input type="text" name="login" onChange={e => this.setState({login: e.target.value})} />
          </label>
          <label>password:
      <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} />
          </label>
          <label>mail:
      <input type="text" name="mail" onChange={e => this.setState({mail: e.target.value})}  />
          </label>
          <button>Send </button>
        </form>
      </div>

    );
  }
}

export default App;
