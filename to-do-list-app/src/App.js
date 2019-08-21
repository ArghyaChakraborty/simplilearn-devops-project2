import React, { useEffect, useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '0px auto',
  },
  textFieldFirst: {
    marginLeft: theme.spacing(30),
    marginRight: theme.spacing(1),
    width: '30%',
  },
  textFieldSecond: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const [todoTask, setTodoTask] = useState("");
  const [todoDue, setTodoDue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos([      
	  {"task" : "Finish office work", "due": "this week"},
      {"task" : "Go out for dinner with friends", "due": "saturday"},
      {"task" : "Familiarize with devops concepts", "due": "everyday"}
]);
  }, []);

  const handleChangeTask = (e) => {
    setTodoTask(e.target.value);
  };

  const handleChangeDue = (e) => {
    setTodoDue(e.target.value);
  };

  const addToDo = (e) => {
	setTodos([...todos, {"task" : todoTask , "due": todoDue}]);    
  };

  return (
    <>
      <TextField
        className={classes.textFieldFirst}
        value={todoTask}
        onChange={handleChangeTask}
        margin="normal"
        placeholder="Enter a new to-do here"
      />
      <TextField
        className={classes.textFieldSecond}
        value={todoDue}
        onChange={handleChangeDue}
        margin="normal"
        placeholder="Enter the due date here"
      />
      <Button variant="contained" color="primary" className={classes.button} onClick={addToDo}>
        Add To-do
      </Button>
      <List className={classes.list}>
        {
          todos.map((json, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={json.task} secondary={json.due} />
            </ListItem>
          ))
        }
      </List>
    </>
  );
}

export default App;
