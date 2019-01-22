import React from 'react'
import fileTypes from '../fileTypes'
import Select from '../Select'

export default class FileTypeEditor extends React.Component {

    render() {
        return (
            <Select
                value={this.props.value}
                options={fileTypes}
            />
        )
    }
}