import  {Component} from 'react';
import * as Mui from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class User extends Component{
  constructor(props){
   super(props);

  this.state ={
   data: [],
  };
}

 componentDidMount(){
   const apiUrl = 'https://jsonfy.com/users';
   fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => this.setState({data: data}));
 }


  render() {
    const {data} = this.state;

    return (
      <div >
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
        <h1 align="center"> USERS </h1>
        <table class="striped" border="1">
          <tr bgcolor="#ba000d">
            <td > ID</td>
            <td>NAME</td>
            <td>USERNAME</td>
            <td>EMAIL</td>
            <td>PASSWORD</td>
            <td>AGE</td>
            <td>WEBSITE</td>
            <td>PHONE</td>
            <td>DATE ADD</td>
            <td>DATE UPD</td>
            <td>PASSWORD MD5</td>
          </tr>
          {data.map(todo =>
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>{todo.username}</td>
              <td>{todo.email}</td>
              <td>{todo.password}</td>
              <td>{todo.age}</td>
              <td>{todo.website}</td>
              <td>{todo.phone}</td>
              <td>{todo.date_add}</td>
              <td>{todo.date_upd}</td>
              <td>{todo.password_md5}</td>
            </tr>
            )}
        </table>
        </Mui.Container>
      </div>
    );
  }
}


export default User;
