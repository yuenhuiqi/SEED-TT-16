import "./Header.css";
import { useState } from "react";
import UserForm from "./UserForm";


const Header = () => {
   const getAccountInfo = async () => {
        const response = await localhost.get(`/getUserDetails/{props.user_id}`);
        console.log(response.data);
        setData(response.data.message);
    }
  const [isEditing, setIsEditing] = useState(false);

//   const saveUserDetailsHandler = (enteredUserData) => {
//     const UserData = {
//       ...enteredUserData,
//     };
//     }

    const startEditingHandler = () => {
      setIsEditing(true);

    //   const async () => {
    //     const response = await localhost.get(`/getUserDetails/<user_id>`);
    //     console.log(response.data);
    //     setData(response.data.message);
    };

    const stopEditingHandler = () => {
      setIsEditing(false);
    };

    return (
      <div>
        <div>Hello FirstName </div>

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
