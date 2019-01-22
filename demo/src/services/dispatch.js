import {fromJS} from 'immutable'

export default (state, action) => {

    switch (action.type) {

        case 'CREATE_FILTER': {
            const {viewId, filter} = action.payload
            state = state.updateIn(['cache', 'viewsById', viewId, 'filters'], filters => {
                return filters.push(filter.id)
            })
            state = state.setIn(['cache', 'filtersById', filter.id], fromJS(filter))

            return state
        }

        case 'UPDATE_FILTER_FIELD_ID': {

            const {id, fieldId} = action.payload
            const fieldTypeId = state.getIn(['cache', 'fieldsById', fieldId, 'typeId'])
            const fieldType = state.getIn(['cache', 'fieldTypesById', fieldTypeId])
            const operatorId = fieldType.get('operators').first()
            const operator = state.getIn(['cache', 'operatorsById', operatorId])
            const value = operator.get('defaultValue')
            state = state
                .setIn(['cache', 'filtersById', id, 'fieldId'], fieldId)
                .setIn(['cache', 'filtersById', id, 'operatorId'], operatorId)
                .setIn(['cache', 'filtersById', id, 'value'], value)

            return state
        }

        case 'UPDATE_FILTER_OPERATOR_ID': {

            const {id, operatorId} = action.payload
            const operator = state.getIn(['cache', 'operatorsById', operatorId])
            const value = operator.get('defaultValue')
            state = state
                .setIn(['cache', 'filtersById', id, 'operatorId'], operatorId)
                .setIn(['cache', 'filtersById', id, 'value'], value)

            return state
        }

        case 'REMOVE_FILTER': {
            const {viewId, id} = action.payload
            state = state.updateIn(['cache', 'viewsById', viewId, 'filters'], filters => {
                return filters.filter(filterId => {
                    return filterId !== id
                })
            })

            state = state.removeIn(['cache', 'filtersById', id])

            return state
        }

        default: {
            return state
        }
    }
}