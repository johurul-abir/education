
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import router from './router/router';

function App() {
  
  return (
    <>
          
      <RouterProvider router = {router} />
     <ToastContainer 
     position='top-center' />

    </>
  )
}

export default App
