import { Component } from 'react';
import Button from './Button.js'
const styles = {
  producto: {
    border: 'solid 1px #eee',
    boxShadow: '0px 0px 20px rgb(0, 0, 0, 0.1)',
    width: '180px',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center'
  },
  infoProducto: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  img: {
    width: '100%',
  }
}

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;
    return (
      <div style={styles.producto}>
        <img style={styles.img} src={producto.img} alt={producto.name} />
        <div style={styles.infoProducto}>
          <h3>{producto.name}</h3>
          <p>Price: <strong>${producto.price}</strong></p>
        </div>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al Carro
        </Button>
      </div>
    )
  }
}

export default Producto;