const FORM_URL = "https://forms.gle/JMPYpi5joFRcaNrPA";

const styles = {
  wrap: { minHeight: "100vh", background: "#0b1020", color: "#e9eefc" },
  container: { maxWidth: 980, margin: "0 auto", padding: "48px 20px" },
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 56 },
  brand: { fontWeight: 800, letterSpacing: 0.3, fontSize: 18 },
  pill: { padding: "10px 14px", background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 999, textDecoration: "none", color: "#e9eefc", fontWeight: 600 },
  hero: { display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 24, alignItems: "start" },
  h1: { fontSize: 44, lineHeight: 1.05, margin: "0 0 12px", fontWeight: 900 },
  sub: { fontSize: 18, lineHeight: 1.5, opacity: 0.9, margin: "0 0 22px" },
  ctas: { display: "flex", gap: 12, flexWrap: "wrap" },
  primary: { padding: "12px 16px", background: "#7c5cff", borderRadius: 12, textDecoration: "none", color: "white", fontWeight: 800, display: "inline-block" },
  secondary: { padding: "12px 16px", background: "rgba(255,255,255,0.08)", borderRadius: 12, textDecoration: "none", color: "#e9eefc", fontWeight: 700, border: "1px solid rgba(255,255,255,0.12)", display: "inline-block" },
  card: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 18, padding: 18 },
  grid: { display: "grid", gap: 14, marginTop: 12 },
  k: { fontWeight: 800, marginBottom: 6 },
  li: { margin: "10px 0", opacity: 0.92, lineHeight: 1.45 },
  section: { marginTop: 26, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 },
  footer: { marginTop: 56, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.12)", opacity: 0.9, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }
};

export default function Page() {
  return (
    <div style={styles.wrap}>
      <div style={styles.container}>
        <div style={styles.nav}>
          <div style={styles.brand}>CloudAxora</div>
          <a href={FORM_URL} style={styles.pill} target="_blank" rel="noreferrer">Get a Free AWS Audit</a>
        </div>

        <div style={styles.hero}>
          <div>
            <h1 style={styles.h1}>Weekly AWS cost + security audits with fix steps.</h1>
            <p style={styles.sub}>
              CloudAxora detects cost leaks and security risks across AWS accounts and delivers an executive-ready report—every week.
              Start with a free audit report in 24 hours.
            </p>
            <div style={styles.ctas}>
              <a href={FORM_URL} style={styles.primary} target="_blank" rel="noreferrer">Request Free Audit</a>
              <a href="#how" style={styles.secondary}>How it works</a>
            </div>

            <div style={styles.section}>
              <div style={styles.card}>
                <div style={styles.k}>What you get</div>
                <div style={styles.li}>• Top cost leaks + estimated monthly savings</div>
                <div style={styles.li}>• Top security risks + severity</div>
                <div style={styles.li}>• Quick wins checklist</div>
                <div style={styles.li}>• Clear remediation steps</div>
              </div>
              <div style={styles.card}>
                <div style={styles.k}>Safe access</div>
                <div style={styles.li}>• Read-only IAM role (STS AssumeRole)</div>
                <div style={styles.li}>• No access keys shared</div>
                <div style={styles.li}>• You can revoke access anytime</div>
                <div style={styles.li}>• Exports-only option available</div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.k}>Free Audit (24 hours)</div>
            <p style={{ marginTop: 8, opacity: 0.92, lineHeight: 1.5 }}>
              We’re onboarding a small set of pilot teams. Fill the form and we’ll send a report format + next steps.
            </p>
            <div style={styles.grid}>
              <a href={FORM_URL} style={styles.primary} target="_blank" rel="noreferrer">Open Request Form</a>
              <a href="mailto:hello@cloudaxora.com" style={styles.secondary}>Email us</a>
            </div>
          </div>
        </div>

        <div id="how" style={{ marginTop: 54 }}>
          <h2 style={{ margin: "0 0 10px" }}>How it works</h2>
          <div style={styles.section}>
            <div style={styles.card}>
              <div style={styles.k}>1) Request</div>
              <div style={styles.li}>Share basic details and your priority: cost, security, or both.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.k}>2) Audit</div>
              <div style={styles.li}>We run a read-only audit (or exports-only) to identify top issues.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.k}>3) Report</div>
              <div style={styles.li}>You receive a clear report with savings, risks, and fix steps in 24 hours.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.k}>4) Weekly</div>
              <div style={styles.li}>If useful, we monitor weekly and track new vs resolved findings.</div>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          <div>© {new Date().getFullYear()} CloudAxora</div>
          <div>Contact: <a style={{ color: "#cdd6ff" }} href="mailto:hello@cloudaxora.com">hello@cloudaxora.com</a></div>
        </div>
      </div>
    </div>
  );
}
