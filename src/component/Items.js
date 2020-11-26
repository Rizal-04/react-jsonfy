import  {Component} from 'react';
import * as Mui from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Items extends Component{
  constructor(props){
   super(props);

  this.state ={
   data: [],
  };
}

 componentDidMount(){
   const apiUrl = 'https://jsonfy.com/items';
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
        <h1 align="center"> ITEMS </h1>
        <table align="center" class="striped" border="1">
          <tr bgcolor="#ba000d">
            <td > ID</td>
            <td>NAME</td>
            <td>DESCRIPTION</td>
            <td>WHOLESALE PRICE</td>
            <td>PRICE</td>
            <td>PHOTO URL</td>
            <td>STOCK</td>
            <td>SALES</td>
            <td>ACTIVE</td>
            <td>DATE ADD</td>
            <td>DATE UPD</td>
            <td>BRA ITE FK</td>
          </tr>
          {data.map(todo =>
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>{todo.description}</td>
              <td>{todo.wholesale_price}</td>
              <td>{todo.price}</td>
              <td>{todo.photo_url}</td>
              <td>{todo.stock}</td>
              <td>{todo.sales}</td>
              <td>{todo.active}</td>
              <td>{todo.date_add}</td>
              <td>{todo.date_upd}</td>
              <td>{todo.bra_ite_fk}</td>
            </tr>
            )}
        </table>
        </Mui.Container>
      </div>
    );
  }
}


export default Items;
