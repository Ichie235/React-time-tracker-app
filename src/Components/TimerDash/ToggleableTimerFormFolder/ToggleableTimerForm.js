import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

import TimerForm from '../EditableTimerFolder/EditableTime/TimerFormFolder/TimerForm'

export class ToggleableTimerForm extends Component {
  render() {
   if(this.props.isOpen){
    return(
      <TimerForm />
    )
   }else{
    return(
      <div>
      <h4>Add a plus icon here</h4>
      <Button variant="secondary">Icon</Button>
      </div>

    )
   }
  }
}

export default ToggleableTimerForm