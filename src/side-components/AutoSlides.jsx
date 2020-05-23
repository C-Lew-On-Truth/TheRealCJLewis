import React, { useState }  from 'react';
import { useEffect } from 'react';
//import AutoPics from '../side-components/AutoPics.jsx';
import '../styles/auto-styles.css'

function AutoSlides( {pictures} ) {

    const [presImg, setPresImg] = useState(0)
    const { length } = pictures
    
    const nextPic = () => {    
        setPresImg( presImg === length - 1 ? 0 : presImg + 1 )
    }

    useEffect(() => {
        setTimeout(nextPic, 3000)
    })

    return(
        <div>
             <section className="slider">
                    {pictures.map((s, i) => (   
                        
                    <div className={i === presImg ? "active" : "slide"}>
                        <img className="image" src={s.image} alt=""/>
                    </div>
                    ))}
                </section>
        </div>
    );
}

export default AutoSlides;
