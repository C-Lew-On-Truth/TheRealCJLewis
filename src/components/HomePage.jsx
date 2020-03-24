import React from 'react';
import homeStyles from '../stylesCSS/homepage.module.css';

class HomePage extends React.Component {
    render() {
        const imageSwag = {
            marginTop: "4px",
            border: "red solid 2px",
            width: "150px",
            height: "150px",
            cursor: "pointer"
        }

        const proImage = {
            width: "300px",
            height: "300px"
        }
        
        return(
           <div>
               <header>
                   Clayton Lewis
               </header>

              <div className={homeStyles.topFlexBox}>

                  <article className={homeStyles.topFlexboxItems}>

                        <div style={proImage}>

                            <img 
                            src="./Pictures/profile-pic.jpg" 
                            alt=""
                            />

                        </div>

                  </article>

                  <div className={homeStyles.topFlexboxItems}>
                        <p style={{padding:"20px"}}>
                        Hello this is a test and I want to make sure my grid is functioning the right way.<br></br>
                    It feels great to be productive while being creative at the same time! <br></br>
                    Learning to code has been a struggle, but I feel that I am learning something new <br></br>
                    everyday! I consider myself a jack of all trades, and have experience in media, <br></br>
                    sports, and the culinary arts! Now I'm expanding my horizon in the world of technology!<br></br>                     
                    I am now learning how to be a professional coder! This site is a glimpse of my skills!
                        </p>
                  </div>
              </div>  
               
               <div className={homeStyles.bottomFlexBox}>

                   <div className={homeStyles.bottomFlexboxItems}>      

                        <p style={{padding:"10px"}}>

                        <b style={{fontSize: "30px"}}>CONTACT INFORMATION</b><br></br>

                            Email:<br></br> 
                            lewisclayton89@gmail.com<br></br>
                            Phone:<br></br> 
                            775-233-7630<br></br>
                            Address:<br></br> 
                            614 W. 146th Street. Apt#4
                            New York, New York, 10031

                        </p>   

                   </div>

                   <div className={homeStyles.bottomFlexboxItems}
                   style={{width: "60%"}}
                   >

                        <div  className={homeStyles.selectFlexBox }>
                            <section>
                                    About Me
                                <div style={imageSwag}>
                                    <img
                                    onClick={() => {window.location.href="AboutMe"}}  
                                    src="./Pictures/questionMark.jpg" 
                                    alt=""/>
                                </div>

                            </section>

                            <section>
                                    Experience
                                <div style={imageSwag}>
                                    <img src="./Pictures/exclamationMark.jpg" alt=""/>
                                </div>

                            </section>

                            <section>
                                    Projects
                                <div style={imageSwag}>
                                    <img  src="./Pictures/smileyFace2.jpg" alt="" />
                                </div> 

                            </section>
                        </div>

                   </div>

               </div>
           </div>

        );
    }
}

export default HomePage