import React from "react";

const Footer = () =>{
    return(
        <div className="container"> 
        <div className="row py-5">
            <div className="col-md-6 d-flex justify-content-center">
                <a href="#" className="mx-5"><img src="images/facebook.webp" alt="facebook" width="30px" /></a>
                <a href="#" className="mx-5"><img src="images/instagram.webp" alt="instagram" width="30px"/></a>
                <a href="#" className="mx-5"><img src="images/whatsapp.webp" alt="whatsapp" width="40px"/></a>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
                <img src="images/logobulkgym.png" alt="logobulkgym" width="100px" />

            </div>
        </div>
        </div>

    ) 
 
}

export default Footer;