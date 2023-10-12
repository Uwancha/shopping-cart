import React, { useState } from "react";
import styles from "../styles/checkout.module.css"

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
        <div className={styles.formContainer}>
            <form onSubmit={handleFormSubmit} className={styles.form}>
                <div className={styles.basicInfo}>
                    <div className={styles.childs}>
                        <label className={styles.label}>
                            <h4>First Name:</h4>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                className={styles.input }
                            />
                        </label>
                        <label className={styles.label}>
                            <h4>Last Name:</h4>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                className={styles.input }
                            />
                        </label>
                    </div>
                    <div className={styles.childs}>
                        <label className={styles.label}>
                            <h4>Email:</h4>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={styles.input }
                            />
                        </label>
                        <label className={styles.label}>
                            <h4>Address:</h4>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                className={styles.input }
                            />
                        </label>
                    </div>
                    <div className={styles.childs}>
                        <label className={styles.label}>
                            <h4>City:</h4>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                                className={styles.input }
                            />
                        </label>
                        <label className={styles.label}>
                            <h4>Postal Code:</h4>
                            <input
                                type="text"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                                className={styles.input }
                            />
                        </label>
                    </div>
                </div>
                <div className={styles.cardInfo}>
                    <div className={styles.childs}>
                        <label className={styles.label}>
                            <h4>Card Number:</h4>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                required
                                className={styles.input}
                            />
                        </label>
                        <label className={styles.label}>
                            <h4>Expiry Date:</h4>
                            <input
                                type="text"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                required
                                className={styles.input }
                            />
                        </label>
                    </div>
                    <label className={styles.cvv}>
                        <h4>CVV:</h4>
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCVV(e.target.value)}
                            required
                            className={styles.cvvinput }
                          />
                    </label>
                </div>
                <button type="submit" className={styles.button}>Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;