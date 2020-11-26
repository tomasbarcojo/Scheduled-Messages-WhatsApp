import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home'
import Register from '../components/Register/Register'
import Dashboard from '../components/Dashboard/Dashboard'
// import MP from '../components/MercadoPago/MercadoPago'
import AddClass from '../components/AddClass/AddClass'
import { getUser } from '../actions/user'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('userData'))
  const token = JSON.parse(localStorage.getItem('token'))
  const classes = useSelector(state => state.classes)


  if (classes && classes.length !== 0) {
    // alert(Date.parse(classes[0].start))
  //   setInterval(() => {
  //     for (var i = 0; i < classes.length; i++) {
  //         if (Date.parse(classes[i].start) < Date.now()) {
  //             console.log(`Request for joining meet ${classes[i].url}`);
  //             obj.schedule(classes[i].url);
  //             classes[i].start = classes[i].end + 2000;
  //         }
  //         if (Date.parse(classes[i].start) < Date.now()) {
  //             console.log(`Request for leaving meet ${classes[i].classes}`);
  //             obj.end();
  //             delete classes[i]
  //         }
  //     }
  // }, 1000)
  }

  if (user) {
    dispatch(getUser(user.id, token))
  }

  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addclass" component={AddClass} />
            {/* <Route exact path="/mercadopago" component={MP} /> */}
        </Switch>
    </Router>
  );
}

export default App;
