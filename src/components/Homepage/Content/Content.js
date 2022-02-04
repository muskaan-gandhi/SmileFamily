import React from "react";
import Ourstrengths from './Ourstrength/Ourstrength';
import "./content.css";
import List from "./list";

function Content(){
    return(
        <>
            <div className="text">
                <h4>Registered  Under Section 80G for Income Tax Exemption</h4>
                <p>
                    <br></br>SMILE (Society For Mobilizing And Improving The Life Experiences Of The Underprivileged Women And Children) is a nonprofit organization working in Jaipur since November, 2003. 
                    SMILE is working for the betterment of underprivileged women and children who live in destitute homes of government, slums of Jaipur and near by villages. 
                    Our main focus is to provide counselling, vocational trainings, educational activities, creative activities, fun activities and recreational activities for deprived women and children. 
                    Smile is also providing training’s on leadership, Life Skills, Panchyat System, Health, Gender, Self-Defense, Teacher’s Training and many more.
                </p>
            </div>
            <Ourstrengths></Ourstrengths>
            <List></List>
            <i class="fas fa-trash"></i>
        </>
    )
}

export default Content;