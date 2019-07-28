import { Loader } from './spinner.styles'
import React from 'react'


const WithSpinner = WrappedComponent => {
    
    const Spinner = ({loading}) => {
        if (loading)
            return <Loader />

        return <WrappedComponent />
    }

    return Spinner
}


export default WithSpinner