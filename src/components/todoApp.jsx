import React, { Component } from 'react';
import AddTask from './addTask';
import DisplayTasks from './displayTasks';
import { v4 as uuidv4 } from 'uuid';

class TodoApp extends Component {

    // Recommended way to initialize states
    constructor(props) {
        super(props);
        this.state = {
          testing: "abc",
          tasks: [
            {id: uuidv4(), task: "This is my first task", status: true},
            {id: uuidv4(), task: "This is my second task", status: true},
            {id: uuidv4(), task: "This is my third task", status: false}
          ]
        };

    }

    // state = {
    //     tasks: [
    //         // {id: uuidv4(), task: "This is my first task", status: true},
    //         // {id: uuidv4(), task: "This is my second task", status: true},
    //         // {id: uuidv4(), task: "This is my third task", status: false}
    //     ]
    // };

    addTask = (task) => {
        let alreadyExistedTasks = this.state.tasks;
        this.setState({tasks: [task, ...alreadyExistedTasks]});
    };

    deleteTask = (id) => {
        let filteredTasks = this.state.tasks.filter(data => data.id !== id);
        this.setState({tasks: filteredTasks});
    };

    updateStatus = (id, status) => {
        // const filteredTasks = this.state.tasks.filter(data => data.id !== id);
        // filteredTasks.push({id: id, task: task, status: status});
        // this.setState({tasks: filteredTasks});

        // Try not to update state directly
        /*const objIndex = this.state.tasks.findIndex(data => data.id === id);
        this.state.tasks[objIndex].status = status;
        const filteredTask = this.state.tasks;
        this.setState({tasks: filteredTask});*/

        const tasks = this.state.tasks;
        const objIndex = tasks.findIndex(data => data.id === id);
        tasks[objIndex].status = status;
        this.setState({tasks: tasks});
        this.sortTasks();
    }

    updateTask = (id, task) => {
        const tasks = this.state.tasks;
        const objIndex = tasks.findIndex(data => data.id === id);
        tasks[objIndex].task = task;
        this.setState({tasks: tasks});
    }

    sortTasks = () => {
        const sortedTasks = this.state.tasks.sort((firstIndex, secondIndex) => Number(firstIndex.status) - Number(secondIndex.status));
        this.setState({tasks: sortedTasks});
    }

    componentDidMount() {
        this.sortTasks();
    }
    

    render() {
        return (
            <div>

                {/* <button onClick={() => this.addTask({task: "This is my fourth task"})}>Add Task</button> */}
                {/* <button onClick={() => this.deleteTask(this.state.tasks[1].id)}>Delete Task</button> */}
                {/* <button onClick={() => this.updateStatus(this.state.tasks[1].id, true)}>Update Status</button> */}
                {/* <button onClick={() => this.updateTask(this.state.tasks[1].id, "Updated")}>Update Task</button> */}
                <AddTask addTask={this.addTask} />
                <DisplayTasks tasks={this.state.tasks} deleteTask={this.deleteTask} updateStatus={this.updateStatus} updateTask={this.updateTask}/> 
            </div>
        );
    }

}
 
export default TodoApp;