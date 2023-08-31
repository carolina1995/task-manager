import React, { useState, useEffect } from 'react';
import TaskList from './task/taskList'
import AddTask from './task/addTask'
import CompletedTasks from './task/completedTasks';
import moment from 'moment';

import { useSelector, useDispatch } from 'react-redux';
import { setTaskList, setCompletedTaskList, setOpenModal, resetfilters } from './redux/reducers/appReducer';
import { DummyTasks, setTaskListDB } from './helpers/database';



const Home = () => {
    const state = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const [checkIcon, setCheckIcon] = useState(false)
    const selectedTasksCount = state.taskList.filter((task) => task.selected === true).length
    
    useEffect(() => {
        setTaskListDB(state.taskList)
    }, [state.taskList])

    const handleSetOpenModal = (openModal) => {
        console.log('setOpenModal', openModal);
        dispatch(setOpenModal(openModal));
    }

    const handleSetCompletedTaskList = (completedList) => {
        console.log('handleSetCompletedTaskList', completedList);
        dispatch(setCompletedTaskList(completedList));
        dispatch(resetfilters())
    }

    const handleSetTaskList = (taskList) => {
        console.log('taskList', taskList);
        dispatch(setTaskList(taskList));
    }

    const getCompletedTasks = () => {
        let newCompleted = state.taskList.filter(task => task.selected === true).map((task) => (
            { ...task, completedDate: moment().format("YYYY-MM-DD") }
        )) || null;
        handleSetCompletedTaskList([...state.completedList, ...newCompleted]);
        // remove completed tasks from main list 
        let newList = state.taskList.filter(task => task.selected === false)
        handleSetTaskList(newList);
        if(newList.length === 0){
            setCheckIcon(false)
        }
    }

    const RemoveSelectedTasks = () => {
        let newList = state.taskList.filter(task => task.selected === false) || state.taskList;
        handleSetTaskList(newList);
        if(newList.length === 0){
            setCheckIcon(false)
        }
    }

    return (
        <div className='main-container'>
            <div className='task-container'>

                {state.openModal && <AddTask taskList={state.taskList} setOpenModal={handleSetOpenModal} setTaskList={handleSetTaskList} handleSetOpenModal={handleSetOpenModal}></AddTask>}


                <div className='task-lists-container'>
                    <div>
                        <TaskList checkIcon={checkIcon}  setCheckIcon={setCheckIcon}/>
                        {(state.taskList.filter(task => task.selected === true).length) > 0 &&
                            <React.Fragment>
                                <button onClick={() => { getCompletedTasks() }}>Mark As Completed ({selectedTasksCount})</button>
                                <button onClick={() => { RemoveSelectedTasks() }}>Delete Selected Items</button>
                            </React.Fragment>
                        }
                    </div>
                    <div>
                        <CompletedTasks completedList={state.completedList} setCompletedTasks={handleSetCompletedTaskList}></CompletedTasks>
                       <div>
                           <p className='intro'>Welcome to my portfolio,
                            featuring my Task Manager app, built using React Hooks and Redux,
                            showcases my advanced frontend skills by offering a highly interactive,
                            intuitive, and responsive user interface for task organization and management.</p>

                        <div>
                       </div>
                     
                            <button onClick={() => handleSetTaskList(DummyTasks)}>Use Dummy Data</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home


