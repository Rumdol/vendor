"use client";
import { useState } from "react";
import InputField from "../UI/InputField";
import Button from "../UI/Button";
import Alert from "../UI/Alert";
import styles from "./loginForm.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email && !password) {
      setError("Fill in both email and password.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setSuccess("Login successful!");
  };

  return (
    <div className={styles.container}>
      {/* Image container */}
      <div className={styles.imageContainer}>
        <img
          src="/static/img/perfumeimage.jpg"
          alt="Login illustration"
          className={styles.image}
        />
      </div>

      {/* Form container */}
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={`${styles.form} shadow-md`}>
          <h1 className="text-2xl font-bold mb-4 text-center">Welcom to Romdul</h1>
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
              resize: "none", // Non-resizable
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
              resize: "none",
              border: error ? "1px solid red" : "1px solid #ccc",
            }}
          />
          <Button type="submit" className={styles.loginButton}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
