import { Component } from 'react';

const styles = {
  detallesCarro: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: '81px',
    boxShadow: '0px 1px 10px rgb(0, 0, 0, 0.3)',
    borderRadius: '8px',
    width: '300px',
    right: '50px'
  },
  imgCarro: {
    height: '35px'
  },
  ul: {
    margin: 0,
    padding: 0
  },
  producto: {
    listStyle: 'none',
    height: '35px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: '1px solid #aaa'
  },
  sinProductos: {
    textAlign: 'center'
  },
}

class DetallesCarro extends Component {
  render() {
    const { carro, cantidad } = this.props;
    console.log(carro)
    const precioTotal = carro.reduce((acc, element) => acc + element.priceTotal, 0);
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          <li style={styles.producto}>
            <h5>Precio total: ${precioTotal}</h5>
            <h5>Cantidad total: {cantidad}</h5>
          </li>
          {cantidad
            ? carro.map(x =>
                <li style={styles.producto} key={x.name}>
                  <img alt={x.name} src={x.img} style={styles.imgCarro}/>
                  {x.name}
                  <strong>{x.cantidad}</strong>
                </li>
              )
            : <li style={styles.producto}>
                <p style={styles.sinProductos}>
                  En este momento no tienes ningún producto en el carrito.
                </p>
              </li>
          }
        </ul>
      </div>
    )
  }
}

export default DetallesCarro;