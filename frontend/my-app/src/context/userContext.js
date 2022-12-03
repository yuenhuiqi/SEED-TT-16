import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useContext, useState } from 'react';
import { auth } from '../utils/firebase';

export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, async (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError('');
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInEmailAndPassword = (email, password) => {
    setLoading(true);
    setError('');

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.code);
      })
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const contextValue = {
    user,
    loading,
    error,
    logoutUser,
    signInEmailAndPassword,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
