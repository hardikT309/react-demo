import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    float: "right",
  },
  container: {
    margin: 0,
    marginLeft: 30,
    marginRight: 30,
  },
  main: {
    float: "left",
  },
  right: {
    float: "right",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appbar: {
    width: 600,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function IconLabelButtons() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users").then((result) => {
      result.json().then((resp) => {
        setData(resp.data);
      });
    });
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add Job
      </Button>
      <br></br>
      <h3>Action Job</h3>
      <div className={classes.main}>
        {data.map((item) => (
          <>
            <AppBar
              position="static"
              color="default"
              className={classes.appbar}
            >
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  {item.id}
                  {item.email}
                  {item.first_name}
                  {item.last_name}
                </Typography>

                <div>
                  <IconButton
                    aria-label=""
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <MoreVertIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
            {/* <Popup /> */}
          </>
        ))}
      </div>
    </div>
  );
}
