import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import savedCards from './data/savedCards';

class App extends React.Component {
  state = {
    nameInput: '',
    descriptionInput: '',
    attr1Input: 0,
    attr2Input: 0,
    attr3Input: 0,
    imageInput: '',
    rareInput: 'normal',
    checked: false,
    saved: [],
    hasTrunfo: false,
    filter: '',
    rare: 'todas',
  };

  handleChange = (event) => {
    const { target } = event;
    const { value, name, checked } = target;
    // const { saved } = this.state;
    // const trunfo = saved.some((card) => card.checked);
    const newName = name.replace('-i', 'I');
    if (name !== 'trunfo-input') {
      this.setState({ [newName]: value });
      this.handleDisable();
    }
    this.setState({ checked });
  };

  handleDisable = () => {
    const max = 6;
    const inputs = Object.values(this.state).filter((_element, index) => index < max);
    const { attr1Input, attr2Input, attr3Input } = this.state;
    const n1 = Number(attr1Input);
    const n2 = Number(attr2Input);
    const n3 = Number(attr3Input);
    const minAttr = 0;
    const maxAttr = 90;
    const sum = n1 + n2 + n3;
    const maxSum = 210;
    if (inputs.includes('')) {
      return true;
    }
    if (n1 > maxAttr || n2 > maxAttr || n3 > maxAttr) {
      return true;
    }
    if (sum > maxSum) {
      return true;
    }
    return (n1 < minAttr || n2 < minAttr || n3 < minAttr);
  };

  // Solução parcialmente encontrada no seguinte link: https://bobbyhadz.com/blog/react-push-to-state-array
  handlerClick = () => {
    savedCards.push(this.state);
    this.setState((initial) => ({ saved: [...initial.saved, initial] }));
    this.setState((initial) => ({
      nameInput: '',
      descriptionInput: '',
      attr1Input: 0,
      attr2Input: 0,
      attr3Input: 0,
      imageInput: '',
      rareInput: 'normal',
      checked: false,
      hasTrunfo: false,
      // saved: savedCards,
      filter: initial.filter,
      rare: 'todas',
    }));
  };

  // Solução parcialmente encontrada no seguinte link:
  // https://bobbyhadz.com/blog/react-remove-element-from-state-array#:~:text=To%20remove%20an%20element%20from,that%20the%20filter%20method%20returned.
  handlerDelete = (event) => {
    const { target } = event;
    const { name } = target;
    this.setState((init) => ({ saved: init.saved.filter((s) => s.nameInput !== name) }));
    savedCards.forEach((card, index) => {
      if (name === card.nameInput) {
        savedCards.splice(index, 1);
      }
    });
  };

  verification = () => {
    const { saved } = this.state;
    return saved.some((card) => card.checked);
  };

  handlerFilter = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({ filter: value });
  };

  handlerRare = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({ rare: value });
  };

  render() {
    const { nameInput, imageInput, descriptionInput,
      attr1Input, attr2Input, attr3Input,
      rareInput, checked, saved, filter, rare } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ this.handleDisable() }
          onSaveButtonClick={ this.handlerClick }
          cardName={ nameInput }
          cardImage={ imageInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardRare={ rareInput }
          cardTrunfo={ checked }
          hasTrunfo={ this.verification() }
        />
        <Card
          cardName={ nameInput }
          cardImage={ imageInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardRare={ rareInput }
          cardTrunfo={ checked }
        />
        <label htmlFor="filter">
          <input
            name="filter"
            type="text"
            data-testid="name-filter"
            onChange={ this.handlerFilter }
          />
        </label>
        <select data-testid="rare-filter" onChange={ this.handlerRare }>
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        {saved.filter((card) => card.nameInput.includes(filter))
          .filter((card) => {
            if (rare === 'todas') {
              return card;
            }
            return card.rareInput === rare;
          })
          .map((card) => (<Card
            key={ card.nameInput }
            cardName={ card.nameInput }
            cardImage={ card.imageInput }
            cardDescription={ card.descriptionInput }
            cardAttr1={ card.attr1Input }
            cardAttr2={ card.attr2Input }
            cardAttr3={ card.attr3Input }
            cardRare={ card.rareInput }
            cardTrunfo={ card.checked }
            btn={
              <button
                type="button"
                onClick={ this.handlerDelete }
                data-testid="delete-button"
                name={ card.nameInput }
              >
                Excluir
              </button>
            }
          />))}
      </div>
    );
  }
}

export default App;
