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

  render() {
    return (
      <section>
        <h1>Please leave feedback</h1>

        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>

        <div>
          <h2>Statistics</h2>
          <p>Good: </p>
          <p>Neutral: </p>
          <p>Bad: </p>
        </div>
      </section>
    );
  }
}

export default App;
