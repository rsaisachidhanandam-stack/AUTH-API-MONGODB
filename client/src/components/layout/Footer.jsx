function Footer() {
  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "16px 24px",
        backgroundColor: "#111827",
        color: "#9ca3af",
        textAlign: "center",
        fontSize: "14px",
      }}
    >
      <p>
        © {new Date().getFullYear()} BlogSphere. Built by Sai Sachidhanandam.
      </p>
    </footer>
  );
}

export default Footer;
