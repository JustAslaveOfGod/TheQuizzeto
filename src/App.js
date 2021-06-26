import Secondpage from './Secondpage';
import Firstpage from './Firstpage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Switch>
          <Route path="/questions">
            <Secondpage />
          </Route>
          <Route exact path="/">
            <Firstpage />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
