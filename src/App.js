import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routerData } from './Date/webdata';


function App() {
  return (
    <div className="App">
      <RouterProvider router={routerData} />
    </div>
  );
}

export default App;
