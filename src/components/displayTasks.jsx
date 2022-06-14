import React, { Component } from 'react';
import Task from './task';

class DisplayTasks extends Component {

    render() { 
        return (
            <div>
                <h4>Your Tasks</h4>
                {this.props.tasks.map(task => 
                    <Task key={task.id} task={task} deleteTask={this.props.deleteTask} updateStatus={this.props.updateStatus} updateTask={this.props.updateTask}/>
                )}
            </div>
        );
    }

}
 
export default DisplayTasks;