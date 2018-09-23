import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prediction: 'yes',
      feedback: 'yes',
      score: '👍'
    };
  }

  handlePredictionChange = (changeEvent) => {
    let prediction = changeEvent.target.value;
    let score = '';

    if(prediction === this.state.feedback)  
      score = '👍';
    else
      score = '👎';

    this.setState({
      prediction: prediction,
      score: score
    });
  }
  
  handleFeedbackChange = (changeEvent) => {
    let feedback = changeEvent.target.value;
    let score = '';

    if(this.state.prediction === feedback)  
      score = '👍';
    else
      score = '👎';
    
    this.setState({
      feedback: feedback,
      score: score
    });
  }

  render() {
    return (
    <div>
      <fieldset>
          <legend>Will the stock market close positive tomorrow?</legend>

          <div>
              <input type="radio" id="pyes" 
                    name="prediction" value="yes" 
                    checked={this.state.prediction === 'yes'} 
                    onChange={this.handlePredictionChange} />
              <label htmlFor="pyes">Yes</label>
          </div>

          <div>
              <input type="radio" id="pno" 
                    name="prediction" value="no" 
                    checked={this.state.prediction === 'no'} 
                    onChange={this.handlePredictionChange} />
              <label htmlFor="pno">No</label>
          </div>

      </fieldset>
    
      <fieldset>
          <legend>Did the stock market actually close positive?</legend>

          <div>
              <input type="radio" id="fyes" 
                    name="feedback" value="yes" 
                    checked={this.state.feedback === 'yes'} 
                    onChange={this.handleFeedbackChange} />
              <label htmlFor="fyes">Yes</label>
          </div>

          <div>
              <input type="radio" id="fno" 
                    name="feedback" value="no" 
                    checked={this.state.feedback === 'no'} 
                    onChange={this.handleFeedbackChange} />
              <label htmlFor="fno">No</label>
          </div>

      </fieldset>

      <div>Your Score: {this.state.score}</div>


    </div>
    );
  }
}

export default App;
