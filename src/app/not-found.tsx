import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{ height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div>
        <h1 style={{ fontSize: "45px", marginBottom: "24px" }}>404 not found</h1>
        <p
          style={{
            fontFamily: "League Spartan",
            textAlign: "center",
            fontSize: "30px",
            paddingBottom: "40px",
            marginBottom: "50px",
            color: "#bbb",
            border: 0,
            borderBottomWidth: "1px",
            borderColor: "#777",
            borderStyle: "solid",
          }}
        >
          Page does not exist
        </p>
        <Link
          href="/"
          style={{
            fontFamily: "League Spartan",
            fontSize: "40px",
            textAlign: "center",
            color: "white",
            textDecoration: "none",
          }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
