import "./styles.css";

function Text({ children, fontSize, fontWeight, color, padding, lineHeight }) {
  return <div style={{ fontSize, fontWeight, color, padding, lineHeight }}>{children}</div>;
}

export default Text;
