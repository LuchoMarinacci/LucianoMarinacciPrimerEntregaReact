import React from "react";

const Banner = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center shadow p-3 mb-5 bg-body rounded">
                  <p><img src="images/propaganda1.jpg" alt="propaganda1" className="img-fluid" /></p>
                  <h4>Recomendada para deportistas olimpicos, elite y de alto rendimiento</h4>
                  <p><a href="" className="btn btn-warning">Ver Mas</a></p>
                </div>
                <div className="col-md-6 text-center shadow p-3 mb-5 bg-body rounded">
                  <p><img src="images/propaganda2.jpg" alt="propaganda2" className="img-fluid" /></p>
                  <h4>Toda tu suplementacion en un solo lugar</h4>
                  <p><a href="" className="btn btn-warning">Ver Mas</a></p>
                </div>

            </div>

        </div>
    )
}

export default Banner;