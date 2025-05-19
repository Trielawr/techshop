import './App.css';
import { RouterProvider } from 'react-router-dom';

import { routerData } from './Date/webdata';
// import Button from './Components/Button/Button';
// import Icon from './Components/Icon/Icon';
// import sprite from '../src/assets/svg/sprite.svg';

function App() {
  return (
    <div className="App">
      <RouterProvider route={ routerData }></RouterProvider>
      {/* <br></br>
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
        <Icon iconname="Cart=Off" width={'24'} height={'24'} />
        <svg iconname='Camera'>
          <use href={`${sprite}` } />
        </svg> */}
    </div>
  );
}

export default App;
