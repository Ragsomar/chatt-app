import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isConnected: props.isConnected,
    }
  }
  render(){
    return (  
      <div className='Contact'>
        <img src={this.props.avatar} alt='nothing' className='avatar'/>
        <div>
          <h3 className='name'>{this.props.name}</h3>
          <div className='status' 
          onClick={event => {
              const newStatus = !this.state.isConnected;
              this.setState({ isConnected: newStatus });
          }}>
            <p className={this.state.isConnected ? 'status-online' : 'status-offline'}></p>
            <p className='status-text'>{this.state.isConnected ? 'Online' : 'Offline'}</p>
          </div>
        </div>
      </div>
    );
  }
}  
export default Contact;
