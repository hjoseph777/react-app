import React from 'react';
import Counter from './components/Counter'; // Import Counter component
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lab 3: State Management</h1>
        <Counter /> {/* Step 5: Render the Counter component */}
      </header>
    </div>
  );
}

export default App;

 