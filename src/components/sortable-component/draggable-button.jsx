import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { Button } from '@tkerola/button'

export const DraggableButton = SortableElement(({ children, ...otherProps }) => {

    return (
        <li style={{ listStyleType: 'none', cursor: 'grab' }}>
            <div>
                <span style={{fontSize: '0.5em'}}>&#9769;</span>
                <Button {...otherProps}>
                    {children}
                </Button>
            </div>
        </li>
    )
})