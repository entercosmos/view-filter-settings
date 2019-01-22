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