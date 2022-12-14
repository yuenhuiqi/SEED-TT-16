import { useState } from "react";

const UserForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("tomlim@easymail.com");
  const [enteredAddress, setEnteredAddress] = useState(
    "Block 123 Serangoon Garden #10-129"
  );

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      email: enteredEmail,
      address: enteredAddress,
    };

    //props.onSaveUserDetails(userData);
    setEnteredEmail(userData.email);
    setEnteredAddress(userData.address);
  };

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const addressChangeHandler = (event) => {
  //   setEnteredAddress(event.target.value);
  // };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={enteredEmail}
          onChange={(event) => setEnteredEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          value={enteredAddress}
          onChange={(event) => setEnteredAddress(event.target.value)}
        />
      </div>

      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button type="submit" onClick={submitHandler}>
        Save
      </button>
    </form>
  );
};

export default UserForm;
