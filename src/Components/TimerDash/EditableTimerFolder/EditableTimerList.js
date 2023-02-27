import React, { Component } from 'react'

import EditableTimer from './EditableTime/EditableTimer'

export class EditableTimerList extends Component {
  render() {
    return (
      <div>
        <EditableTimer
           title='Learn React'
           project='Web Domination'
           elapsed='8986300'
           runningSince={null}
           editFormOpen={false}
        />
          <EditableTimer
           title='Learn React'
           project='Web Domination'
           elapsed='8986300'
           runningSince={null}
           editFormOpen={true}
        />
      </div>
    )
  }
}

export default EditableTimerList