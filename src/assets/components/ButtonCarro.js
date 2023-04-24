import { Component } from "react";
import BubbleAlert from "./BubbleAlert.js";
import DetallesCarro from "./DetallesCarro.js";

const styles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  carroButton: {
    backgroundColor: "#359A2C",
    color: "#fff",
    borderRadius: "10px",
    border: "none",
    height: "40px",
    width: "60px",
    cursor: "pointer",
  },
  bubble: {
    backgroundColor: "#E9725A",
    borderRadius: "50%",
    cursor: "pointer",
    height: "20px",
    maxWidth: "20px",
    border: "none",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "0px",
    position: "relative",
    left: -10,
    top: 50,
  },
};

class ButtonCarro extends Component {
  render() {
    const { carro, mostrarCarro, toggleCarro } = this.props;
    const cantidad = carro.reduce((acc, element) => acc + element.cantidad, 0);
    return (
      <div style={styles.container}>
        {cantidad !== 0 ? (
          <span style={styles.bubble}>
            <BubbleAlert value={cantidad} />
          </span>
        ) : null}

        <button
          onClick={toggleCarro}
          style={styles.carroButton}
        >
          Carro
        </button>

        {mostrarCarro
          ? <DetallesCarro
              cantidad={cantidad}
              carro={carro}
            />
          : null
        }

      </div>
    );
  }
}

export default ButtonCarro;
