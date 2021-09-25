import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Redirect } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [samasya, setSamasya] = useState('');

  const auth = getAuth();
  const handleLogin = (e, auth, email, password) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        localStorage.setItem('user', JSON.stringify(userCredential.user));
        // ...
      })
      .catch((error) => {
        setSamasya(error.message.slice(22, -2));
      });
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Navbar />
      <div className="w-screen flex flex-col justify-center items-center h-5/6">
        <form className="flex flex-col bg-primary shadow-pn  rounded-lg p-7 mt-14 w-2/6 font-sans  ">
          <div className="font-medium text-3xl text-center">Login</div>
          {samasya && (
            <p className="text-md font-sans text-secondary-brightred text-center">
              {samasya}
            </p>
          )}
          <label htmlFor="email" className="mt-5 text-xl">
            Email:
          </label>
          <input
            type="text"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mt-2 w-86 h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-4"
          ></input>
          <label htmlFor="password" className="mt-5 text-xl">
            Password:
          </label>
          <input
            type="password"
            name="pass"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mt-2 w-86 h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-4"
          ></input>
          <button
            onClick={(e) => handleLogin(e, auth, email, password)}
            className="mt-8 w-36 h-10 bg-secondary-red items-center rounded-md shadow-md text-primary text-xl font-medium"
          >
            Submit
          </button>
          <div className="mt-8 text-xl">
            Need an account?
            <Link to="/signup">
              <span className="cursor-pointer underline underline-secondary-blue text-secondary-blue">
                Signup
              </span>
            </Link>
            .
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
