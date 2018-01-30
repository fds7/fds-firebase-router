import React, {Component} from 'react';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import withAuth from './hocs/withAuth';

class Main extends Component {
  render() {
    const currentUser = firebase.auth().currentUser;
    const {color = 'black'} = this.props;
    return (
      <div style={{color: color}}>{currentUser.uid}</div>
    );
  }
}

export default withAuth(Main);