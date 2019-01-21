import React from 'react'
import {connect} from 'react-redux'
import icons from '../icons'
import {css} from 'emotion'
import ViewFilterSettings from '../../../src'
import Filter from '../../../src/Filter'

const ConnectedFilter = connect((state, props) => ({
    fieldId: state.getIn(['cache', 'filtersById', props.id, 'fieldId']),
    operatorId: state.getIn(['cache', 'filtersById', props.id, 'operatorId']),
    value: state.getIn(['cache', 'filtersById', props.id, 'value']),
}))(Filter)

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
                operators={this.props.operators.toJS()}
                valueRenderer={({fieldId, operatorId, value, onChange}) => {

                    // assume operatorId is `contains`

                    return (
                        <input
                            type="text"
                            className={css`
                    justify-content: flex-end;
                        display: flex;
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                        align-items: center;
                        padding-left: 4px;
                        padding-right: 4px;
                        cursor: pointer;
                        border-radius: 3px;
                        position: relative;
                        background-color: hsla(0,0%,0%,0.05);
                        border: 2px solid transparent;
                        &:focus {
                            border-color: rgba(0,0,0,0.25);
                        }
                    `}
                            value={value}
                            onChange={e => {
                                onChange(e.target.value)
                            }}
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

const mapStateToProps = (state) => {

    return {
        view: state.getIn(['cache', 'viewsById', 'viw1']),
        operators: state.get('operators').map(id => {
            return state.getIn(['cache', 'operatorsById', id])
        }),
        fields: state.get('fields').map(id => {
            const field = state
                .getIn(['cache', 'fieldsById', id])

            return field.set('icon', icons[field.get('typeId')])
        })
    }
}

export default connect(mapStateToProps)(Example1)