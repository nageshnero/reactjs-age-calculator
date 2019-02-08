import React from 'react';
import congrats from './congrats.png';
import './congrats.css';

const Congrats = ({ date }) => {
    return(
        <div className="text-center">
            <h4>{date.date}</h4>
            <h3>Congrats on {date.year_age} years {date.month_age} months and {date.day_age} days!!</h3>
            <img className="img-responsive congrats-img" src={congrats} alt="Congrats"/>
        </div>
    );
}

export default Congrats;