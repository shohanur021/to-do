import React, { useState } from 'react';
import './Body.css'
import Activity from '../Activity/Activity'

interface Iactivity {
    id: number;
    activityName: string
}

const Body = () => {

    const [activity, setActivity] = useState<Iactivity>({} as Iactivity);
    const [activityList, setActivityList] = useState<Iactivity[]>([]);

    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let checkSubmiit = activityList.some(item => item.activityName === activity.activityName)
        if (!checkSubmiit) {
            setActivityList([...activityList, activity])
            alert("The task succesfully added")
        }
        else {
            alert("This task already existed")
        }
    }

    const onBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newActivity = { activityName: e.target.value, id: Math.floor(Math.random() * 10000000000000000) }
        setActivity(newActivity)
    }

    const removeActivity = (deleteActivity: number): void => {
        const newActivities = activityList.filter(singleActivity => singleActivity.id !== deleteActivity)
        setActivityList(newActivities)
    }

    const removeAllActivity = () => {
        setActivityList([])
    }

    return (
        <div className="body-container">
            <form onSubmit={onSubmit}>
                <input className='activity-field' type="text" name="doingActivities" onBlur={onBlur} required />
                <input className='activity-submit' type="submit" value="+" />
            </form>
            <br /> <br />
            <div className="activity-container">
                <h3>List of Activities:</h3>
                {
                    activityList.map(singleActivity => <Activity doActivity={singleActivity.activityName} activityNo={singleActivity.id} removeActivity={removeActivity} key={singleActivity.id}></Activity>)
                }
            </div>
            {
                activityList.length !== 0 && (
                    <div className='all-clear'>
                        <h3>You have pending {activityList.length} tasks</h3>
                        <button onClick={removeAllActivity}>Clear All</button>
                    </div>
                )
            }


        </div>
    );
};

export default Body;