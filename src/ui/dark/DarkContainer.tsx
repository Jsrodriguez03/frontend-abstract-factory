// src/UI/dark/DarkContainer.tsx
import React from "react";

export const DarkContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div
    style={{
      backgroundColor: "#1E2939",
      color: "#f9fafb",
      padding: "30px",
      borderRadius: "12px",
      maxWidth: "450px",
      margin: "60px auto",
    }}
  >
    {children}
  </div>
);
