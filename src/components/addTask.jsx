import React, { Component, createRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.textInput = createRef();
      }

    addTask = () => {
        this.props.addTask({id: uuidv4(), task: this.textInput.current.value, status: false});
        this.textInput.current.value = "";
    }


    render() { 
        return (
            <div>
                <br /><br />
                <h3>Todo App</h3>
                <br />
                <div className='row g-2'>
                    <div className="col-auto">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="task" 
                            placeholder="Your task.."  
                            style={{width: "400px"}} 
                            ref={this.textInput}/>
                    </div>
                    <div className="col-auto">
                        <button 
                            type="submit" 
                            className="btn btn-primary mb-3 me-1" 
                            onClick={this.addTask}>Add</button>
                        {/* <button type="submit" className="btn btn-secondary mb-3">Clear</button> */}
                    </div>
                </div>
                <br />
            </div>
        );
    }

}
 
export default AddTask;