import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Base from './components/Base';
import NotFound from './components/NotFound';
import News from './components/News/News';
import Arts from './components/Arts/Art';
import Science from './components/Sciences/Science';
import Sports from './components/Sports/Sport';
import 'antd/dist/antd.css'
import './App.css';

function App() {
  return (
    <Router>
      <Switch> 
        <Route exact path="/" component={Base} />
        <Route exact path="/News" component={News} />
        <Route exact path="/Sciences" component={Science} />
        <Route exact path="/Sports" component={Sports} />
        <Route exact path="/Arts" component={Arts} />
        <Route path="" component={NotFound} /> 
      </Switch>
    </Router>
  );
}

export default App;
