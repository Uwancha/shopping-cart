import React, { useState } from "react";

function Checkout() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCVV] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setFirstName("");
        setLastName("");
        setEmail("");
        setAddress("");
        setCity("");
        setPostalCode("");
        setCardNumber("");
        setExpiryDate("");
        setCVV("");
    };

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>
                <label>
                    City:
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Postal Code:
                    <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Card Number:
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Expiry Date:
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    CVV:
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCVV(e.target.value)}
                        required
                      />
                </label>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;