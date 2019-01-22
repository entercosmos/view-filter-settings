import React from 'react'
import Select from '../Select'

export default class CollaboratorEditor extends React.Component {

    render() {
        return (
            <Select
                value={this.props.value}
                options={[{
                    id: 'col1',
                    name: 'Luke Skywalker'
                }, {
                    id: 'col2',
                    name: 'Darth Vader'
                }, {
                    id: 'col3',
                    name: 'Leia Organa'
                }]}
                onChange={this.props.onChange}
            />
        )
    }
}