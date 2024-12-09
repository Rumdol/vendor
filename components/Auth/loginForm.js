"use client";
import { useState } from 'react';
import InputField from '../UI/InputField';
import Button from '../UI/Button';
import Alert from '../UI/Alert';
import styles from './loginForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    console.log("Email:", email);
    console.log("Password:", password);

    if (!email && !password) {
      setError('Fill in both email and password.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setSuccess('Login successful!');
  };

  return (
    <div className={styles.container}>
      {/* Image container */}
      <div className={styles.imageContainer}>
        <img src="/static/img/perfumeimage.jpg" alt="Login illustration" className={styles.image} />
      </div>

      {/* Form container */}
    <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={`${styles.form} shadow-md`}>
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          {error && <Alert message={error} type="error" />}
          {success && <Alert message={success} type="success" />}
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
          <Button type="submit" className={styles.loginButton}>
            Login
          </Button>

    {/* Google Sign-In */}
    <div className="my-6 border-b text-center"> 
    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
    Or sign In with Google </div>
    </div>

    {/* Google Button */}
    <div className="flex flex-col items-center mt-4"> 
    <button
        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
        onClick={() => alert('Sign in with Google')} // Replace this with Google sign-in logic
    >
    <div className="bg-white p-2 rounded-full">
      <svg className="w-4" viewBox="0 0 533.5 544.3">
        <path
          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
          fill="#4285f4"
        />
        <path
          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
          fill="#34a853"
        />
        <path
          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
          fill="#fbbc04"
        />
        <path
          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
          fill="#ea4335"
        />
      </svg>
    </div>
    <span className="ml-4 text-sm">Sign In with Google</span> 
    </button>
    </div>
        </form>
      </div>
    </div>
  );
}
