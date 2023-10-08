import React, { useState, useCallback } from "react";
import "./App.css";

interface FormProps {
  onFormSubmit: () => void;
}

function Form1(props: FormProps) {
  return (
    <form className="form-container" onSubmit={props.onFormSubmit}>
      <div className="form-header">Lettuce</div>
      <hr />
      <div>
        <input type="file" id="field1" name="field1" />
        <input type="file" id="field1" name="field1" />
        <br />
        <br />
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

function Form2(props: FormProps) {
  return (
    <form className="form-container" onSubmit={props.onFormSubmit}>
      <div className="form-header">Tomato</div>
      <hr />
      <div>
        <input type="file" id="field2" name="field2" />
        <input type="file" id="field2" name="field2" />
        <br />
        <br />
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

function Form3(props: FormProps) {
  return (
    <form className="form-container" onSubmit={props.onFormSubmit}>
      <div className="form-header">Basil</div>
      <hr />
      <div>
        <input type="file" id="field3" name="field3" />
        <input type="file" id="field3" name="field3" />
        <br />
        <br />
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

function NewForm({ resultText }: { resultText: string }) {
  return (
    <div className="form-container">
      <div className="form-header">{resultText}</div>
      <hr />
      
    </div>
  );
}

function App() {
  const [resultText, setResultText] = useState("");
  const [showNewForm, setShowNewForm] = useState(false);

  const handleFormSubmit = useCallback((text: string) => {
    setResultText(text);
    setShowNewForm(true); // Show the NewForm when any form is submitted
  }, []);

  return (
    <div className="App">
      {showNewForm ? (
        <NewForm resultText={resultText} />
      ) : (
        <>
          <Form1 onFormSubmit={() => handleFormSubmit("viable picture")} />
          <Form2 onFormSubmit={() => handleFormSubmit("picture is not viable")} />
          <Form3 onFormSubmit={() => handleFormSubmit("picture is not viable")} />
        </>
      )}
    </div>
  );
}

export default App;
