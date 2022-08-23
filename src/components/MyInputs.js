import React from 'react';
import propTypes from 'prop-types';

class MyInputs extends React.Component {
  render() {
    const { testId, type, description } = this.props;
    return (
      <label htmlFor={ testId }>
        { description }
        <input data-testId={ testId } type={ type } />
      </label>
    );
  }
}

MyInputs.propTypes = {
  testId: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  description: propTypes.string,
};

MyInputs.defaultProps = {
  description: 'Input',
};

export default MyInputs;
