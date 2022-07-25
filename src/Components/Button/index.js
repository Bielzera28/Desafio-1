function Button({children, backgroundColor, color, fontSize, padding, fontWeight }) {
  return <div className="button" style={{ backgroundColor, color, fontSize, padding, fontWeight }}> {children}</div>;
}

export default Button;
