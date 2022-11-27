import { useEffect, useState } from "react";
import Hello from "./Hello";
import NameEdit from "./NameEdit";
import "./App.scss";
import Errors from "./Errors";

function App() {
  const [name, setName] = useState<string>("defaultUserName");
  const [editingName, setEditingName] = useState<string>("defaultUserName");
  const [errors, setErrors] = useState<string[]>([]);

  // const disabled =
  //   editingName === "" || editingName === name || !validate(editingName);

  const isValid = errors.length === 0;

  const validate = () => {
    let valid = true;
    let _errors: string[] = [];

    if (editingName === "") {
      _errors = [..._errors, "Editing name is empty."];
      valid = false;
    } else {
      if (editingName === name) {
        _errors = [..._errors, "Names are equal."];
        valid = false;
      }
      if (!hasNumber(editingName)) {
        _errors = [..._errors, "At least one number."];
        valid = false;
      }
      if (!hasLowercase(editingName)) {
        _errors = [..._errors, "At least one lowercase."];
        valid = false;
      }
      if (!hasUppercase(editingName)) {
        _errors = [..._errors, "At least one uppercase."];
        valid = false;
      }
      if (!hasSpecialChar(editingName)) {
        _errors = [..._errors, "At least one special char."];
        valid = false;
      }
    }

    setErrors(_errors);
    return valid;
  };

  const loadName = () => {
    setTimeout(() => {
      setName("name from async call");
      setEditingName("name from async call");
    }, 500);
  };

  useEffect(() => {
    loadName();
  }, []);

  useEffect(() => {
    validate();
  }, [editingName]);

  const onNameChange = (val: string) => {
    setEditingName(val);
  };

  const onNameUpdated = () => {
    setName(editingName);
  };

  return (
    <div className="App">
      <NameEdit
        editingName={editingName}
        onNameChange={onNameChange}
        onNameUpdated={onNameUpdated}
        disabled={!isValid}
      />
      <Hello name={name} />
      <Errors errors={errors} />
    </div>
  );
}

function validate(val: string) {
  return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(val);
}

function hasNumber(val: string) {
  return /(?=.*\d)/.test(val);
}

function hasLowercase(val: string) {
  return /(?=.*[a-z])/.test(val);
}

function hasUppercase(val: string) {
  return /(?=.*[A-Z])/.test(val);
}

function hasSpecialChar(val: string) {
  return /[(.&@_)]/.test(val);
}

export default App;

// (?=.*[a-z])        // use positive look ahead to see if at least one lower case letter exists
// (?=.*[A-Z])        // use positive look ahead to see if at least one upper case letter exists
// (?=.*\d)           // use positive look ahead to see if at least one digit exists
// (?=.*\W)           // use positive look ahead to see if at least one non-word character exists
