function Dashboard() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 128px)",
        padding: "40px 24px",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Dashboard</h2>
      <p style={{ marginBottom: "8px" }}>
        Welcome to your BlogSphere dashboard. In future lessons this page will
        show your posts, drafts, and basic stats.
      </p>
      <p>For now, reaching this page confirms that your routing works.</p>
    </main>
  );
}

export default Dashboard;
