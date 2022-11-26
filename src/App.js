import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App({ children }) {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}>
        {children} 
      </RouterProvider>
    </div>
  );
}

export default App;
