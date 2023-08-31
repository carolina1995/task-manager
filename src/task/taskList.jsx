import React, { useMemo, useState } from 'react';
import { Statuses } from '../helpers/constants';
import { EditableText, ImCheckboxUnchecked, ImCheckboxChecked } from '../helpers/helperComponents'
import TaskFilters from './taskFilters';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { updateTaskDescription, updateTaskChecked, updateTaskStatus, sortFilteredList, updateSetCheckedAll, nextPage, prevPage } from '../redux/reducers/appReducer';
import { useDispatch, useSelector } from 'react-redux';


const TaskList = ({checkIcon, setCheckIcon}) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.app);
    const pagination = state.pagination;
    const [showEditDescription, SetShowEditDescription] = useState({})
    const [sort, setSort] = useState(false)
    
    const totalPages = Math.ceil(state.filteredList.length / pagination.pageSize)
    const startIndex = (pagination.currentPage - 1) * pagination.pageSize;
    const currentPageList = useMemo(() => { return state.filteredList.slice(startIndex, startIndex + pagination.pageSize) }, [state.filteredList, pagination.pageSize, startIndex]);
    

    const handleChecked = (e, i) => {
        dispatch(updateTaskChecked({ index: i, selected: e.target.checked }));
    }

    const handleSetCheckedAll = (e, i) => {
        if (state.taskList.length > 0) {
            setCheckIcon(!checkIcon);
            dispatch(updateSetCheckedAll(!checkIcon));
        }
    }

    const handleEditDescription = (e, i) => {
        if (e.target.value) {
            dispatch(updateTaskDescription({ index: i, description: e.target.value }));
        }
    }

    const setSelectedStatus = (e, i) => {
        dispatch(updateTaskStatus({ index: i, value: e.target.value }));
    }

    const handleSort = () => {
        setSort(!sort)
        dispatch(sortFilteredList(!sort))
    }

    return (
        <div className="task-list" >
            <TaskFilters />
            <table >
                <thead>
                    <tr className='table-headers'>
                        <td>ID</td>
                        <td>Name </td>
                        <td>Date To Finish</td>
                        <td>Description</td>
                        <td>Related To</td>
                        <td>Urgency</td>
                        <td onClick={handleSort}><div >Status {sort ? <AiOutlineDown /> : <AiOutlineUp />}</div></td>
                        <td onClick={() => { handleSetCheckedAll() }}>{checkIcon ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}</td>
                    </tr>
                </thead>
                <tbody>
                    {currentPageList.length > 0 ? currentPageList.map((task, i) => <tr key={i}>
                        <td>{task.id.toString().slice(7)}</td>
                        <td>{task.name}</td>
                        <td>{task.date}</td>
                        <td>
                            <EditableText
                                condition={showEditDescription.show && showEditDescription.task.id === task.id}
                                onBlur={(e) => { handleEditDescription(e, task.id); SetShowEditDescription({ show: false, task: {} }) }}
                                onClickText={() => { SetShowEditDescription({ show: true, task }) }}
                                text={task.description}
                            />
                        </td>
                        <td>{task.related}</td>
                        <td><div style={{ backgroundColor: task.urgency.color }}>{task.urgency.value}</div></td>
                        <td>
                            <select value={task.status.id} className="editable-select" style={{ backgroundColor: task.status.color }} onChange={(e) => { setSelectedStatus(e, task.id) }} >
                                {Object.values(Statuses).map((status) => <option style={{ backgroundColor: status.color }} key={status.id} value={status.id}>{status.value}</option>)}
                            </select>
                        </td>
                        <td><input defaultValue={false} checked={task.selected} onChange={(e) => { handleChecked(e, task.id) }} type='checkbox'></input> </td>
                    </tr>
                    ) :

                        <tr key={0}>
                            <td colSpan="8" className='skeleton'>No Tasks Found</td>
                        </tr>
                    }
                </tbody>
            </table>
            <div>
                {pagination.currentPage > 1 ?
                    <button onClick={() => {
                        dispatch(prevPage())
                    }
                    } >Prev</button>
                    : <button className='disabled-btn'>/</button>}
                <button className='display-btn'>{pagination.currentPage}</button>
                {totalPages > pagination.currentPage ?
                    <button onClick={() => {
                        dispatch(nextPage())
                    }} >Next</button>
                    : <button className='disabled-btn'>\</button>}
            </div>
        </div>
    )
}

export default TaskList


