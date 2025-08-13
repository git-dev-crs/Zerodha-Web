import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-3 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6 p-3">
            <h2 className="fs-3">Search for an answer or browse help topics to create a ticket</h2>
            <input placeholder="Eg. how do i activate F&O" />
            <br/>
            <a href=""> Track account opening<br/></a>
            <a href=""> Track segment activation</a>
            <br/>
            <a href=""> Intraday margins<br/></a>
            <a href=""> Kite user manual</a>
            <br/>
        </div>
        <div className="col-6 p-5">
            <h2>Featured</h2>
            <ol>
                <li><a href="">1.Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                <li> <a href="">2.Revision in expiry day of Index and Stock derivatives contracts</a></li>
            </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
