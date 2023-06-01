import React from "react";
const titulo = { color: "pink"};

const Perfiles = (props) => {
  return (
    <div className="container.sm">
      <div className="row mt-5">
        <div className="col-3">
          <div class="d-flex justify-content-end">
            <img class="rounded"src={props.foto} alt="" />
          </div>
        </div>
        <div className="col-9">
          <h1 style={titulo} class="fw-semibold">{props.nombre} </h1>
          <h3>{props.ocupacion}</h3>
          <p>{props.talentos}</p>
        </div>
      </div>
    </div>
  );
};

export default Perfiles;
