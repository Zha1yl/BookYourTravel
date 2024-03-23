import React, { useState } from "react";

const Payment = ({ onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [creditCard, setCreditCard] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [paypalMethod, setPaypalMethod] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [bankTransfer, setBankTransfer] = useState({
    bank: "",
    accountNumber: "",
    paymentCode: "",
  });

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (paymentMethod === "Credit Card") {
      setCreditCard({
        ...creditCard,
        [name]: value,
      });
    } else if (paymentMethod === "PayPal") {
      setPaypalMethod(value);
    } else if (paymentMethod === "Bank transfer") {
      setBankTransfer(value);
    }
  };

  const passwordVisibility = () => {
    setPaypalMethod({
      ...paypalMethod,
      showPassword: !paypalMethod.showPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You choose pay via:", paymentMethod);
    if (paymentMethod === "Credit Card") {
      console.log("Credit card data:", creditCard);
    } else if (paymentMethod === "PayPal") {
      console.log("PayPal email:", paypalMethod);
    } else if (paymentMethod === "Bank transfer") {
      console.log("Bank transfer:", bankTransfer);
    }
    onClose();
  };
  return (
    <div className="modal-overlay">
      <div className="modalPayment">
        <h2>Choose your method of payment</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="radio"
              value="Credit Card"
              checked={paymentMethod === "Credit Card"}
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="PayPal"
              checked={paymentMethod === "PayPal"}
              onChange={handlePaymentMethodChange}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              value="Bank transfer"
              checked={paymentMethod === "Bank transfer"}
              onChange={handlePaymentMethodChange}
            />
            Bank transfer
          </label>
          {paymentMethod === "Credit Card" && (
            <div>
              <input
                type="text"
                name="cardNumber"
                placeholder="number of card"
                value={creditCard.cardNumber}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="expirationDate"
                placeholder="expiration date"
                value={creditCard.expirationDate}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="cvv"
                placeholder="CVV"
                value={creditCard.cvv}
                onChange={handleInputChange}
              />
            </div>
          )}
          {paymentMethod === "PayPal" && (
            <div>
              <input
                type="email"
                placeholder="email PayPal"
                value={paypalMethod.email}
                onChange={handleInputChange}
              />
              <input
                type={paypalMethod.showPassword ? "text" : "password"}
                placeholder="password"
                value={paypalMethod.password}
                onChange={handleInputChange}
              />
              <button
                style={{ marginLeft: "10px" }}
                className="btnModalPayment"
                type="button"
                onClick={passwordVisibility}
              >
                {paypalMethod.showPassword ? "Hide" : "Show"} password
              </button>
            </div>
          )}
          {paymentMethod === "Bank transfer" && (
            <div>
              <input
                type="text"
                placeholder="name of Bank"
                value={bankTransfer.bank}
                onChange={handleInputChange}
              />
              <input
                type="number"
                placeholder="account number"
                value={bankTransfer.accountNumber}
                onChange={handleInputChange}
              />
              <input
                type="number"
                placeholder="payment code"
                value={bankTransfer.paymentCode}
                onChange={handleInputChange}
              />
            </div>
          )}
          <button type="submit">Оплатить</button>
        </form>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Payment;
