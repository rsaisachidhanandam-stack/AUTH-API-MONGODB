import { Link } from "react-router-dom";

function Home() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 128px)",
        padding: "40px 24px",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
          Share your stories with the world
        </h2>
        <p style={{ fontSize: "16px", marginBottom: "24px" }}>
          BlogSphere is a simple platform for writers and creators to publish
          blog posts, discover new ideas, and build an audience.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <Link
            to="/register"
            style={{
              padding: "10px 20px",
              backgroundColor: "#2563eb",
              color: "#f9fafb",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Start writing
          </Link>
          <Link
            to="/login"
            style={{
              padding: "10px 20px",
              border: "1px solid #2563eb",
              color: "#2563eb",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </div>
      </section>

      <section>
        <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>
          Why BlogSphere?
        </h3>
        <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
          <li>Write and publish blog posts in minutes.</li>
          <li>Organize posts by categories and tags.</li>
          <li>Save your drafts and update them anytime.</li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
