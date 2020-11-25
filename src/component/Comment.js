import  {Component} from 'react';
import * as Mui from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Comment extends Component{
  constructor(props){
   super(props);

  this.state ={
   data: [],
  };
}

 componentDidMount(){
   const apiUrl = 'https://jsonfy.com/comments';
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
        <h1 align="center"> COMMENT </h1>
        <table border="2">
          <tr bgcolor="#ba000d">
            <td > ID</td>
            <td>USE COM FK</td>
            <td>POS COM FK</td>
            <td>COMMENT</td>
            <td>DATE ADD</td>
            <td>DATE UPD</td>
          </tr>
          {data.map(todo =>
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.use_com_fk}</td>
              <td>{todo.pos_com_fk}</td>
              <td>{todo.comment}</td>
              <td>{todo.date_add}</td>
              <td>{todo.date_upd}</td>
            </tr>
            )}
        </table>
        </Mui.Container>
      </div>
    );
  }
}


export default Comment;
