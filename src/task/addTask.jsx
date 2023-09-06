import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { Statuses, Urgencies } from '../helpers/constants';
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { getRelatedListDB, setRelatedListDB } from '../helpers/database';



const handleSubmit = (e, setOpenModal, setTaskList, dataRef, taskList) => {
    e.preventDefault();
    setOpenModal(false);
    setTaskList([...taskList, { ...dataRef.current, selected: false, id: new Date().getTime(), num: taskList.length, status: Statuses.NotStarted }])
}


let relatedListdb = getRelatedListDB();

const AddTask = ({ setOpenModal, setTaskList, taskList }) => {
    const startDate = moment().format("YYYY-MM-DD");
    const dataRef = useRef({ date: startDate, related: 'General' });
    const [relatedList, setRelatedList] = useState(relatedListdb)
    const [showRelatedList, setShowRelatedList] = useState(false)

    useEffect(() => {
        relatedListdb = getRelatedListDB();
    }, [relatedList])

    const addRelatedList = () => {
        if ((!relatedList.includes(dataRef.current.related))) {
            let related = [...relatedList, dataRef.current.related]
            setRelatedListDB(related)
            setRelatedList(related)

        }
        setShowRelatedList(!showRelatedList)
    }

    return (
        <div className='modal-bg'>
            <div className='add-task modal'>
                <div className='modal-top-header'>
                    <h2>Create Task</h2>
                    <div onClick={() => { setOpenModal(false) }}>
                        <AiOutlineCloseCircle style={{ cursor: 'pointer' }} size={25} />
                    </div>
                </div>
                <div className='new-task'>
                    <form onSubmit={(e) => handleSubmit(e, setOpenModal, setTaskList, dataRef, taskList)}>

                        <div className='new-item'>
                            <label>Name</label>
                            <input maxLength="50" required onChange={(e) => { dataRef.current.name = e.target.value }} type="text" />
                        </div>
                        <div className='new-item'>
                            <label>Date To Finish</label>
                            <input required type='date' defaultValue={startDate} onChange={(e) => { dataRef.current.date = e.target.value }}></input>
                        </div>
                        <div className='new-item'>
                            <label>Description</label>
                            <textarea maxLength="250" required onChange={(e) => { dataRef.current.description = e.target.value }} type="text" />
                        </div>
                        <div className='new-item'>
                            <label>Urgency</label>
                            <select required onChange={(e) => { dataRef.current.urgency = Urgencies[e.target.value] }} id="urgency">
                                <option value="">Select An Option</option>
                                {Object.values(Urgencies).map((urgency) => <option key={urgency.id} value={urgency.value}>{urgency.value}</option>)}
                            </select>
                        </div>
                        <div className='new-item'>
                            <label>Assign To Person</label>
                            <div className='link-related'>
                                {showRelatedList ?
                                    <select defaultValue={dataRef.current.related} onChange={(e) => { dataRef.current.related = e.target.value }}> {relatedList.map((related, i) => <option key={i} value={related}>{related}</option>)} </select>
                                    :
                                    <input placeholder='Add Assigned Person Or Choose' onChange={(e) => { dataRef.current.related = e.target.value }} type="text" />
                                }
                                <AiOutlinePlusCircle size={25} onClick={() => { addRelatedList() }} style={{ padding: 10, cursor: 'pointer' }} />
                            </div>

                        </div>
                              <button type='submit' className='done-btn'>Add New Task</button>
                    </form>
                    <div>
                        <img alt="add-task"  src='https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4875.jpg?w=2000'></img>
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default AddTask


