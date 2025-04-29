// src/components/PaymentComponent.tsx
import { useState } from "react";
import { UIFactory } from "../factory/UIFactory";
import axios from "axios";
import Swal from "sweetalert2";

interface PaymentComponentProps {
  uiFactory: UIFactory;
}

export const PaymentComponent = ({ uiFactory }: PaymentComponentProps) => {
  const [paymentType, setPaymentType] = useState("Seleccione un Método");
  const [amount, setAmount] = useState("");
  const isFormValid =
    amount.trim() !== "" && paymentType !== "Seleccione un Método";
  const [notificationType, setNotificationType] = useState("Seleccionar");
  const [response, setResponse] = useState<any>(null);
  const [showSummary, setShowSummary] = useState(false); // 👈 nueva vista

  const handlePayment = async () => {
    try {
      const res = await axios.post("http://localhost:8080/payment/pay", null, {
        params: { paymentType, amount, notificationType },
      });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }

    setShowSummary(true);
  };

  const handleSendNotification = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/payment/notification",
        null,
        {
          params: { paymentType, amount, notificationType },
        }
      );
      setResponse(res.data);
      Swal.fire({
        toast: true,
        position: "bottom-end",
        icon: "success",
        title: "¡Notificación Enviada!",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
      setNotificationType("Seleccionar");
    } catch (error) {
      console.error(error);
      Swal.fire({
        toast: true,
        position: "bottom-end",
        icon: "error",
        title:
          "Error al enviar notificación, seleccione un tipo de notificación",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
    }
  };

  const handleNewPayment = () => {
    setAmount("");
    setPaymentType("Seleccione un Método");
    setNotificationType("Seleccionar");
    setResponse(null);
    setShowSummary(false);
  };

  if (showSummary) {
    return uiFactory.createContainer(
      <>
        <h2
          style={{ fontSize: "22px", fontWeight: "600", marginBottom: "30px" }}
        >
          <>
            <i className="fas fa-receipt text-white text-lg mr-2"></i> Factura
            de Pago
          </>
        </h2>
        {uiFactory.createKeyValueLine("Método de Pago:", paymentType)}
        {uiFactory.createKeyValueLine(
          "Monto Inicial:",
          `$${Number(amount).toFixed(2)} USD`
        )}

        {uiFactory.createKeyValueLine(
          "Total a Pagar:",
          `$${Number(response).toFixed(2)} USD`,
          {
            labelStyle: { fontSize: "16px", fontWeight: 600 },
            valueStyle: { fontWeight: 600, color: "#2899D8", fontSize: "18px" },
          }
        )}

        {uiFactory.createLabel("Tipo de Notificación a Enviar", {
          htmlFor: "notification",
          fontSize: "16px",
        })}

        {uiFactory.createSelect(
          [
            { label: "Seleccionar", value: "Seleccionar" },
            { label: "Email", value: "EMAIL" },
            { label: "SMS", value: "SMS" },
            { label: "PUSH", value: "PUSH" },
            { label: "WhatsApp", value: "WHATSAPP" },
          ],
          notificationType,
          (e) => setNotificationType(e.target.value)
        )}

        <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
          {uiFactory.createButton(
            <>
              <i className="fas fa-rotate-left text-white mr-2"></i> Realizar
              otro pago
            </>,
            handleNewPayment
          )}

          {uiFactory.createButton(
            <>
              <i className="fas fa-paper-plane text-white mr-2"></i> Enviar
              notificación
            </>,
            handleSendNotification,
            notificationType === "Seleccionar"
          )}
        </div>
      </>
    );
  }

  return uiFactory.createContainer(
    <>
      <h1 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px" }}>
        Calcular Pago
      </h1>

      <label htmlFor="payment" style={{ fontSize: "15px", color: "#B4B4B4" }}>
        Método de Pago
      </label>
      {uiFactory.createSelect(
        [
          { label: "Seleccione un Método", value: "Seleccione un Método" },
          { label: "Tarjeta Crédito", value: "CREDIT_CARD" },
          { label: "Tarjeta Débito", value: "DEBIT_CARD" },
          { label: "PayPal", value: "PAYPAL" },
        ],
        paymentType,
        (e) => setPaymentType(e.target.value)
      )}

      <label htmlFor="amount" style={{ fontSize: "15px", color: "#B4B4B4" }}>
        Monto
      </label>
      {uiFactory.createInput("Ingrese el monto", amount, (e) =>
        setAmount(e.target.value)
      )}

      {uiFactory.createButton(
        <>
          <i className="fas fa-calculator text-white mr-2"></i> Calcular Pago
        </>,
        handlePayment,
        !isFormValid
      )}
    </>
  );
};
