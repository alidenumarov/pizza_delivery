import React from 'react';
import '../App.css';

class Modal extends React.Component {
    onClose = (e) => {
      this.props.onClose && this.props.onClose(e);
    }
	 
    render() {
      if(!this.props.show){
        return null;
      }
      return(
        <div className="modalBackground">
          <div className="modal">
            <div className="modalHeader">
              <button className="modalExit" 
                onClick={(e) => {this.onClose(e)}} >
              X
              </button>
            </div>
            <input type="text" placeholder="Phone Number" className="modalInput"/>
            <input type="text" placeholder="Address" className="modalInput"/>
            <input type="submit" placeholder="" className="modalSubmit"/>
            {this.props.children}
            
          </div>
		    </div>
      );
    }
}

export default Modal;