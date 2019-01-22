import React from 'react'
import {connect} from 'react-redux'
import icons from '../icons'
import ViewFilterSettings from '../../../src'
import Filter from '../../../src/Filter'
import editors from '../../../src/editors'

const ConnectedFilter = connect((state, props) => {

    const fieldId = state.getIn(['cache', 'filtersById', props.id, 'fieldId'])
    const field = state.getIn(['cache', 'fieldsById', fieldId])
    const operators = field.get('operators').map(id => {
        if (!state.getIn(['cache', 'operatorsById', id])) {
            throw new Error(id)
        }
        return state.getIn(['cache', 'operatorsById', id])
    }).toJS()
    const filter = state.getIn(['cache', 'filtersById', props.id]).toJS()
    return {
        fieldId,
        operators,
        operatorId: state.getIn(['cache', 'filtersById', props.id, 'operatorId']),
        value: filter.value,
    }
})(Filter)

const filterRenderer = props => (
    <ConnectedFilter
        {...props}
    />
)

class Example1 extends React.Component {

    render() {

        return (
            <ViewFilterSettings
                fields={this.props.fields.toJS()}
                valueRenderer={({fieldId, operatorId, value, onChange}) => {

                    const editorId = this.props.operatorsById.getIn([operatorId, 'editorId'])

                    if (!editorId) return null

                    const Editor = editors[editorId]

                    return (
                        <Editor
                            value={value}
                            onChange={onChange}
                        />
                    )
                }}
                filterRenderer={filterRenderer}
                filters={this.props.view.get('filters').toArray()}
                onCreate={() => {
                    this.props.dispatch({
                        type: 'CREATE_FILTER',
                        payload: {
                            viewId: 'viw1',
                            filter: {
                                id: 'flt1',
                                fieldId: 'fld1',
                                operatorId: '=',
                                value: 'String 123'
                            }
                        }
                    })
                }}
                onRemove={() => alert('onRemove')}
                onFieldIdChange={() => alert('onFieldIdChange')}
                onOperatorIdChange={() => alert('onOperatorIdChange')}
                onValueChange={() => alert('onValueChange')}
            />
        )
    }
}

const mapStateToProps = (state, props) => {

    const view = state.getIn(['cache', 'viewsById', props.viewId])

    return {
        view,
        operatorsById: state.getIn(['cache', 'operatorsById']),
        fields: state.get('fields').map(id => {
            const field = state
                .getIn(['cache', 'fieldsById', id])

            return field.set('icon', icons[field.get('typeId')])
        })
    }
}

export default connect(mapStateToProps)(Example1)