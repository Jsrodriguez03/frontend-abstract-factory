import React from "react";

interface LightInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LightInput: React.FC<LightInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        backgroundColor: "#f9fafb",
        color: "#111827",
        padding: "14px 20px",
        borderRadius: "10px",
        border: "1px solid #d1d5db",
        width: "91%",
        marginTop: "6px",
        marginBottom: "24px",
        fontSize: "16px",
        outline: "none",
        transition: "border-color 0.3s ease",
      }}
      onFocus={(e) => (e.currentTarget.style.borderColor = "#2563eb")}
      onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
    />
  );
};
