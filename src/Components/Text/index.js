import "./styles.css";

function Text ({children, fontSize, fontWeight, color}) {
    return (
     <div style={{fontSize, fontWeight, color}}>
      {children} 
     </div>
    );
  }
  
  export default Text;