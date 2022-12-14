import React from "react";
import CartWidget from "./CartWidget";
import Navbar from "./Navbar";

const Header = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Navbar />
                </div> 
                <div className="col-md-6 align-items-center justify-content-end" >
                    <CartWidget  /> 

                </div>

            </div>

        </div>
    )
}

export default Header;
