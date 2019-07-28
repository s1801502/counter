import React from 'react';
import { connect } from 'react-redux'
import { add, subtract, reset, calculateAsync } from './redux/actions'
import { Button } from '@tkerola/button'
import ResultWithSpinner from './components/result/result'

import './App.css';

function App({loading, add, subtract, reset, calculateAsync}) {
  return (
    <div className="App">
    <div className="content">
      <ResultWithSpinner loading={loading} />
      <Button className="btn" handleClick={add}>Add One</Button>
      <Button className="btn" handleClick={subtract}>Subtract One</Button>
      <Button className="btn" handleClick={reset}>Reset To Zero</Button>
      <Button className="btn" handleClick={calculateAsync}>Async Reset</Button>
      
      </div>
      
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(add()),
  subtract: () => dispatch(subtract()),
  reset: () => dispatch(reset()),
  calculateAsync: () => dispatch(calculateAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
