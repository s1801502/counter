import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import { DraggableButton } from './draggable-button'

export const SortableList = SortableContainer(({ buttonProps }) => {

    return (
        <ul style={{ listStyleType: 'none' }}>
            {buttonProps.map((item, index) => <DraggableButton {...buttonProps[index]} key={index} index={index} />)}
        </ul>

    )
})