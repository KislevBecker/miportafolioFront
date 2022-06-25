import React from "react";
import './footer.css';

const date = new Date();
      const yyyy = date.getFullYear();

function Footer() {
    return (
        <section id="footer" className="bg-footer-purple pt-5 pb-2">
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                      {/* <div className="col-xs-12 col-sm-3 col-md-3">
                        <h5 className="text-black">Development</h5>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <h5>UI/UX Design</h5>
                    </div>
                    <div className="col-xs-12 col-sm- col-md-3">
                  <h6 className="text-center text-farmex-yellow mr-1">Contactame</h6>
                        <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item"><p href="https://www.fiverr.com/share/qb8D02" target="_blank"><i
                                        className="fab fa-facebook-square"></i></p></li>
                            <li className="list-inline-item"><p href="https://www.fiverr.com/share/qb8D02" target="_blank"><i
                                        className="fab fa-instagram-square"></i></p></li>
                            <li className="list-inline-item"><p href="https://www.fiverr.com/share/qb8D02" target="_blank"><i
                                        className="fab fa-youtube-square"></i></p></li>
                        </ul>
                    </div> */}
                    <div className="col-xs-12 col-sm-12 col-md-12">
                    <p> © {yyyy} {' '} <b>Kislev Becker</b></p>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mt-sm-2 text-center text-black">
                        <p> Copyright © {yyyy} {' '} <b>COINSA. Todos los Derechos Reservados.</b></p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
export default Footer