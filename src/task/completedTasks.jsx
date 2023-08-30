import React from 'react';

const CompletedTasks = ({ completedList, setCompletedTasks }) => {
  const deleteCompletedTasks = () => setCompletedTasks([]);

  return (
    <div className="completed-tasks">
      <div className='completed-tasks-scroll'>
        <table>
          <thead className='sticky-headers table-headers'>
            <tr>
               <td>Completed Tasks</td>
                <td>Related To</td>
                <td>Completed On</td>
            </tr>
           
          </thead>
          <tbody>
            {completedList.length > 0 ? completedList.map((task, i) => (
              <tr key={i}>
                <td className='completed-task'>
                  <div>{task.name} - {task.date}</div>
                  <div>{task.description}</div>
                </td>
                <td className='completed-task'>{task.related}</td>
                <td className='completed-task'>{task.completedDate}</td>
              </tr>
            )) :
                <tr>
                  <td colSpan="1" className='skeleton'>No Completed Tasks</td>
                </tr>
            }
          </tbody>
        </table>
      </div>
      {completedList.length > 0 && <button onClick={deleteCompletedTasks}>Delete Completed Tasks</button>}
    </div>
  );
}

export default CompletedTasks;