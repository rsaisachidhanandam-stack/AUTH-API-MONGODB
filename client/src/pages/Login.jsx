import { Link } from "react-router-dom";

function Login() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 128px)",
        padding: "40px 24px",
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Login</h2>
      <p style={{ marginBottom: "16px" }}>
        This is a placeholder for the login form. You will connect it to your
        BlogSphere backend APIs in a later lesson.
      </p>

      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          border: "1px dashed #9ca3af",
          borderRadius: "8px",
        }}
      >
        <p style={{ marginBottom: "8px" }}>New to BlogSphere?</p>
        <Link to="/register" style={{ color: "#2563eb" }}>
          Create an account
        </Link>
      </div>
    </main>
  );
}

export default Login;
