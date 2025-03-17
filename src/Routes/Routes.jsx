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
import TutorDetails from '../Pages/TutorDetails/TutorDetails';
import MyBookedTutor from '../Pages/MyBookedTutor/MyBookedTutor';
import MyTutorials from '../Pages/MyTutorials/MyTutorials';
import UpdateTutorials from '../Pages/UpdateTutorials/UpdateTutorials';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: 'find-tutors',
        element: <FinadTutors></FinadTutors>,
      },
      {
        path: 'find-tutors/:category',
        element: <PrivateRoute><FindTutorByCategory></FindTutorByCategory></PrivateRoute> ,
        loader: ({ params }) => fetch(`http://localhost:7000/tutorials/${params.category}`)
      },

      {
        path: 'tutor/:id',
        element: <PrivateRoute> <TutorDetails></TutorDetails> </PrivateRoute> ,
        loader: ({ params }) => fetch(`http://localhost:7000/tutorials/${params.id}`)
      },
      {
        path: 'updateCard/:id',
        element: <PrivateRoute> <UpdateTutorials></UpdateTutorials> </PrivateRoute> ,
        loader: ({ params }) => fetch(`http://localhost:7000/tutorials/update${params.id}`)
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
        element: <PrivateRoute>  <AddTutorials></AddTutorials></PrivateRoute> ,
      },

      {
        path: 'MyBookedTutors',
        element: <PrivateRoute><MyBookedTutor></MyBookedTutor> </PrivateRoute> ,
      },

      {
        path: 'MyTutorials',
        element: <PrivateRoute> <MyTutorials></MyTutorials> </PrivateRoute> 
      },


     


    ],
  },




  {
    path: "*",
    element: <Error></Error>,
  },


]);
