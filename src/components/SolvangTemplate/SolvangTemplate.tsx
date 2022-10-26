import React from "react";
import "./Solvang.css";

const SolvangTemplate = () => {
  return (
    <div>
      <div className="dh-frontmodul-solvang-v1-profil-ZGAoo">
        <figure>
          <img
            src="https://static.nrk.no/dh/module/frontmodul-solvang/static/media/fredrik_noytralVjj4F.png"
            alt="Fredrik Solvang som ser nøytral ut"
          />
          <figcaption>
            <span>Fredrik Solvang</span>
            <span>Programleder i Debatten</span>
          </figcaption>
        </figure>
      </div>
      <div className="dh-frontmodul-solvang-v1-content-Y_Zvw">
        <p className="dh-frontmodul-solvang-v1-intro-jS_77">
          Hei, <span data-dh-frontmodul-solvang-replace="$navn">du</span>!
        </p>
        <p className="dh-frontmodul-solvang-v1-title-NCKQE">
          Er regjeringens strømstøtteordning god nok?
        </p>
        <p className="dh-frontmodul-solvang-v1-cta-TJxaH">Diskuter her</p>
      </div>
    </div>
  );
};

export default SolvangTemplate;
