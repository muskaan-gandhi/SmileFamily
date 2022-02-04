import React from "react";
import "./Props.css"
import CountUp from 'react-countup';

function UseProps({Counter, RegText, HiddenText}){
    return(
        <div className="cards">
            <CountUp className="counter" end={Counter}></CountUp>
            <h4>{RegText}</h4>
            <p className="hidden-text">{HiddenText}</p>
        </div>
    )
}

function Ourstrengths(){

    return(
        <div className="card-container">
            <div className="our-strength">
                <UseProps Counter="13000" RegText="Counselling" HiddenText="To be filled by the content writer"></UseProps>
                <UseProps Counter="9000" RegText="Vocational Training" HiddenText="To be filled by the content writer"></UseProps>
                <UseProps Counter="4700" RegText="Education" HiddenText="To be filled by the content writer"></UseProps>
                <UseProps Counter="182" RegText="Rehabilitation" HiddenText="To be filled by the content writer"></UseProps>
                <UseProps Counter="100" RegText="Leadership Skills" HiddenText="To be filled by the content writer"></UseProps>
                <UseProps Counter="300" RegText="Seld Defence Training" HiddenText="To be filled by the content writer"></UseProps>
                <UseProps Counter="2000" RegText="Health Awareness Training" HiddenText="To be filled by the content writer"></UseProps>
                <UseProps Counter="280" RegText="Adult Literacy" HiddenText="To be filled by the content writer"></UseProps>
            </div>
        </div>
    )
}

export default Ourstrengths;