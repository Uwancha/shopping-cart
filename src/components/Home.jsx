import React from "react";
import cartIcon from "../assets/carts_891462.png"

function Home() {
    return (
        <div>
            <div>
                <div>
                    <h4>Welcome! Happy Shopping</h4>
                    <p>You know you can shop anything here!</p>
                    <p>Well, actually no. This is a demo!</p>
                </div>
                <div>
                    <h5>50$ credit when you first register</h5>
                    <button>Sign Up</button>
                </div>
            </div>
            <div>
                <img src={cartIcon} alt="shopping cart. Icon by Pixel Perfect." />
            </div>
        </div>
    )
}

export default Home;