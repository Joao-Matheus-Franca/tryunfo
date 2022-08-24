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
  };

  handleChange = (event) => {
    const { target } = event;
    const { value, name, checked } = target;
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

  handlerClick = () => {
    savedCards.push(this.state);
    this.setState({
      nameInput: '',
      descriptionInput: '',
      attr1Input: 0,
      attr2Input: 0,
      attr3Input: 0,
      imageInput: '',
      rareInput: 'normal',
      checked: false,
    });
  };

  render() {
    const { nameInput, imageInput, descriptionInput,
      attr1Input, attr2Input, attr3Input,
      rareInput, checked } = this.state;
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
      </div>
    );
  }
}

export default App;
