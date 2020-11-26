import  {Component} from 'react';
import * as Mui from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Public } from '@material-ui/icons';

class Albums extends Component{
  constructor(props){
   super(props);

  this.state ={
   data: [],
  };
}

 componentDidMount(){
   const apiUrl = 'https://jsonfy.com/albums';
   fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => this.setState({data: data}));
 }


  render() {
    const {data} = this.state;

    return (
      <div>
          <div class="navbar-fixed">
          <nav >
          <div class="nav-wrapper #c62828 red darken-3">
            <a href="#" class="brand-logo">JSON fy</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="/">User</a></li>
              <li><a href="/comment">Comment</a></li>
              <li><a href="/posts">Posts</a></li>
              <li><a href="/album">Albums</a></li>
              <li><a href="/photos">Photos</a></li>
              <li><a href="/todo">Todo</a></li>
              <li><a href="/categori">Categories</a></li>
              <li><a href="/brands">Brands</a></li>
              <li><a href="/items">Items</a></li>
            </ul>
          </div>
        </nav>
        </div>
          <Mui.Container fixed>
        <h1 align="center"> ALBUMS </h1>
        <table align="center" class="striped" border="1">
          <tr bgcolor="#ba000d">
            <td > ID</td>
            <td>TITLE</td>
            <td>USE ALB FK</td>
          </tr>
          {data.map(todo =>
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.use_alb_fk}</td>
            </tr>
            )}
        </table>
        </Mui.Container>
      </div>
    );
  }
}


export default Albums;
