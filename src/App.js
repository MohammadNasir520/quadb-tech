import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';

function App() {
  return (
    <div >
      <RouterProvider router={router}>

        <Home></Home>
      </RouterProvider>
    </div>
  );
}

export default App;
