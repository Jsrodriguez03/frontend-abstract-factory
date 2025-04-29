// src/factory/DarkUIFactory.tsx
import { UIFactory } from "./UIFactory";

export class DarkUIFactory implements UIFactory {
  createButton(
    label: string,
    onClick: () => void,
    disabled = false
  ): JSX.Element {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        style={{
          backgroundColor: disabled ? "#19439B" : "#155DFC",
          color: disabled ? "#B4B4B4" : "#ffffff",
          padding: "14px 24px",
          borderRadius: "10px",
          border: "none",
          marginTop: "8px",
          cursor: disabled ? "not-allowed" : "pointer",
          fontSize: "16px",
          fontWeight: "600",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#1447E6";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#155DFC";
        }}
      >
        {label}
      </button>
    );
  }

  //Input Para Monto
  createInput(
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ): JSX.Element {
    return (
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
  }

  createSelect(
    options: { label: string; value: string }[],
    value: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  ): JSX.Element {
    return (
      <select
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: "#364153",
          color: "#f9fafb",
          padding: "14px 20px",
          borderRadius: "10px",
          border: "1px solid #374151",
          width: "100%",
          marginTop: "6px",
          marginBottom: "24px",
          fontSize: "16px",
          outline: "none",
          transition: "border-color 0.3s ease",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#818cf8")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#374151")}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }

  createContainer(children: React.ReactNode): JSX.Element {
    return (
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
  }
}
