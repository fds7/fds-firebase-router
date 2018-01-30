import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import * as firebase from 'firebase';

export default class Login extends Component {
  state = {
    user: null
  }

  handleClick = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    this.setState({
      user: result.user
    });
  }

  render() {
    if (this.state.user) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <button onClick={this.handleClick}>구글로 로그인</button>
      )
    }
  }
}