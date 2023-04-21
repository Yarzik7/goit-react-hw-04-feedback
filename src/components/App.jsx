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
  onClickNeutral = () => this.setState(({ neutral }) => ({ neutral: neutral + 1 }));
  onClickBad = () => this.setState(({ bad }) => ({ bad: bad + 1 }));

  render() {
    const { good, neutral, bad } = this.state;
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
        </div>
      </section>
    );
  }
}

export default App;
