import React from 'react'
import { connect } from 'react-redux'
import SortableComponent from '../../components/dragable-button/dragable-button'

import ResultWithSpinner from '../../components/result/result'
import Header from '../../components/header/header'



const Counter = ({ loading }) => {

    
    

    return (
        <React.Fragment>
            <Header />
            <div className="content">
                <ResultWithSpinner loading={loading} />
                <SortableComponent />
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    loading: state.counter.loading
})



export default connect(mapStateToProps)(Counter)