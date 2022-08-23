import React from 'react';
import MyInputs from './MyInputs';

class Form extends React.Component {
  render() {
    return (
      <>
        <MyInputs testId="name-input" type="text" />
        <MyInputs testId="description-input" type="textarea" />
        <MyInputs testId="attr1-input" type="number" />
        <MyInputs testId="attr2-input" type="number" />
        <MyInputs testId="attr3-input" type="number" />
        <MyInputs testId="image-input" type="text" />
        <label htmlFor="rare-input">
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <MyInputs testId="trunfo-input" type="checkbox" />
        <MyInputs testId="save-button" type="button" />
      </>
    );
  }
}

export default Form;
