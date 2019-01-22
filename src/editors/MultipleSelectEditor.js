import React from 'react'
import MultipleSelect from '../MultipleSelect'

export default class MultipleSelectEditor extends React.Component {

    render() {
        return (
            <MultipleSelect
                value={this.props.value}
                options={[{
                    id: 'opt1',
                    name: 'Option A'
                }, {
                    id: 'opt2',
                    name: 'Option B'
                }, {
                    id: 'opt3',
                    name: 'Option C'
                }]}
            />
        )
    }
}