// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickGood = () => this.setState(({ good }) => ({ good: good + 1 }));

  onClickNeutral = () =>
    this.setState(({ neutral }) => ({ neutral: neutral + 1 }));
  
  onClickBad = () => this.setState(({ bad }) => ({ bad: bad + 1 }));

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, val) => acc + val);
  
  countPositiveFeedbackPercentage = (good, total) =>
    Math.floor((good / total) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage =
      this.countPositiveFeedbackPercentage(good, total) || '0';
    return (
      <section>
        <h1>Please leave feedback</h1>

        <div>
          <button onClick={this.onClickGood}>Good</button>
          <button onClick={this.onClickNeutral}>Neutral</button>
          <button onClick={this.onClickBad}>Bad</button>
        </div>

        <div>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
      </section>
    );
  }
}

export default App;
