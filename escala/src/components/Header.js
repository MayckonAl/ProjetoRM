import React from "react";

function Header() {
  return (
    <div>
      <div className=" conteiner d-flex justify-content-around header_img">
        <div className="d-flex  flex-column align-items-center">
          <h1 className="text-danger fw-bolder ">Rede Master</h1>
          <p className="text-primary fs-5 fw-bolder">Supermercados</p>
        </div>
      </div>

     {/*  <nav className="">
        <ul className="nav justify-content-center">
          <li className="nav-item  fw-bolder">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>

          <li className="nav-item  fw-bolder">
            <a className="nav-link active" href="#">
              Contato
            </a>
          </li>
        </ul>
        <hr className="border m-0 border-primary border-1 opacity-75"></hr>
      </nav> */}
    </div>
  );
}

export default Header;
