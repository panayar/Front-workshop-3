import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Detail from './pages/Detail'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Order from './pages/Order';

function App() {
  return (
    <Switch>
      <Route exact path="/inicio/" component={Home} />
      <Route path="/detail-product/:id" component={Detail} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/order-detail" component={Order} />
    </Switch>
  );
}

export default App;
