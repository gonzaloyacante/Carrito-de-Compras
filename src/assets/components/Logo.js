import { Component } from 'react';

const styles = {
  logo: {
    fontWeight: '700',
    fontSize: '2em'
  }
}

class Logo extends Component {
  render() {
    return (
      <h1 style={styles.logo}>
        Shop
      </h1>
    )
  }
}

export default Logo;