import React, { Component } from 'react';
import Question from './question'
import Data from './data.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
  }

  handleQuestionAnswered = (index, prediction) => {
    Data[index].prediction = prediction;
    const scoreReducer = (accumulator, currentValue) => 
    {
      return currentValue.prediction && currentValue.answer === currentValue.prediction ? 
      accumulator+1 : accumulator;

    }
    let score = Data.reduce(scoreReducer, 0);
    score = score / Data.length * 100;
    this.setState({
      score
    })
  }

  render() {
    const Questions = () => {
      return Data.map((e, index) =>
        <Question key={e.id} 
          index={index}
          id={e.id}
          question={e.question}
          answer={e.answer}
          prediction={e.prediction}
          onQuestionAnswered={this.handleQuestionAnswered} />
      );
    }
    
    return (
    <React.Fragment>
      <Questions />
      <div>Your Score: {this.state.score}%</div>
    </React.Fragment>
    );
  }
}

export default App;
