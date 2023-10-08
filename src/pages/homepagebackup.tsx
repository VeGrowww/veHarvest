import React, { useState, useCallback } from "react";
import "./App.css";

interface FormProps {
  onFormSubmit: () => void;
  endpoint: string;
}

function Form1(props: FormProps) {
  const [postData, setPostData] = useState<any | null>(null);

  const handleSubmit = () => {
    const formData = {
      leftSize: 40,
      leafColor: "Green",
      fruitSize: 60,
      weekNumber: 7,
    };

    fetch(props.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
      });

    props.onFormSubmit();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-header">Tomato</div>
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
  const [postData, setPostData] = useState<any | null>(null);

  const handleSubmit = () => {
    // Define data for Form2
    const formData = {
      // Add Form2-specific data here
    };

    fetch(props.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
      });

    props.onFormSubmit();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-header">Lettuce</div>
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
  const [postData, setPostData] = useState<any | null>(null);

  const handleSubmit = () => {
    // Define data for Form3
    const formData = {
      // Add Form3-specific data here
    };

    fetch(props.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
      });

    props.onFormSubmit();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
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

function NewForm({ postData }: { postData: any }) {
  return (
    <div className="form-container">
      <div className="form-header">AI Model</div>
      <hr />
      <div>
        <p>Received Data:</p>
        <pre>{JSON.stringify(postData, null, 2)}</pre>
      </div>
    </div>
  );
}

function App() {
  const [postData, setPostData] = useState<any | null>(null);

  const handleFormSubmit = useCallback(() => {
    setCurrentForm(<NewForm postData={postData} />);
  }, [postData]);

  const [currentForm, setCurrentForm] = useState(() => (
    <>
      <Form1 onFormSubmit={handleFormSubmit} endpoint="/tomato" />
      <Form2 onFormSubmit={handleFormSubmit} endpoint="/lettuce" />
      <Form3 onFormSubmit={handleFormSubmit} endpoint="/basil" />
    </>
  ));

  return <div className="App">{currentForm}</div>;
}

export default App;
