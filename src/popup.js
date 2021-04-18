import React from "react";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  head: {
    width: 1000,
  },
  headLeft: {
    width: 300,
    float: "left",
  },
  headRight: {
    float: "right",
  },
  text_select: {
    width: 1300,
  },
  text: {
    float: "left",
  },
  textField: {
    width: 600,
  },
  mainSelect: {
    float: "right",
  },
  select: {
    width: 600,
  },
  label: {
    paddingRight: 100,
  },
  textArea: {
    width: 600,
  },
  textLarge: {
    width: 1300,
  },
  button: {
    margin: theme.spacing(1),
    float: "right",
  },
}));

export default function Popup() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setAge(event.target.value);
  };
  return (
    <div>
      <div className={classes.head}>
        <div className={classes.headLeft}>
          <h3>Edit a Job</h3>
        </div>
        <div className={classes.headRight}>
          <IconButton
            edge="start"
            className={classes.closeButton}
            color="inherit"
            aria-label="menu"
          >
            <CloseRoundedIcon />
          </IconButton>
        </div>
      </div>

      <div className={classes.formGroup}>
        <br></br>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Basic Information"
        />
      </div>
      <br></br>
      <div className={classes.text_select}>
        <div className={classes.text}>
          <label>
            <b>Job Title</b>
          </label>
          <br></br>
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            className={classes.textField}
          />
        </div>
        <br></br>

        <div className={classes.mainSelect}>
          <label>
            <b>Position Type</b>
          </label>
          <br></br>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            className={classes.select}
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <label className={classes.label}>Rendom opportunities ?</label>
      <FormControlLabel control={<Switch name="checkedB" color="primary" />} />
      <br></br>
      <br></br>
      <label>
        <b>Job Description</b>
      </label>
      <br></br>
      <TextareaAutosize
        aria-label="minimum height"
        rowsMin={3}
        placeholder="Description"
        className={classes.textArea}
      />
      <br></br>
      <br></br>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Matching Criteria"
      />

      <div className={classes.text_select}>
        <div className={classes.text}>
          <label>
            <b>Servicity</b>
          </label>
          <br></br>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            className={classes.textField}
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>

        <div className={classes.mainSelect}>
          <label>
            <b>Closest Job Function</b>
          </label>
          <br></br>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            className={classes.select}
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <br></br>
      </div>
      <br></br>
      <br></br>

      <label>
        <b>Relevant Skills</b>
      </label>
      <br></br>
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        className={classes.textLarge}
      />
      <br></br>
      <br></br>
      <label className={classes.label}>Is Scolarship Available ?</label>
      <FormControlLabel control={<Switch name="checkedB" color="primary" />} />
      <br></br>
      <br></br>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary Personal"
      />
      <br></br>
      <Button variant="contained" color="primary" className={classes.button}>
        Save
      </Button>
    </div>
  );
}
