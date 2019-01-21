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

        default: {
            return state
        }
    }
}