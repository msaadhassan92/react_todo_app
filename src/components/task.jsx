import React, { Component, createRef } from 'react';

class Task extends Component {

    constructor() {
        super();
        this.taskRow = createRef();
        this.taskInputRow = createRef();
        this.updateInputText = createRef();
    }

    switchTaskDiv = () => {
        this.taskRow.current.hidden = true;
        this.taskInputRow.current.hidden = false;
    }

    updateButtonHandle = () => {
        let { id } = this.props.task;
        this.taskInputRow.current.hidden = true;
        this.taskRow.current.hidden = false;
        this.props.updateTask(id, this.updateInputText.current.value);
    }

    componentDidMount() {
        this.taskInputRow.current.hidden = true;
    }


    render() {

        let { id, task, status } = this.props.task;

        let textStyleClasses =  { width:'400px', textAlign: 'left', borderRadius: '5px' };
        textStyleClasses.backgroundColor = (status === true ? '#afffac' : '#dddddd' );
        
        return (
            <div>

                <div className='row g-2' ref={this.taskRow}>
                    <div className="col-auto pt-1" style={textStyleClasses} >
                                <input type="checkbox" className="form-check-input mx-2" id="checkbox"
                                    checked={status}
                                    onChange={() => this.props.updateStatus(id, !status)} />
                                <span style={{padding: "5px", fontWeight: "600"}}>
                                    {status === true ? <del>{task}</del> : task}
                                </span>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-success mx-1" onClick={this.switchTaskDiv}>Edit</button>
                        <button type="submit" className="btn btn-danger" onClick={() => this.props.deleteTask(id)}>Delete</button>
                    </div>
                </div>
                <div className='row g-2' ref={this.taskInputRow}>
                    <div className="col-auto">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="taskUpdate" 
                            defaultValue={task}
                            ref={this.updateInputText}
                            style={{width: "400px"}}
                        />
                    </div>
                    <div className="col-auto">
                         <button 
                             className="btn btn-success mb-3 me-1" 
                             onClick={this.updateButtonHandle}>Update</button>
                    </div>
                </div>
                <br />

            </div>
        );
    }
}
 
export default Task;