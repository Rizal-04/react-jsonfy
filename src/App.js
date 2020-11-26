import './App.css';
import {BrowserRouter, Switch, Link} from 'react-router-dom';
import Posts from './component/Posts';
import Comment from './component/Comment';
import User from './component/User';
import Albums from './component/Albums';
import Photos from './component/Photos';
import Todo from './component/Todo';
import Categories from './component/Categories';
import Brands from './component/Brands';
import Items from './component/Items';
import { Icon } from '@material-ui/core';


function App() {
  return (
     <BrowserRouter>
          <Switch>
              <Link path="/" exact component={User} />
              <Link path="/posts" exact component={Posts} />
              <Link path="/comment" exact component={Comment} />
              <Link path="/album" exact component={Albums} />
              <Link path="/photos" exact component={Photos} />
              <Link path="/todo" exact component={Todo} />
              <Link path="/categori" exact component={Categories} />
              <Link path="/brands" exact component={Brands} />
              <Link path="/items" exact component={Items} />
          </Switch>
     </BrowserRouter>
  );
}

export default App;
