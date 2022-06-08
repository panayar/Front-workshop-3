import { Route, Switch } from 'react-router-dom';
import Products from './pages/Products'
import Detail from './pages/Detail'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/search-products" component={Products} />
        <Route path="/detail-product/:id" component={Detail} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/order-detail" component={Order} />
        <Route path="/order-detail" component={Order} />
        <Route path='/home' component={Home} />
      </Switch>
    </>

  );
}

export default App;
