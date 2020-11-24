import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Home from '../components/Home/Home'
import Register from '../components/Register/Register'
import Dashboard from '../components/Dashboard/Dashboard'
import NavBar from '../components/NavBar/NavBar'
// import MP from '../components/MercadoPago/MercadoPago'
import AddClass from '../components/AddClass/AddClass'

const App = () => {
  return (
    <div>
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addclass" component={AddClass} />
            {/* <Route exact path="/mercadopago" component={MP} /> */}
        </Switch>
    </Router>
    </div>
  );
}

export default App;
