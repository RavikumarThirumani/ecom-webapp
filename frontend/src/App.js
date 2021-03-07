import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap'
import HomeScreen from './UIScreens/HomeScreen';
import ProductScreen from './UIScreens/ProductScreen';
import CartScreen from './UIScreens/CartScreen';

import { BrowserRouter, Route } from 'react-router-dom'
import LoginScreen from './UIScreens/LoginScreen';
import RegisterScreen from './UIScreens/RegisterScreen';
import ShippingScreen from './UIScreens/ShippingScreen';
import UserListScreen from './UIScreens/UserListScreen';
import ProductListScreen from './UIScreens/ProductListScreen';
import ProductEditScreen from './UIScreens/ProductEditScreen';


const App = () => {
  return (
    <BrowserRouter>
    < Header />
            <main className = 'py-3'>
                <Container>
                    <Route path='/shipping' component={ShippingScreen}/>
                    <Route path='/login' component={LoginScreen}/>
                    <Route path='/register' component={RegisterScreen}/>
                    <Route path='/product/:id' component={ProductScreen}/>
                    <Route path='/cart/:id?' component={CartScreen}/> 
                    <Route path='/admin/userlist' component={UserListScreen}/> 
                    <Route path='/admin/productlist' component={ProductListScreen}/> 
                    <Route path='/admin/product/:id/edit' component={ProductEditScreen}/> 
                    <Route path='/' component={HomeScreen} exact/>
                </Container>
            </main>
            <Footer />
        </BrowserRouter>
  );
}

export default App;
