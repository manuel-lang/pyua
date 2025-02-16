import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const [desc, setDesc] = useState("");
  const [orientation, setOrientation] = useState(1);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const words = ["caring", "reassuring", "supportive", "conscious", "mindful", "clean", "the counterpart to our confusing world – embracing consciousness & mindfulness"];

  useEffect(() => {
    const func = setTimeout(() => {
      if (orientation === 1) {
        if (words[wordIndex].length >= charIndex + 1) {
          setCharIndex(charIndex => charIndex + 1);
          setDesc(words[wordIndex].substring(0, charIndex + 1));
        }
        else {
          if (wordIndex !== words.length - 1) {
            setOrientation(-1);
          }
        }
      }
      else if (orientation === -1) {
        if (charIndex > 0) {
          setCharIndex(charIndex => charIndex - 1);
          setDesc(words[wordIndex].substring(0, charIndex));
        }
        else {
          setWordIndex(wordIndex => (wordIndex + 1));
          setCharIndex(0);
          setOrientation(1);
        }
      }
    }, (wordIndex === 0 && charIndex === 0) || words[wordIndex].length < charIndex + 1 ? 1000 : Math.floor(Math.random() * 40) + 80  );
    return () => clearTimeout(func);
  }, [charIndex, orientation]);

  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="VieCo"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>py:ua</h1>
                <h3 className={classes.subtitle}>
                  py:ua is <b>{desc}</b>
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
      </div>
      <Footer />
    </div>
  );
}
