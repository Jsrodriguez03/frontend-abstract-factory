// src/UI/dark/DarkInput.tsx
import React from "react";

interface Props {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DarkInput: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
}) => (
  <input
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={{
      backgroundColor: "#364153",
      color: "#f9fafb",
      padding: "14px 20px",
      borderRadius: "10px",
      border: "1px solid #374151",
      width: "91%",
      marginTop: "6px",
      marginBottom: "24px",
      fontSize: "16px",
      outline: "none",
      transition: "border-color 0.3s ease",
    }}
    onFocus={(e) => (e.currentTarget.style.borderColor = "#818cf8")}
    onBlur={(e) => (e.currentTarget.style.borderColor = "#374151")}
  />
);
