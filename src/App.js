import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    nameInput: '',
    descriptionInput: '',
    attr1Input: '',
    attr2Input: '',
    attr3Input: '',
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
    }
    this.setState({ checked });
  };

  render() {
    const { nameInput, imageInput, descriptionInput,
      attr1Input, attr2Input, attr3Input, rareInput, checked } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.handleChange } />
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
