import { Component } from "react";
import Productos from "./assets/components/Productos.js";
import Layout from "./assets/components/Layout.js";
import Title from "./assets/components/Title.js";
import Navbar from "./assets/components/Navbar.js";
class App extends Component {
  state = {
    productos: [
      { name: "Tomate", priceTotal: 150, price: 150, img: "./img/tomate.jpg" },
      { name: "Arbejas", priceTotal: 50, price: 50, img: "./img/arbejas.jpg" },
      { name: "Lechuga", priceTotal: 200, price: 200, img: "./img/lechuga.jpg" },
    ],
    carro: [],
    mostrarCarro: false,
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
              priceTotal: x.price * (x.cantidad+1),
            }
          : {...x, priceTotal: x.price * x.cantidad,}
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  toggleCarro = () => {
    this.setState({ mostrarCarro: !this.state.mostrarCarro });
  };

  render() {
    const { mostrarCarro } = this.state;
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          mostrarCarro={mostrarCarro}
          toggleCarro={this.toggleCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
