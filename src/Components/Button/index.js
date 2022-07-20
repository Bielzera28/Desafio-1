import "./styles.css";

function Button({children, backgroundColor, color, fontSize, padding, fontWeight }) {
  return <div style={{ backgroundColor, color, fontSize, padding, fontWeight }}> {children}</div>;
}

export default Button;
