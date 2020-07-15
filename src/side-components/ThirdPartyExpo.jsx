import React from 'react';
import NavBar from '../side-components/NavBar.jsx';
import '../styles/experience.css';
import ExpoEntries from '../side-components/ExpoEntries';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import { AccordionActions } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/experience.css';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        margin: '10% auto',

    },
    tabs: {
        backgroundColor: 'black',
        color: 'white',
        border: 'white dashed 2px',
    },
    heading: {
        fontFamily: "Comic Sans MS",
        fontSize: '40px',
        textAlign: 'center',
        margin: '0 auto',
    },
    entry: {
        fontFamily: "Comic Sans MS",
    }

}))

const ExpoPage = props => <span className="globalNavBar">{props.page}</span>

const ThirdPartyExpo = () => {

    const classes = useStyles()

    return (
        <div className='expoPage'>

            <header>Experience</header>

            <NavBar
                goHome="Go Home"
                goAboutMe="About Me"
                goExpo={<ExpoPage page="Experience" />}
                goProjects="Projects"
            />
            <div className={classes.root} >

                <Accordion className={classes.tabs}>
                    <AccordionSummary>
                        <Typography className={classes.heading} >Professional Foundation</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.entry}>
                            {ExpoEntries[0].expo}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.tabs}>
                    <AccordionSummary>
                        <Typography className={classes.heading} >Employment Growth</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.entry}>
                            {ExpoEntries[1].expo}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.tabs}>
                    <AccordionSummary>
                        <Typography className={classes.heading} >Seasoned Professional</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.entry}>
                        {ExpoEntries[2].expo}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    )

}

export default ThirdPartyExpo 