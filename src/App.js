import './App.css';
import Button from './Components/Button/Button';
import Icon from './Components/Icon/Icon';

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
          className='btn-transparent' />
        <br></br>
        <Icon iconname="Camera" width={'56'} height={'56'} />
        <Icon iconname="Cart=Off" width={'24'} height={'24'}/>
      </header>
    </div>
  );
}

export default App;
