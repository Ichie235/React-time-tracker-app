import React, { Component } from 'react'
import TimerForm from './TimerFormFolder/TimerForm.js';
import Timer from './TimerFolder/Timer.js';

export class EditableTimer extends Component {
  render() {
    if (this.props.editFormOpen) {
        return (
        <TimerForm
        title={this.props.title}
        project={this.props.project}
        />
        );
         }else{
            return(
                <Timer
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
                runningSince={this.props.runningSince}
                />
            )
        }
       
  }
}

export default EditableTimer