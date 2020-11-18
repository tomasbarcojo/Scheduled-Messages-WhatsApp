import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home'
import Register from '../components/Register/Register'
import MP from '../components/MercadoPago/MercadoPago'

const App = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            {/* <Route exact path="/mercadopago" component={MP} /> */}
        </Switch>
    </Router>
  );
}

export default App;
