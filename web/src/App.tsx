import React from 'react';
import './styles/global.css'

interface TitleProps {
  text: String;
}

function Title(props: TitleProps) {
  return (
  <h1>{props.text}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Title text="Oi"></Title>
    </div>
  );
}

export default App;
