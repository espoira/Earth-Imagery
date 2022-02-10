import React from 'react';
import {API_KEY, API_PIC} from './config';

function Picture(props) {

    const {
        identifier:idIM,
        caption:title,
        date:datePic,
        image:pic,
    } = props;


    return (
        <div id={idIM} className = "card">

            <div className='card-image'>
                <img src={`${API_PIC}${datePic.split("-")[0]}/${datePic.split("-")[1]}/${datePic.split("-")[2].split(" ")[0]}/png/${pic}.png?api_key=${API_KEY}`} alt={title}/>
            </div>
            <div className='card-content'>
                <span className = "date"> Дата: {datePic.split(" ")[0]} </span>
                <span className = "time"> Время: {datePic.split(" ")[1]} </span>
            </div>

        </div>
    );
}

export { Picture };
