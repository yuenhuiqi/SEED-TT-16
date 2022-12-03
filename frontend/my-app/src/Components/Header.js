import "./Header.css";
import { useState } from "react";
//import { FaTimes } from "react-icons/fa";
import UserForm from "./UserForm";

const Header = () => {
  const [isEditing, setIsEditing] = useState(false);

//   const saveUserDetailsHandler = (enteredUserData) => {
//     const UserData = {
//       ...enteredUserData,
//     };
//     }

    const startEditingHandler = () => {
      setIsEditing(true);
    };

    const stopEditingHandler = () => {
      setIsEditing(false);
    };

    return (
      <div>
        <h1>Hello FirstName </h1>

        {!isEditing && (
          <button onClick={startEditingHandler} >Edit User Details</button>
        )}
        {isEditing && (
          <UserForm
            // onSaveUserDetails={saveUserDetailsHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    );
  };


export default Header;
