import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home'
import Register from '../components/Register/Register'
import Dashboard from '../components/Dashboard/Dashboard'
import Timer from '../components/Timer/Timer'
// import MP from '../components/MercadoPago/MercadoPago'
import AddClass from '../components/AddClass/AddClass'
import { getUser } from '../actions/user'
import { startClass } from '../actions/classes'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('userData'))
  const token = JSON.parse(localStorage.getItem('token'))
  const listClasses = useSelector(state => state.classes)
  let nextClassArr = []

  if (user) {
    dispatch(getUser(user.id, token))
  }

  // setInterval(() => {
  //   if (listClasses) {
  //     for (var i = 0; i < listClasses.length; i++) {
  //         if (Date.parse(listClasses[i].start) < Date.now()) {
  //             console.log(`Request for joining meet ${listClasses[i].url}`);
  //             dispatch(startClass(listClasses[i].url))
  //             // listClasses[i].start = listClasses[i].endTime + 2000;
  //         }
  //   //       if (Date.parse(listClasses[i].end) < Date.now()) {
  //   //           console.log(`Request for leaving meet ${listClasses[i].url}`);
  //   //           obj.end();
  //   //           // delete listClasses[x]
  //   //       }
  //     }
  //   }
  //   console.log('Set interval ejecutado')
  // }, 1000)
  
  if (listClasses && listClasses.length !== 0) {
    for (var i = 0; i < listClasses.length; i++) {
        let classObj = {}
        classObj.start = Date.parse(listClasses[i].start)
        classObj.url = listClasses[i].url
        nextClassArr.push(classObj)
      }
      nextClassArr.sort((a, b) => a.start - b.start)
    }

    console.log(nextClassArr)
    setInterval(() => {
      console.log(Date.now())
    }, 1000)


    if (sig === Date.now()) {
      dispatch(startClass(sig.url))
    }

  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addclass" component={AddClass} />
            <Route exact path="/profile" component={Timer} />
            {/* <Route exact path="/mercadopago" component={MP} /> */}
        </Switch>
    </Router>
  );
}

export default App;
