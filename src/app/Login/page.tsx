"use client";
import { useState, FormEvent } from "react";

 function Login() {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPopup(true); // Show the popup
    setTimeout(() => setShowPopup(false), 3000); // Hide it after 3 seconds
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {showPopup && (
        <div style={styles.popup}>
          Login Successful!
        </div>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    padding: "10px",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  popup: {
    position: "absolute",
    top: "20px",
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
  },
};


export default Login;