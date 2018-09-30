import React from 'react';
import { connect } from 'react-redux';

import { fetchDataRequest } from './actions';
import "./App.css";

const App = props => (
  <React.Fragment>
    <div className='button' onClick={() => props.fetchDataRequest('meow')} >
      Fetch me a cat please?
    </div>
    <img src={props.catState.url} className='img'/>
  </React.Fragment>
);

const mapStateToProps = ({ catState }) => ({ catState });

export default connect(mapStateToProps, { fetchDataRequest })(App);
