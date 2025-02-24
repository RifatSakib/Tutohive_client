import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Error from '../Pages/Shared/Error/Error';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import AddTutorials from '../Pages/Home/AddTutorials/AddTutorials';
import FinadTutors from '../Pages/FindTutors/FinadTutors';
import FindTutorByCategory from '../Pages/FindTutorByCategory/FindTutorByCategory';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      
      {
        path: 'find-tutors',
        element: <FinadTutors></FinadTutors> ,
      },
    {
      path: 'find-tutors/:category',
      element: <FindTutorByCategory></FindTutorByCategory> ,
      loader: ({params}) => fetch(`http://localhost:7000/tutorials/${params.category}`)
    },

      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },

      {
        path: 'addTutorials',
        element: <AddTutorials></AddTutorials>
      },

      



    ],
  },







    // {
    //   path: 'updateItem/:id',
    //   element: <UpdateItems></UpdateItems>,
    //   loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
    // },

    
  

    






    

  


 


  {
    path: "*",
    element: <Error></Error>,
  },


]);
