import React from 'react'
import {css} from 'emotion'
import icons from './icons'
import Select from './Select'

export default class Filter extends React.Component {

    render() {

        const {valueRenderer} = this.props

        return (
            <div
                className={css`
                    display: flex;
                    height: 30px;
                    position: relative;
                    user-select: none;
                    font-size: 14px;
                    margin-bottom: 8px;
                `}
            >

                <div
                    className={css`
                        width: 40%;
                        flex: none;
                        display: flex;
                    `}
                >
                    <div
                        className={css`
                        display: flex;
                        align-items: center;
                        flex: none;
                    `}
                    >
                        <div
                            className={css`
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            &:hover {
                                background-color: #eee;
                            }
                            &:active {
                                background-color: #ccc;
                            }
                        `}
                            onClick={e => {
                                e.stopPropagation()
                                this.props.onRemove({id: this.props.id})
                            }}
                        >
                            {icons.close({width: 10})}
                        </div>
                    </div>
                    <div
                        className={css`
                            display: flex;
                            flex: none;
                        `}
                    >
                        <div
                            className={css`
                                padding-left: 4px;
                                padding-right: 4px;
                                display: flex;
                                align-items: center;
                                flex: 1 1 auto;
                                min-width: 0;
                                min-height: 0;
                            `}
                        >
                            {this.props.index === 0 ? 'Where' : 'And'}
                        </div>
                    </div>
                    <div
                        className={css`
                            display: flex;
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                        `}
                    >
                        <Select
                            alignRight={true}
                            value={this.props.fieldId}
                            options={this.props.fields}
                        />
                    </div>
                </div>
                <div
                    className={css`
                        width: 60%;
                        display: flex;
                        flex: none;
                    `}
                >
                    <div
                        className={css`
                            display: flex;
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                        `}
                    >
                        <Select
                            className={css`
                                flex: none;
                                margin-right: 4px;
                            `}
                            optionNameGetter={option => {
                                return option.name + (option.editorId ? '...' : '')
                            }}
                            value={this.props.operatorId}
                            options={this.props.operators}
                        />
                        <div
                            className={css`
                            display: flex;
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                        `}
                        >
                            {valueRenderer({
                                fieldId: this.props.fieldId,
                                operatorId: this.props.operatorId,
                                value: this.props.value
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}