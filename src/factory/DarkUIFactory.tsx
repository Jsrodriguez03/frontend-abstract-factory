// src/factory/DarkUIFactory.tsx
import { UIFactory } from "./UIFactory";

export class DarkUIFactory implements UIFactory {
  createButton(label: string, onClick: () => void): JSX.Element {
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: "#4f46e5",
          color: "#ffffff",
          padding: "14px 24px",
          borderRadius: "10px",
          border: "none",
          marginTop: "24px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "600",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4338ca")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4f46e5")}
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
          width: "92%",
          marginTop: "12px",
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
          marginTop: "12px",
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
          padding: "48px",
          borderRadius: "12px",
          maxWidth: "500px",
          margin: "60px auto",
        }}
      >
        {children}
      </div>
    );
  }
}
