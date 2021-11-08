import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';


import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DetailedService from './Pages/Home/DetailedService/DetailedService';
import MyOrders from './Pages/UserSection/MyOrders/MyOrders';
import ManageAllOrders from './Pages/UserSection/ManageAllOrders/ManageAllOrders';
import AddNewService from './Pages/UserSection/AddNewService/AddNewService';
import Booking from './Pages/Booking/Booking';





function App() {
  return (
    <div className="App">

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
            <PrivateRoute path="/detailedservice/:serviceId">
              <DetailedService></DetailedService>
            </PrivateRoute>
            <PrivateRoute path="/booking/:bookingId">
              <Booking></Booking>
            </PrivateRoute>



            <Route exact path="/contact">
              <Contact></Contact>
            </Route>


            <PrivateRoute path="/MyOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/ManageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/AddNewService">
              <AddNewService></AddNewService>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
