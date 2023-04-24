import { Component } from 'react'

const styles = {
  button: {
    backgroundColor: 'rgb(0, 0, 0, 0.6)',
    color: '#fff',
    fontWeight: '900',
    boxShadow: '0px 0px 20px rgb(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '15px 20px',
    cursor: 'pointer',
    border: 'none'
  }
}

class Button extends Component {
  render() {
    return(
      <button style={styles.button} {...this.props} />
    )
  }
}

export default Button;