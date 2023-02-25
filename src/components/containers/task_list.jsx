import React from 'react';
import { LEVELS } from '../models/levels.enum';
import { Task } from '../models/task.model';
import TaskComponent from '../pure/forms/task';
 

const TaskListComponent = () => {
    
    const defaultTask = new Task('Jhon', 'Default description', false, LEVELS.NORMAL)
    
    return (
        <div>
            <h2>Your Task is:</h2>
            <TaskComponent task={defaultTask}/>
        </div>
    );
};

export default TaskListComponent;
