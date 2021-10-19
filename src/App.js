import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Login/Register/Register';
import Details from './components/Details/Details';
import Doctors from './components/Doctors/Doctors';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
            <BrowserRouter>
          <Header></Header>
                  <Switch>
                        <Route exact path="/">
                                  <Home></Home>
                      </Route>
                        <Route exact path="/home">
                                  <Home></Home>
                      </Route>
                        <Route exact path="/services">
                                  <Services></Services>
                      </Route>
                        <PrivateRoute exact path="/details/:id">
                                  <Details></Details>
                      </PrivateRoute>
                        <Route exact path="/doctors">
                                  <Doctors></Doctors>
                      </Route>
                        <Route exact path="/login">
                                  <Login></Login>
                      </Route>
                        <Route exact path="/register">
                                  <Register></Register>
                      </Route>
                        <Route  path="*">
                                  <Error></Error>
                      </Route>
              </Switch>
        <Footer></Footer>
      </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
