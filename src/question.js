import React, { Component } from 'react';

class Question extends Component {
  getYesId = () => this.props.id + 'yes';
  getNoId = () => this.props.id + 'no';
  onPredictionChange = (changeEvent) => {
    let prediction = changeEvent.target.value;
    this.props.onQuestionAnswered(this.props.index, prediction);
  }

  render() {
    return (
    <fieldset>
        <legend>{this.props.question}?</legend>

        <div>
            <input type="radio"
                  name={this.getYesId()} value="yes"
                  checked={this.props.prediction === "yes"} 
                  onChange={this.onPredictionChange} />
            <label htmlFor={this.getYesId()} >Yes</label>
        </div>

        <div>
            <input type="radio"
                  name={this.getNoId()} value="no" 
                  checked={this.props.prediction === "no"} 
                  onChange={this.onPredictionChange} />
            <label htmlFor={this.getNoId()} >No</label>
        </div>
        { this.props.prediction ? 
            <div>Acutal answer is: {this.props.answer}</div> : null }
    </fieldset>
    );
  }
}

export default Question;
