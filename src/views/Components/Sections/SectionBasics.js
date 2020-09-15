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

import sleep from "assets/img/2020_PYUA_SLEEP.jpg";
import rock from "assets/img/Pyua - Rock.jpg";
import breathe from "assets/img/Pyua_Breathe.jpg";
import dance from "assets/img/PYUA-DANCE.jpg"


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import MediaCard from "../MediaCard";
import { AirlineSeatFlatRounded } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const [flavors, setFlavors] = React.useState([]);
  const [dialogStep, setDialogStep] = React.useState(0);
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

  const addFlavor = (flavor) => {
    let tempFlavors = [...flavors];
    tempFlavors.push(flavor);
    setFlavors(tempFlavors);
  }
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>_your mood</h2>
        </div>
        <Grid container className={classes.root} spacing={2}>
          <Grid item lg={3} xs={12}>
            <MediaCard img={breathe} title={"breathe"} />
          </Grid> <Grid item lg={3} xs={12}>
            <MediaCard img={dance} title={"dance"} />
          </Grid> <Grid item lg={3} xs={12}>
            <MediaCard img={rock} title={"rock"} />
          </Grid> <Grid item lg={3} xs={12}>
            <MediaCard img={sleep} title={"sleep"} />
          </Grid>
        </Grid>
        <div className={classes.title}>
          <h2>_your taste</h2>
        </div>
        {dialogStep === 0 && <div>
          <h4>Select your favorite flavors</h4>
          <Grid container className={classes.root} spacing={2}>
            <Grid item lg={2} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => addFlavor("Bergamont Orange")}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />
                }
                classes={{ label: classes.label, root: classes.labelRoot }}
                label="Bergamot Orange"
              />
            </Grid>
            <Grid item lg={2} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => addFlavor("Eucalyptus")}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />
                }
                classes={{ label: classes.label, root: classes.labelRoot }}
                label="Eucalyptus"
              />
            </Grid>
            <Grid item lg={2} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => addFlavor("Grapefruit")}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />
                }
                classes={{ label: classes.label, root: classes.labelRoot }}
                label="Grapefruit"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.root} spacing={2}>
            <Grid item lg={2} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => addFlavor("Lavender")}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />
                }
                classes={{ label: classes.label, root: classes.labelRoot }}
                label="Lavender"
              />
            </Grid>
            <Grid item lg={2} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => addFlavor("Lemon")}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />
                }
                classes={{ label: classes.label, root: classes.labelRoot }}
                label="Lemon"
              />
            </Grid>
            <Grid item lg={2} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => addFlavor("Lime")}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />
                }
                classes={{ label: classes.label, root: classes.labelRoot }}
                label="Lime"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.root} spacing={2}>
            <Grid item lg={2} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => addFlavor("Mint")}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />
                }
                classes={{ label: classes.label, root: classes.labelRoot }}
                label="Mint"
              />
            </Grid>
            <Grid item lg={2} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => addFlavor("Peppermint")}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />
                }
                classes={{ label: classes.label, root: classes.labelRoot }}
                label="Peppermint"
              />
            </Grid>
            <Grid item lg={2} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => addFlavor("Rosemary")}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />
                }
                classes={{ label: classes.label, root: classes.labelRoot }}
                label="Rosemary"
              />
            </Grid>
            <Grid item lg={2} xs={12}>
              {flavors.length > 0 && <Button onClick={() => setDialogStep(1)}>Continue</Button>}
            </Grid>
          </Grid>
        </div>}
        {dialogStep === 1 && <div>
          <h4>Select your current feeling</h4>
          <FormControlLabel
            control={
              <Radio
                checked={selectedEnabled === "motivated"}
                onChange={() => setSelectedEnabled("motivated")}
                value="motivated"
                name="radio button enabled"
                aria-label="motivated"
                icon={
                  <FiberManualRecord className={classes.radioUnchecked} />
                }
                checkedIcon={
                  <FiberManualRecord className={classes.radioChecked} />
                }
                classes={{
                  checked: classes.radio,
                  root: classes.radioRoot
                }}
              />
            }
            classes={{
              label: classes.label,
              root: classes.labelRoot
            }}
            label="motivated"
          />
          <FormControlLabel
            control={
              <Radio
                checked={selectedEnabled === "calm"}
                onChange={() => setSelectedEnabled("calm")}
                value="calm"
                name="radio button enabled"
                aria-label="calm"
                icon={
                  <FiberManualRecord className={classes.radioUnchecked} />
                }
                checkedIcon={
                  <FiberManualRecord className={classes.radioChecked} />
                }
                classes={{
                  checked: classes.radio,
                  root: classes.radioRoot
                }}
              />
            }
            classes={{
              label: classes.label,
              root: classes.labelRoot
            }}
            label="calm"
          />
          <FormControlLabel
            control={
              <Radio
                checked={selectedEnabled === "exhausted"}
                onChange={() => setSelectedEnabled("exhausted")}
                value="exhausted"
                name="radio button enabled"
                aria-label="exhausted"
                icon={
                  <FiberManualRecord className={classes.radioUnchecked} />
                }
                checkedIcon={
                  <FiberManualRecord className={classes.radioChecked} />
                }
                classes={{
                  checked: classes.radio,
                  root: classes.radioRoot
                }}
              />
            }
            classes={{
              label: classes.label,
              root: classes.labelRoot
            }}
            label="exhausted"
          />
          { (selectedEnabled === "motivated" || selectedEnabled === "calm" || selectedEnabled === "exhausted") && <Button onClick={() => setDialogStep(2)}>Show taste</Button>}
        </div>}
        { dialogStep === 2 && 
          (selectedEnabled === "motivated" ? <MediaCard img={rock} title={"rock"} /> : selectedEnabled === "calm" ? <MediaCard img={breathe} title={"breathe"} /> : <MediaCard img={sleep} title={"sleep"} />)
        }
      </div>

    </div>
  );
}
