import "./Header.css";
import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import { useUserContext } from '../context/userContext';
import axios from "axios"


const Header = () => {
  const { user } = useUserContext();
  useEffect(() => {
    axios.get(`http://localhost:5000/getUserDetails/${user.uid}`)
    .then(res => {
        console.log(res.data)
    })
  }
  )




  //  const getAccountInfo = async () => {
  //       const auth_id = localStorage.getItem('AuthID')
  //       const response = await localhost.get(`/getUserDetails/${auth_id}`);
  //       console.log(response.data);
  //       setData(response.data.message);
  //   }
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
