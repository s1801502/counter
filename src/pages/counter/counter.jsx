import React from 'react'
import { connect } from 'react-redux'
import { add, subtract, reset, incrementAsync, fetchAsync } from '../../redux/counter/actions'

import { Button } from '@tkerola/button'
import ResultWithSpinner from '../../components/result/result'
import Header from '../../components/header/header'


const Counter = ({ loading, add, subtract, reset, incrementAsync, fetchAsync, removeUser }) => {

    

    return (
        <React.Fragment>
            <Header />
            <div className="content">
                <ResultWithSpinner loading={loading} />
                <Button className="btn" handleClick={add} font="'Cinzel', serif" disabled={loading}>Add One</Button>
                <Button className="btn" handleClick={subtract} font="'Cinzel', serif" disabled={loading}>Subtract One</Button>
                <Button className="btn" handleClick={reset} font="'Cinzel', serif" disabled={loading}>Reset To Zero</Button>
                <Button className="btn" handleClick={() => incrementAsync(1000)} font="'Cinzel', serif" disabled={loading}>Saga Increment</Button>
                <Button className="btn" handleClick={fetchAsync} font="'Cinzel', serif" disabled={loading}>Thunk Fetch</Button>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    loading: state.counter.loading
})

const mapDispatchToProps = dispatch => ({
    add: () => dispatch(add()),
    subtract: () => dispatch(subtract()),
    reset: () => dispatch(reset()),
    incrementAsync: (ms) => dispatch(incrementAsync(ms)),
    fetchAsync: () => dispatch(fetchAsync()),
    
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)