import React from 'react'
import { connect } from 'react-redux'
import WithSpinner from '../spinner/spinner'
import { HeaderSecondary, HeaderPrimary, Br } from './result.styles'

const Result = ({ counter }) => (

    <>
        <HeaderPrimary>Counter: {counter}</HeaderPrimary>
        <HeaderSecondary>With Redux</HeaderSecondary>
        <Br />
    </>
)

const mapStateToProps = state => ({
    counter: state.counter
})

export default WithSpinner(connect(mapStateToProps)(Result))