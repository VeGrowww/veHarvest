import React, { useState, useCallback } from "react";
import "./App.css";

interface FormProps {
  onFormSubmit: () => void;
}

class Form1 extends Component<FormProps> {
  render() {
    return (
      <form className="form-container">
        <div className="form-header">Lettuce</div>
        <hr />
        <div>
          <input type="file" id="field1" name="field1" />
          <br />
          <br />
        </div>
        <button
          type="submit"
          className="submit-button"
          onClick={this.props.onFormSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

class Form2 extends Component<FormProps> {
  render() {
    return (
      <form className="form-container">
        <div className="form-header">Tomato</div>
        <hr />
        <div>
          <input type="file" id="field2" name="field2" />
          <br />
          <br />
        </div>
        <button
          type="submit"
          className="submit-button"
          onClick={this.props.onFormSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

function Form3(props: FormProps) {
  return (
    <form className="form-container">
      <div className="form-header">Basil</div>
      <hr />
      <div>
        <input type="file" id="field3" name="field3" />
        <br />
        <br />
      </div>
      <button
        type="submit"
        className="submit-button"
        onClick={props.onFormSubmit}
      >
        Submit
      </button>
    </form>
  );
}

function NewForm() {
  return (
    <div className="form-container">
      <div className="form-header">AI Model</div>
      <hr />
      {/* Add the content of your new form here */}
    </div>
  );
}

function App() {
  const handleFormSubmit = useCallback(() => {
    // Replace all three forms with the NewForm component
    setCurrentForm(<NewForm />);
  }, []);

  const [currentForm, setCurrentForm] = useState(
    <div>
      <Form1 onFormSubmit={handleFormSubmit} />
      <Form2 onFormSubmit={handleFormSubmit} />
      <Form3 onFormSubmit={handleFormSubmit} />
    </div>
  );

  return <div className="App">{currentForm}</div>;
}

export default App;
