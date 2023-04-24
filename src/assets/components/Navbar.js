import { Component } from "react";
import Logo from "./Logo.js";
import ButtonCarro from "./ButtonCarro.js";
// import Carro from './Carro.js';

const styles = {
  navbar: {
    backgroundColor: "#fff",
    color: "#0A283E",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: "80px",
    borderBottom: "1px solid rgb(0, 0, 0, 0.1)",
    boxShadow: "0px 2px 3px rgb(0, 0, 0, 0.1)",
    padding: "0 50px",
  },
};

class Navbar extends Component {
  render() {
    const { carro, mostrarCarro, toggleCarro } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <ButtonCarro
          carro={carro}
          mostrarCarro={mostrarCarro}
          toggleCarro={toggleCarro}
        />
      </nav>
    );
  }
}

export default Navbar;
