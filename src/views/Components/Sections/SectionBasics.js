import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";
import Grid from '@material-ui/core/Grid';


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import MediaCard from "../MediaCard";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  React.useEffect(() => {
    // if (
    //   // !document
    //     // .getElementById("sliderRegular")
    //     // .classList.contains("noUi-target")
    // ) {
    //   Slider.create(document.getElementById("sliderRegular"), {
    //     start: [40],
    //     connect: [true, false],
    //     step: 1,
    //     range: { min: 0, max: 100 }
    //   });
    // }
    // if (
    //   // !document.getElementById("sliderDouble").classList.contains("noUi-target")
    // ) {
    //   Slider.create(document.getElementById("sliderDouble"), {
    //     start: [20, 60],
    //     connect: [false, true, false],
    //     step: 1,
    //     range: { min: 0, max: 100 }
    //   });
    // }
    return function cleanup() { };
  });
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>_your mood</h2>
        </div>
        <Grid container className={classes.root} spacing={2}>
          <Grid item lg={4} xs={12}>
            <MediaCard img={"https://www.visittranas.com/wp-content/uploads/2018/03/placeholder.jpg"} title={"happy"}/>
          </Grid> <Grid item lg={4} xs={12}>
            <MediaCard img={"https://www.visittranas.com/wp-content/uploads/2018/03/placeholder.jpg"} title={"energetic"}/>
          </Grid> <Grid item lg={4} xs={12}>
            <MediaCard img={"https://www.visittranas.com/wp-content/uploads/2018/03/placeholder.jpg"} title={"optimistic"}/>
          </Grid> <Grid item lg={4} xs={12}>
            <MediaCard img={"https://www.visittranas.com/wp-content/uploads/2018/03/placeholder.jpg"} title={"sad"}/>
          </Grid> <Grid item lg={4} xs={12}>
            <MediaCard img={"https://www.visittranas.com/wp-content/uploads/2018/03/placeholder.jpg"} title={"cranky"}/>
          </Grid> <Grid item lg={4} xs={12}>
            <MediaCard img={"https://www.visittranas.com/wp-content/uploads/2018/03/placeholder.jpg"} title={"irritated"}/>
          </Grid>
        </Grid>
        <div className={classes.title}>
          <h2>_your taste</h2>
        </div>
      </div>
      
    </div>
  );
}
