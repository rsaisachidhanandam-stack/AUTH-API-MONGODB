import { Link } from "react-router-dom";

function Register() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 128px)",
        padding: "40px 24px",
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
        Create your BlogSphere account
      </h2>
      <p style={{ marginBottom: "16px" }}>
        This is a placeholder for the registration form. Later you will send the
        data to your Node + MongoDB backend.
      </p>

      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          border: "1px dashed #9ca3af",
          borderRadius: "8px",
        }}
      >
        <p style={{ marginBottom: "8px" }}>Already have an account?</p>
        <Link to="/login" style={{ color: "#2563eb" }}>
          Login here
        </Link>
      </div>
    </main>
  );
}

export default Register;
