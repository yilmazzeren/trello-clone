import React from "react";
import Button from "@material-ui/core/Button";
export default function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        textAlign: "end",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img
          style={{ width: "150px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/1280px-Trello-logo-blue.svg.png"
          alt="logo"
        />
      </div>

      <div>
        <Button variant="contained" color="primary">
          Giriş
        </Button>
        <Button style={{ margin: "5px" }} variant="contained" color="secondary">
          Kayıt Ol
        </Button>
      </div>
    </div>
  );
}
