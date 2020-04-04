import React, {useState} from 'react';
import './SlideStyles.css';
import { useEffect } from 'react';

const ImageKey = [
    {
        image: "../Pictures/questionMark.jpg"
    },
    {
        image: "../Pictures/smileyFace2.jpg"
    },
    {
        image: "../Pictures/exclamationMark.jpg"
    }

]

const ImageSlider = ({pictures}) => {
    const [presImg, setPresImg] = useState(0)
    const { length } = pictures
    //console.log(presImg)
    
    const nextPic = () => {
        
        setPresImg( presImg === length - 1 ? 0 : presImg + 1 )
    }

    useEffect(() => {
        setTimeout(nextPic, 3000)
    })

    if(!Array.isArray(pictures) || length <= 0) {
        return null
    }

    return(
        <section className={"slider"}>
            {pictures.map((s, i) => (   
                        
                    <div className={i === presImg ? "active" : "slide"} key={s.title}>
                        <img className="image" src={s.image} alt=""/>
                    </div>
            ))}
        </section>
    )
}

const SlideShowTesting = () => {
    return(
        <main>
            <ImageSlider pictures={ImageKey} />
        </main>
    )
}
 
export default SlideShowTesting