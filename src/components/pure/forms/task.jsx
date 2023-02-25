import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.model';


const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>
                Nombre: { task.name };
            </h2>
            <h3>
                Description: { task.description };
            </h3>
            <h4>
                Completo: { task.completed ? 'COMPLETED' : 'PENDING'};
            </h4>
            <h5>
                Nivel: { task.level };
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
