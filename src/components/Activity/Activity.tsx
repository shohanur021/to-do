import React from 'react';
import './Activity.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

interface Iprops {
    activityNo:number;
    doActivity:string;
    removeActivity: (deleteActivity: number) => void
}

const Activity = ({activityNo,doActivity,removeActivity}: Iprops) => {
    return (
        <div className='activity-box'>
            <button onClick={() => removeActivity(activityNo)}><FontAwesomeIcon  icon={faTrashAlt} style={{color:'red'}} size="2x" /></button>
            <p>{doActivity}</p>
        </div>
    ); 
};

export default Activity;