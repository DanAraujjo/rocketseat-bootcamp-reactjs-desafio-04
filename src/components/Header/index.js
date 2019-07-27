import React from "react";
import "./style.css";

function Header() {
  return (
    <header>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" />
        <div>
          <span>Meu perfil</span>

          <img
            className="avatar"
            src="https://avatars2.githubusercontent.com/u/25941698?s=460&v=4"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
