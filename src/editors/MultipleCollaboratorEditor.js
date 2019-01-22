import React from 'react'
import MultipleSelect from '../MultipleSelect'

export default class MultipleCollaboratorEditor extends React.Component {

    render() {
        return (
            <MultipleSelect
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