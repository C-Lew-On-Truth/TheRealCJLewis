import React from 'react';
import NavBar from '../side-components/NavBar.jsx';
import '../styles/experience.css';

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

            <header onClick={() => { alert(window.innerWidth) }}>Experience</header>

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
                            My foundation as a Media Technology Professional started out as Format DJ at WNBY 91.3 FM.
                            This happened to be the campus radio station at Buffalo State College.
                            It was my first chance at creatively expressing myself in a professional radio studio where I had to operate an audio board,
                            follow on-air protocol, and show on-air listeners my smooth personality splashed with my authentic musical taste!
                            After a few more years I was able to secure an internship at the local TV News station WIVB News Channel 4!
                            I was able to apply my educational training in corparate news environment which required wearing many hats such as learning how to be producer, shooter, and editor in a limited amount of time!
                            I knew what to expect and what was expected of me when stepping into any media environment.
                            I was able to secure my degree in Media Productions in 2014 while also participating as four year NCAA Student Athlete on the Mens Hockey Team!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.tabs}>
                    <AccordionSummary>
                        <Typography className={classes.heading} >Employment Growth</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.entry}>
                            After graduating I spent a year in Buffalo working as a full time Line Cook and doing
                            PA work on the side for a private Cinematographer named Jim Panzarella. However, the Buffalo
                            metro area did not offer a whole lot media opportunties so I decided to relocate to New York
                            City to apply my degree into securing a full time job. After 6 months of volunteer PA work while
                            working as a Line Cook to make a living I finally earned a position working at the National Hockey League
                            as Digital Asset Archivist! This position gave me a different perspective in the industry
                            on how media was preserved, organized, and digitized. I would learn how to be resourceful and begin to devlop
                            technical skills which I discovered was just as neccesary as being creative! From
                            there I would take on a operatational role working at Adobe Stock Media! Here, I would gain a
                            deeper persepective in photography and videos along with acting as a troubleshooter for myself
                            and other colleagues!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.tabs}>
                    <AccordionSummary>
                        <Typography className={classes.heading} >Seasoned Professional</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.entry}>
                            Working at Adobe gave me a knowledgable foundation on how software systems work along
                            with the importance of media formats for video and images. I was also introduced to the world
                            of web software development specificially with HTML, CSS, and JavaScript! To this day I
                            contintue to build on my knowledege of these programming languages! Unfortunately, I would go
                            on to leave Adobe and take a job at Meredith working as Video Ingest Technician.
                            This experience, taught me how to truly manage media along with the different transcoding methods
                            various video codecs! My time at Meredith would not last long, as I would decide to take a
                            Full Time Staff Position at New York One News! As a current member of the Technical Operations department,
                            my responsibilities consist of quality control, media management, and technical troubleshooting!
                            Being at New York One has been a pleasure, but I know that my journey is not complete!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    )

}

export default ThirdPartyExpo 