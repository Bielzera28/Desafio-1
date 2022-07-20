import "./styles.css";

function Text({ children, fontSize, fontWeight, color, padding }) {
  return <div style={{ fontSize, fontWeight, color, padding }}>{children}</div>;
}

export default Text;
