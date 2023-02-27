import React, { Component } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';


export class TimerForm extends Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create'
    return (
      <div>
          <Card style={{ width: '34rem' }} className='text-center mx-auto mb-3 '>
      <Card.Body>
        <Card.Title>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" defaultValue={this.props.title} />
        </Card.Title>
        <Card.Text>
        <Form.Label>Project</Form.Label>
        <Form.Control type="text" defaultValue={this.props.project} />
        </Card.Text>
        <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">{submitText}</Button>
      <Button variant="secondary">Cancel</Button>
    
    </ButtonGroup>
      </Card.Body>
    </Card>
        
       
      </div>
    )
  }
}

export default TimerForm