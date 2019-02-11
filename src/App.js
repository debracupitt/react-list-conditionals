import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    textLength: 0,
    textContent: ""
  };

  lengthChangeHandler = event => {
    const text = event.target.value;
    this.setState({ textLength: text.length, textContent: text });
  };

  deleteCharHandler = index => {
    const charList = this.state.textContent.split("");
    charList.splice(index, 1);
    const updatedTextContent = charList.join("");
    this.setState({ textContent: updatedTextContent });
  };

  render() {
    const charList = this.state.textContent.split("").map((ch, index) => {
      return (
        <Char
          char={ch}
          key={index}
          click={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <h1>Assignment 2: List Conditionals</h1>
        <input
          type="text"
          onChange={this.lengthChangeHandler}
          value={this.state.textContent}
        />
        <p className="length">
          Length of text entered: {this.state.textLength}
        </p>
        <Validation textLength={this.state.textLength} />
        {charList}
      </div>
    );
  }
}

export default App;
// <Char text={this.state.textContent} />
