import React from 'react';
import propTypes from 'prop-types';

class MyInputs extends React.Component {
  render() {
    const { testId, type, description, value, onChange } = this.props;
    return (
      <label htmlFor={ testId }>
        { description }
        <input
          data-testId={ testId }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MyInputs.propTypes = {
  testId: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  description: propTypes.string,
};

MyInputs.defaultProps = {
  description: 'Input',
};

export default MyInputs;
