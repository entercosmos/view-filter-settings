import React from 'react'
import Select from '../Select'

export default class SingleSelectEditor extends React.Component {

    render() {
        return (
            <Select
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
                onChange={this.props.onChange}
            />
        )
    }
}