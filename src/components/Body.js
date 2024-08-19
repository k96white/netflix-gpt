import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Header from './Header';

const Body = () => {
const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <Login />
    },
    {
        path : '/browse',
        element : <Browse />
    }
]);
  return (
    <div>
        <Header />
       <RouterProvider router={appRouter}>

        <Login />    
        <Browse />

       </RouterProvider>
    </div>
  );
}

export default Body