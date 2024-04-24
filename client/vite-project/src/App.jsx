import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import SignIn from './pages/SignIn';
import { Provider } from 'react-redux';
import store from './redux/store';
import ResponsiveDrawer from './components/SideBar/Sidebar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn/>,
    },
    {
      path: "/home",
      element: <ResponsiveDrawer/>,
    },
  ]);

  return (
    <>
      <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>,

      
    </>
  )
}

export default App
