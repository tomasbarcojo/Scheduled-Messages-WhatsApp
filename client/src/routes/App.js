import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home'
import Register from '../components/Register/Register'

const App = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
        </Switch>
    </Router>
  );
}

export default App;
