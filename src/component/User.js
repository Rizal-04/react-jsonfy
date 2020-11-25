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
          <Mui.Toolbar bgcolor="#ba000d">
                <IconButton edge="start"  color="default" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Mui.ButtonGroup color="secondary" aria-label="outlined secondary button group">
                    <Mui.Button href="/">User</Mui.Button>
                    <Mui.Button href="/comment">Comment</Mui.Button>
                    <Mui.Button href="/posts">Posts</Mui.Button>
                </Mui.ButtonGroup>
         </Mui.Toolbar>
          <Mui.Container fixed>
        <h1 align="center"> USERS </h1>
        <table border="1">
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
