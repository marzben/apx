import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import './component/Header.css';
import './component/authPage.css';
import './component/footer.css';
import './component/other.css';
import About from './component/pages/About';
import ErrorPage from './component/pages/Error';
import Home from './component/pages/Home';
import Rates from './component/pages/Rates';
import Services from './component/pages/Services';
import Login from './component/pages/auth/Login';
import Register from './component/pages/auth/Register';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        path: '/',
        element: <Home/>
      },
      {
        path: 'services',
        element: <Services/>
      },
      {
        path: 'rates',
        element: <Rates/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}>
  <App />
</RouterProvider>
}

export default App;
