import React, { Component } from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import EditableTimerList from './EditableTimerFolder/EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerFormFolder/ToggleableTimerForm';

import Container from 'react-bootstrap/Container';

export class TimerDashBoard extends Component {
  render() {
    return (
      <div>
        <Container>
        <Row className='justify-content-md-center'>
          <Col md={12} sm={12}>
            <EditableTimerList />
            </Col>
        </Row>
        <Row>
          <Col md={12} sm={12}>
            < ToggleableTimerForm isOpen={true}/>
            </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default TimerDashBoard