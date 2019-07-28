import React from 'react'
import { connect } from 'react-redux'
import WithSpinner from '../spinner/spinner'

const Result = ({ counter }) => (

    <h1>Counter: {counter}</h1>
)

const mapStateToProps = state => ({
    counter: state.counter
})

export default WithSpinner(connect(mapStateToProps)(Result))