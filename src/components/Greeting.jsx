import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hola, usuario!</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting;