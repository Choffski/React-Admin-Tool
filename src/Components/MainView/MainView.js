import React, { Component } from 'react';

import Navbar from '../Shared/Navbar';

class Mainview extends Component {

  render() {

    return (
      <div className="mainview">



        <Navbar />

        <div className="contentArea">
          {this.props.children}
        </div>
    </div>
    );
  }
}

export default Mainview;
