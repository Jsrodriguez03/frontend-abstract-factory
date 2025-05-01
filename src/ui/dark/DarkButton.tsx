import React from "react";

interface DarkButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const DarkButton = ({
  onClick,
  disabled = false,
  children,
}: DarkButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: "#1A1A1A",
        color: "white",
        padding: "10px 16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: "15px",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {children}
    </button>
  );
};
