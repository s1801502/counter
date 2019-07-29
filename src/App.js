import React from 'react';
import { connect } from 'react-redux'
import { add, subtract, reset, incrementAsync } from './redux/actions'
import { Button } from '@tkerola/button'
import ResultWithSpinner from './components/result/result'

import './App.css';

function App({loading, add, subtract, reset, incrementAsync}) {
  return (
    <div className="App">
    <div className="content">
      <ResultWithSpinner loading={loading} />
      <Button className="btn" handleClick={add} font="'Cinzel', serif">Add One</Button>
      <Button className="btn" handleClick={subtract} font="'Cinzel', serif">Subtract One</Button>
      <Button className="btn" handleClick={reset} font="'Cinzel', serif">Reset To Zero</Button>
      <Button className="btn" handleClick={() => incrementAsync(2000)} font="'Cinzel', serif">Async Increment</Button>
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
  incrementAsync: (ms) => dispatch(incrementAsync(ms))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
