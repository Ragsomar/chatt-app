import React from 'react';
import './Contact.css';



const Contact = props => (
  <div className='Contact'>
    <img src={props.avatar} alt='nothing' className='avatar'/>
    <div>
      <h3 className='name'>{props.name}</h3>
      <div className='status'>
        <p className={props.isConnected ? 'status-online' : 'status-offline'}></p>
        <p className='status-text'>{props.isConnected ? 'Online' : 'Offline'}</p>
      </div>
    </div>
  </div>
);

export default Contact;
