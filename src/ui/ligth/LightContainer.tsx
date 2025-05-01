import React from "react";

export const LightContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#111827",
        padding: "30px",
        borderRadius: "12px",
        maxWidth: "450px",
        margin: "60px auto",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      {children}
    </div>
  );
};
