import { Component } from 'react';

const styles = {
  bubbleAlert: {
    fontSize: '0.8rem',
    maxWidth: '20px',
    height: '20px',
  }
}

class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) { return ' ' }
    return n > 9 ? '9+' : n
  }

  render() {
    const { value } = this.props;
    return (
      <span style={styles.bubbleAlert}>
        {this.getNumber(value)}
      </span>
    )
  }
}

export default BubbleAlert;