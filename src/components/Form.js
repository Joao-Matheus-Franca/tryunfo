import React from 'react';
import propTypes from 'prop-types';
import MyInputs from './MyInputs';
import savedCards from '../data/savedCards';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    const value = savedCards.some((card) => card.checked);
    const phrase = (
      <p data-testId="trunfo-input">
        Você já tem um Super Trunfo em seu baralho
      </p>);
    const checkbox = (
      <label htmlFor="trunfo-input">
        <input
          data-testId="trunfo-input"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>);
    // const { hasTrunfo } = this.props;
    return (
      <>
        <MyInputs
          testId="name-input"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
        />
        <MyInputs
          testId="description-input"
          type="textarea"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <MyInputs
          testId="attr1-input"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <MyInputs
          testId="attr2-input"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <MyInputs
          testId="attr3-input"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <MyInputs
          testId="image-input"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <label htmlFor="rare-input">
          <select
            name="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        {value === true ? phrase : checkbox}
        {/* <label htmlFor="trunfo-input">
          <input
            data-testId="trunfo-input"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label> */}
        <label htmlFor="save-button">
          <input
            data-testId="save-button"
            type="button"
            value="Salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </label>
      </>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  // hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
