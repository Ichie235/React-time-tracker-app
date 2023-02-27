import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class Timer extends Component {
  render() {
    return (
      <div>
            <Card style={{ width: '34rem' }} className='text-center mx-auto mt-4 mb-3'>
      <Card.Body>
        <Card.Title>
        <h4>{this.props.title}</h4>
        </Card.Title>
        <Card.Text>
        <p>{this.props.project}</p>
        <div className=''>
           <h2>
         {/* {elapsedString} */}
          </h2>
          </div>
          <div className=''>
            <span className=''>
            <i className='edit icon' />
         </span>
           <span className=''>
         <i className='trash icon' />
         </span>
        </div>


        </Card.Text>
        
      
      <Button variant="secondary">Start</Button>
    
    
      </Card.Body>
    </Card>
      </div>
    )
  }
}

export default Timer