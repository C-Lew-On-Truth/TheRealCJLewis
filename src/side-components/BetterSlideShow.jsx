import React, { useState }  from 'react';
import { useEffect } from 'react';
import Food from '../assets/Food.JPG';
import Lizard from '../assets/Amilion.jpg';
import BShockey from '../assets/BsThrowBack.jpg'
import Willie from '../assets/willie.jpg'


const ImageKey = [
    {
        image: Food
    },
    {
        image: Lizard
    },
    {
        image: BShockey
    },
    {
        image: Willie
    }

];

function BetterSlideShow( {pictures} ) {

    const [presImg, setPresImg] = useState(0)
    const { length } = pictures
    //console.log(presImg)
    
    const nextPic = () => {
        
        setPresImg( presImg === length - 1 ? 0 : presImg + 1 )
    }

    useEffect(() => {
        setTimeout(nextPic, 1000)
    })

    if(!Array.isArray(pictures) || length <= 0) {
        return null
    }

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


export default BetterSlideShow;
export { ImageKey }