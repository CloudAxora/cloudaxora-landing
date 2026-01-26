export const metadata = {
  title: "Terms - CloudAxora",
  description: "Terms of Service for CloudAxora."
};

const wrap = { minHeight: "100vh", background: "#0b1020", color: "#e9eefc" };
const container = { maxWidth: 920, margin: "0 auto", padding: "48px 20px", lineHeight: 1.65 };
const card = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 18,
  padding: 18
};
const h1 = { margin: "0 0 10px", fontSize: 34, fontWeight: 900 };
const h2 = { margin: "22px 0 8px", fontSize: 18, fontWeight: 800 };
const p = { margin: "8px 0", opacity: 0.92 };
const li = { margin: "6px 0", opacity: 0.92 };

export default function TermsPage() {
  const effectiveDate = new Date().toISOString().slice(0, 10);

  return (
    <div style={wrap}>
      <div style={container}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <div style={{ fontWeight: 900, letterSpacing: 0.3 }}>CloudAxora</div>
          <a href="/" style={{ color: "#cdd6ff", textDecoration: "none", fontWeight: 700 }}>← Back</a>
        </div>

        <div style={card}>
          <h1 style={h1}>Terms of Service</h1>
          <p style={p}>Effective date: {effectiveDate}</p>

          <p style={p}>
            These Terms govern your use of CloudAxora’s website and services (the “Services”). By using the Services,
            you agree to these Terms.
          </p>

          <h2 style={h2}>1) What we provide</h2>
          <ul>
            <li style={li}>AWS cost and security audits (one-time or recurring).</li>
            <li style={li}>Reports with findings and recommended remediation steps.</li>
            <li style={li}>Optional weekly monitoring if you opt in.</li>
          </ul>

          <h2 style={h2}>2) Access model</h2>
          <p style={p}>
            Audits are performed using either (a) a read-only IAM role you provide via STS AssumeRole, or (b) exports-only data
            you provide. You can revoke access at any time.
          </p>

          <h2 style={h2}>3) No unauthorized changes</h2>
          <p style={p}>
            We do not make changes in your AWS environment without your explicit approval. If you request implementation help,
            we proceed only after your confirmation.
          </p>

          <h2 style={h2}>4) Your responsibilities</h2>
          <ul>
            <li style={li}>Provide accurate information for the audit request.</li>
            <li style={li}>Ensure you have authorization to grant access or share exports.</li>
            <li style={li}>Review recommendations before applying them.</li>
          </ul>

          <h2 style={h2}>5) Disclaimer</h2>
          <p style={p}>
            Reports provide best-effort recommendations based on the information available at the time of the audit.
            We do not guarantee specific savings amounts or outcomes.
          </p>

          <h2 style={h2}>6) Limitation of liability</h2>
          <p style={p}>
            To the maximum extent permitted by law, CloudAxora is not liable for indirect, incidental, or consequential damages.
            Total liability for any claim is limited to the amount paid for the Services that gave rise to the claim.
          </p>

          <h2 style={h2}>7) Contact</h2>
          <p style={p}>
            Questions? Email{" "}
            <a style={{ color: "#cdd6ff" }} href="mailto:hello@cloudaxora.com">hello@cloudaxora.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
