import { useLocation, useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide on home page ("/" or "/home")
  if (location.pathname === "/" || location.pathname === "/home") {
    return null;
  }

  return (
    <button
    
      className="back-button"
      onClick={() => navigate(-1)}
      style={{
        
        // position: "fixed",
        top: 104,
        right: 26,
        zIndex: 1000,
        border: "none",
        borderRadius: "50%",
        width: 48,
        height: 48,
        fontSize: 24,
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      
      aria-label="Go Back"
      title="Go Back"
      
    ><img
    
    src="/course logo/back.png" alt="" />
      {/* &#8592; */}
    </button>
  );
};

export default BackButton;
