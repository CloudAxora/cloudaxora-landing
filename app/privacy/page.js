export const metadata = {
  title: "Privacy Policy - CloudAxora",
  description: "Privacy Policy for CloudAxora."
};

const wrap = {
  minHeight: "100vh",
  background: "#0b1020",
  color: "#e9eefc",
};

const container = {
  maxWidth: 920,
  margin: "0 auto",
  padding: "48px 20px",
  lineHeight: 1.65,
};

const card = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 18,
  padding: 18,
};

const h1 = { margin: "0 0 10px", fontSize: 34, fontWeight: 900 };
const h2 = { margin: "22px 0 8px", fontSize: 18, fontWeight: 800 };
const p = { margin: "8px 0", opacity: 0.92 };
const li = { margin: "6px 0", opacity: 0.92 };

export default function PrivacyPage() {
  return (
    <div style={wrap}>
      <div style={container}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <div style={{ fontWeight: 900, letterSpacing: 0.3 }}>CloudAxora</div>
          <a href="/" style={{ color: "#cdd6ff", textDecoration: "none", fontWeight: 700 }}>← Back</a>
        </div>

        <div style={card}>
          <h1 style={h1}>Privacy Policy</h1>
          <p style={p}>Effective date: {new Date().toISOString().slice(0, 10)}</p>

          <p style={p}>
            CloudAxora (“we”, “us”) provides AWS cost and security audit services. This policy explains what data we collect,
            how we use it, and how we keep it safe.
          </p>

          <h2 style={h2}>1) Information we collect</h2>
          <ul>
            <li style={li}>Contact details you submit (name, email, company, role).</li>
            <li style={li}>High-level AWS environment details you share (e.g., #accounts, priorities).</li>
            <li style={li}>
              Audit outputs (findings, recommendations, reports) generated from either a read-only role or exports you provide.
            </li>
          </ul>

          <h2 style={h2}>2) What we do NOT collect</h2>
          <ul>
            <li style={li}>We do not ask for your AWS root credentials.</li>
            <li style={li}>We do not ask for long-lived access keys as a requirement.</li>
            <li style={li}>We do not make changes in your AWS accounts without your explicit approval.</li>
          </ul>

          <h2 style={h2}>3) How we use your information</h2>
          <ul>
            <li style={li}>To contact you and deliver the audit report you requested.</li>
            <li style={li}>To improve our audit checks and report clarity.</li>
            <li style={li}>To provide ongoing weekly monitoring if you opt in.</li>
          </ul>

          <h2 style={h2}>4) Data security</h2>
          <p style={p}>
            If you provide read-only access via an IAM role, you can revoke it anytime. If you provide exports-only,
            we only use the data you share. We store data only as needed to deliver and support your audit service.
          </p>

          <h2 style={h2}>5) Data retention</h2>
          <p style={p}>
            We retain audit data for a limited period necessary to deliver your report and provide follow-up support.
            You can request deletion at any time by emailing{" "}
            <a style={{ color: "#cdd6ff" }} href="mailto:hello@cloudaxora.com">hello@cloudaxora.com</a>.
          </p>

          <h2 style={h2}>6) Contact</h2>
          <p style={p}>
            Questions? Email{" "}
            <a style={{ color: "#cdd6ff" }} href="mailto:hello@cloudaxora.com">hello@cloudaxora.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
