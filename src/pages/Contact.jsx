import React from "react";
import styles from "../styles/contact.module.css";

import igIcon from "../assets/e719d8b29f452a16302d.png";
import fbicon from "../assets/facebook_4494475.png";
import linkedinIcon from "../assets/linkedin_145807.png";
import twitterIcon from "../assets/twitter_3670151.png";

function Contact() {

    const handleFormSubmit = (e) => {
        e.preventDefault();

    };

    
    return (
        <div className={styles.contact}>
            <div className={styles.contents}>
                <h4>Contact Us</h4>
                <p>We're here to help with any questions you have about our products, services or company. Please get in touch!</p>
            </div>

            <div className={styles.subSection}>
                <div>
                    <h4>Store Address</h4>
                    <p>123 Main St</p>
                    <p>Anytown, CA 90210</p>
                </div>
                <div>
                    <h4>Store Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>

            <div className={styles.subSection}>
                <div>
                    <h4>Phone</h4>
                    <p>Toll Free: 1-800-123-4567</p>
                    <p>Local: 555-123-4567</p>
                </div>
                <div>
                    <h4>Email</h4>
                    <p>support@onlinestore.com</p>
                    <p>helpcenter@onlinestore.com</p>
                </div>
            </div>

            <div className={styles.contents}>
                <h4>Social Media</h4>
                <div className={styles.icons}>
                    <img src={igIcon} alt="instagram logo" className={styles.img} />
                    <img src={fbicon} alt="facebook logo" className={styles.img} />
                    <img src={linkedinIcon} alt="linkedin logo" className={styles.img} />
                    <img src={twitterIcon} alt="twitter logo" className={styles.img} />
                </div>
            </div>


            <div className={styles.contents}>
                <h4>Customer Service</h4>
                <p>For account help, order inquiries or returns, please contact our customer service team.</p>
            </div>

            <div>
                <h4>Send us a Message</h4>
                <form onSubmit={handleFormSubmit} className={styles.form}>
                    <label for="name">
                        <h4>Name:</h4>
                    <input type="text" id="name" />
                    </label>
                    <label for="email">
                        <h4>Email:</h4>
                    <input type="email" id="email" />
                    </label>
                    <label for="message">
                        <h4>Message:</h4>
                    <textarea id="message"></textarea>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>


            <p>We aim to respond to all inquiries within 24 business hours. Thank you!</p>

        </div>
    )
}

export default Contact;