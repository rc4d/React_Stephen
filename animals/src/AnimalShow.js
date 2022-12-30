import { useState } from 'react';
import './AnimalShow.css';
import bird from './svg/bird.svg';
import cow from './svg/cow.svg';
import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
    bird,
    cow,
    cat,
    dog,
    gator,
    horse
};

function AnimalShow({type}){
    const [clicks, setClicks] = useState(0);
    function clickEventHandler(){
        setClicks(clicks + 1);
    }
    return (
        <div className='animal-show' onClick={clickEventHandler}>
            <img className='animal' alt="Animals" src={svgMap[type]} />
            <img className='heart' alt="heart" src={heart}
                style = {{width: 10 + 10 * clicks + 'px', maxWidth:'200px'}}
             />
        </div>
    );
}
export default AnimalShow;