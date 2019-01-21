import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'
import FilterContainer from './FilterContainer'
import Filter from './Filter'
import FloatingActionButton from './FloatingActionButton'
import icons from './icons'

export default class FilterSettings extends React.Component {

    static propTypes = {
        fields: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                icon: PropTypes.func,
                name: PropTypes.string.isRequired
            })
        ),
        operators: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            })
        ),
        filters: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ),
        filterRenderer: PropTypes.func.isRequired,
        valueRenderer: PropTypes.func.isRequired,
        onCreate: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired,
        onFieldIdChange: PropTypes.func.isRequired,
        onOperatorIdChange: PropTypes.func.isRequired,
        onValueChange: PropTypes.func.isRequired
    }

    render() {

        const {
            filterRenderer,
            fields,
            operators,
            valueRenderer,
            onFieldIdChange,
            onOperatorIdChange,
            onValueChange,
            onRemove
        } = this.props

        return (
            <div
                className={css`
                    width: 100%;
                    height: 100%;
                    position: relative;
                    background-color: #fff;
                `}
            >
                <div
                    className={css`
                        width: 100%;
                        height: 100%;
                        overflow-x: hidden;
                        overflow-y: auto;
                        padding-bottom: 120px;
                    `}
                >
                    {this.props.filters && this.props.filters.length ? (
                        <div
                            className={css`
                                padding-top: 8px;
                                padding-left: 16px;
                                padding-right: 16px;
                            `}
                        >
                            {this.props.filters.map((id, index) => filterRenderer({
                                id,
                                index,
                                fields,
                                operators,
                                valueRenderer,
                                onFieldIdChange,
                                onOperatorIdChange,
                                onValueChange,
                                onRemove
                            }))}
                        </div>
                    ) : (
                        <div
                            className={css`
                                    height: 100%;
                                    padding: 16px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    text-align: center;
                                    color: #888;
                                `}
                        >
                            No filters applied to this view
                        </div>
                    )}
                    <FloatingActionButton
                        className={css`
                            position: absolute;
                            bottom: 16px;
                            right: 16px;
                        `}
                        onClick={this.props.onCreate}
                    >
                        {icons.plus({width: 19})}
                    </FloatingActionButton>
                </div>
            </div>
        )
    }

    handleSort = ({oldIndex, newIndex}) => {
        this.props.onSort({oldIndex, newIndex})
    }
}