import React from 'react'
import { connect } from 'react-redux'
import SortableComponent from '../../components/sortable-component/sortable-component'

import ResultWithSpinner from '../../components/result/result'
import Header from '../../components/header/header'



const Counter = ({ loading, setIsLoggedIn }) => {
    
    return (
        <React.Fragment>
            <Header setIsLoggedIn={setIsLoggedIn}/>
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