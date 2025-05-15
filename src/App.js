import './App.css';
import Button from './Components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <br></br>
        <Button
          text='Button orange'
          className='btn-orange' />
        <br></br>
        <Button
          text='Button orange-small'
          className='btn-orange small' />
        <br></br>
        <Button
          text='Button transparent'
        className='btn-transparent'/>
      </header>
    </div>
  );
}

export default App;
