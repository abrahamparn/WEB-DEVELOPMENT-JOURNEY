import "./assets/css/app.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulations from "pages/Congratulations";
import Notfound from "pages/Notfound";
import Provider from "helpers/hooks/useGlobalContext";
function App() {
  return (
    <Provider>
        <Router>
          <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/categories/:idc" component={Details}/>
          <Route  path="/categories/:idc/products/:idp" component={Details}/>
          <Route  path="/cart" component={Cart}/>
          <Route  path="/congratulations" component={Congratulations}/>
          <Route  path="*" component={Notfound}/>
          </Switch>
        
        </Router>
    </Provider>
   
  );
}

export default App;
