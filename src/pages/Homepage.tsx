import React, { Component } from 'react';
import "./App.css";

interface FormProps {
  onFormSubmit: () => void;
}

class Form1 extends Component<FormProps> {
  render() {
    return (
      <form className="form-container">
        <div className="form-header">
          Lettuce
        </div>
        <hr />
        <div>
          
          <input type="file" id="field1" name="field1" /><br /><br />
        </div>
        <button type="submit" className="submit-button" onClick={this.props.onFormSubmit}>Submit</button>
      </form>
    );
  }
}

class Form2 extends Component<FormProps> {
  render() {
    return (
      <form className="form-container">
        <div className="form-header">
          Tomato
        </div>
        <hr />
        <div>
          
          <input type="file" id="field2" name="field2" /><br /><br />
        </div>
        <button type="submit" className="submit-button" onClick={this.props.onFormSubmit}>Submit</button>
      </form>
    );
  }
}

class Form3 extends Component<FormProps> {
  render() {
    return (
      <form className="form-container">
        <div className="form-header">
          Basil
        </div>
        <hr />
        <div>
          
          <input type="file" id="field3" name="field3" /><br /><br />
        </div>
        <button type="submit" className="submit-button" onClick={this.props.onFormSubmit}>Submit</button>
      </form>
    );
  }
}

class NewForm extends Component {
  render() {
    return (
      <div className="form-container">
        <div className="form-header">
          AI Model
        </div>
        <hr />
        {/* Add the content of your new form here */}
      </div>
    );
  }
}

interface AppState {
  currentForm: React.ReactNode;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentForm: (
        <div>
          <Form1 onFormSubmit={this.handleFormSubmit} />
          <Form2 onFormSubmit={this.handleFormSubmit} />
          <Form3 onFormSubmit={this.handleFormSubmit} />
        </div>
      ),
    };
  }

  handleFormSubmit = () => {
    // Replace all three forms with the NewForm component
    this.setState({ currentForm: <NewForm /> });
  };

  render() {
    return (
      <div className="App">
        {this.state.currentForm}
      </div>
    );
  }
}

export default App;
