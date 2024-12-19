"use client";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation"; // Import from next/navigation
import InputField from "../UI/InputField";
import Button from "../UI/Button";
import Alert from "../UI/Alert";
import styles from "./loginForm.module.css";

export default function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter(); // Use router from next/navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    console.log("Attempting login with", email, password);

    if (!email || !password) {
      setError("Fill in both email and password.");
      setIsLoading(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format.");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setIsLoading(false);
      return;
    }

    try {
      // Send login request to API
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/vendor/login`,
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 5000, // Timeout after 5 seconds
        }
      );

      console.log("Login Response:", response.data); // Log response data

      // Store authentication token in cookies
      Cookies.set('authToken', response.data.token, {
        expires: 7, // Token expires in 7 days
        path: '/', // Available across the entire site
        secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
        sameSite: 'strict', // Protect against CSRF
      });

      // Store user information in another cookie if needed
      if (response.data.user) {
        Cookies.set('userData', JSON.stringify(response.data.user), {
          expires: 7,
          path: '/',
        });
      }

      // Handle successful login
      setSuccess("Login successful!");
      onLoginSuccess(response.data);

      // Redirect to the dashboard after successful login
      router.push('/Dashboard'); // Adjust the path to the appropriate route
    } catch (error) {
      console.error("Login Error:", error);

      // Error handling
      if (error.response) {
        setError(
          error.response.data.alert?.message ||
          error.response.data.message ||
          "Login failed. Please try again."
        );
      } else if (error.request) {
        setError("No response from server. Please check your connection.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/static/img/perfumeimage.jpg"
          alt="Login illustration"
          className={styles.image}
        />
      </div>
      
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={`${styles.form} shadow-md`}>
          <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Romdul</h1>
          <p className="text-center mb-6">Login into your account</p>
          
          {error && <Alert message={error} type="error" />}
          {success && <Alert message={success} type="success" />}
          
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            style={{
              width: "100%",
              border: error ? "1px solid red" : "1px solid #ccc",
            }}
          />
          
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            style={{
              width: "100%",
              border: error ? "1px solid red" : "1px solid #ccc",
            }}
          />
          
          <Button 
            type="submit" 
            className={styles.loginButton}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
