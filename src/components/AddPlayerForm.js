import React, { Component } from 'react';

class AddPlayerForm extends Component {

  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const { addPlayer } = this.props;

    e.preventDefault();
    this.setState({ value: '' });
    addPlayer(this.state.value);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          placeholder="Enter a player's name"
          onChange={this.handleChange}
        />

        <input
          type="submit"
          value="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;
