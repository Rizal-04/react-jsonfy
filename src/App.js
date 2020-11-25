import './App.css';
import {BrowserRouter, Switch, Link} from 'react-router-dom';
import Posts from './component/Posts';
import Comment from './component/Comment';
import User from './component/User';


function App() {
  return (
     <BrowserRouter>
          <Switch>
              <Link path="/" exact component={User} />
              <Link path="/posts" exact component={Posts} />
              <Link path="/comment" exact component={Comment} />

          </Switch>
     </BrowserRouter>
  );
}

export default App;
