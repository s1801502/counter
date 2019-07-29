import React from 'react';
import { connect } from 'react-redux'
import { add, subtract, reset, incrementAsync, fetchAsync } from './redux/actions'
import { Button } from '@tkerola/button'
import ResultWithSpinner from './components/result/result'

import './App.css';

function App({loading, add, subtract, reset, incrementAsync, fetchAsync}) {
  return (
    <div className="App">
    <div className="content">
      <ResultWithSpinner loading={loading} />
      <Button className="btn" handleClick={add} font="'Cinzel', serif">Add One</Button>
      <Button className="btn" handleClick={subtract} font="'Cinzel', serif">Subtract One</Button>
      <Button className="btn" handleClick={reset} font="'Cinzel', serif">Reset To Zero</Button>
      <Button className="btn" handleClick={() => incrementAsync(1000)} font="'Cinzel', serif">Saga Increment</Button>
      <Button className="btn" handleClick={fetchAsync} font="'Cinzel', serif">Thunk Fetch</Button>
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
  incrementAsync: (ms) => dispatch(incrementAsync(ms)),
  fetchAsync: () => dispatch(fetchAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
