import React, { useRef } from 'react';
import { Urgencies } from '../helpers/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenModal, resetfilters, filterListBySearch, filterListByUrgency, filterListByDates } from '../redux/reducers/appReducer';



const TaskFilters = () => {
    const dateStartInputRef = useRef(null);
    const dateEndInputRef = useRef(null);
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.app.filters)

    const onClearFilters = () => {
        if (dateStartInputRef.current) {
            dateStartInputRef.current.value = "";
            dateEndInputRef.current.value = "";
        }
        dispatch(resetfilters())
    }

    const handleFilterListByDates = (value, type) => {
        dispatch(filterListByDates({ value, type }))
    }

    return (
        <div className='task-filters'>
            <div className='task-filter-container'>
                <div className='search'>
                    <label>Search Task</label>
                    <input type='text' onChange={(e) => dispatch(filterListBySearch(e.target.value.toLocaleLowerCase()))} value={filters.search}></input>
                </div>
                <div className='task-filter'>
                    <label >Start Date:</label>
                    <input ref={dateStartInputRef} type="date" onChange={(e) => handleFilterListByDates(e.target.value, "startDate")}></input>
                </div>
                <div className='task-filter'>
                    <label >End Date:</label>
                    <input ref={dateEndInputRef} min={filters.startDate} type="date" onChange={(e) => handleFilterListByDates(e.target.value, "endDate")}></input>
                </div>
                <div className='task-filter'>
                    <label>Urgency</label>
                    <select value={filters.urgency} onChange={(e) => dispatch(filterListByUrgency(e.target.value))} id="urgency">
                        <option value={""}> Select An Option</option>
                        {Object.keys(Urgencies).map((urgency, i) => <option key={i} value={urgency}>{urgency}</option>)}
                    </select>
                </div>
            </div>
            <div className='task-buttons'>
                <button onClick={onClearFilters}>Clear Filters</button>
                <button className='add-task-btn' onClick={() => { dispatch(setOpenModal(true)) }} >Add Task</button>
            </div>
        </div>
    )
}

export default TaskFilters