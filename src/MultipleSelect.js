import React from 'react'
import ClickOutside from 'react-click-outside'
import icons from './icons'
import {css, cx} from 'emotion'
import Switch from './modules/Switch'

const Option = ({id, checked, name, icon, onChange}) => (
    <div
        className={css`
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            padding-right: 8px;
            cursor: pointer;
            align-items: center;
            display: flex;
            &:active {
                opacity: 0.75;
            }
        `}
    >
        <Switch
            id={id}
            className={css`
                margin-right: 8px;
            `}
            width={22}
            value={checked}
            onChange={onChange}
        />
        {name}
    </div>
)

export default class MultipleSelect extends React.Component {

    state = {
        open: false
    }

    render() {

        const options = this.props.options.filter(option => {
            return this.props.value.includes(option.id)
        })

        return (
            <div
                className={cx(
                    css`
                    display: flex;
                    flex: 1 1 auto;
                    min-width: 0;
                    min-height: 0;
                `,
                    this.props.className
                )}
            >
                <div
                    className={cx(
                        css`
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
                        &:hover {
                            background-color: hsla(0,0%,0%,0.05);
                        }
                    `
                    )}
                    onClick={() => this.setState({open: !this.state.open})}
                >
                    <div
                        className={css`
                            display: flex;
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                        `}
                    >
                        <div
                            className={cx(css`
                                display: flex;
                                flex-grow: 1;
                                white-space: nowrap;
                                overflow: hidden;
                            `, this.props.alignRight ? css`justify-content: flex-end` : null
                            )}
                        >
                            {options.map(option => (
                                <span
                                    key={option.id}
                                    className={css`
                                        margin-right: 8px;
                                    `}
                                >
                                    {option.name}
                                </span>
                            ))}
                        </div>
                        <div>
                            {icons.arrowDown({size: 12})}
                        </div>
                    </div>
                    {this.state.open ? (
                        <ClickOutside
                            className={css`
                                background-color: #282D33;
                                padding: 8px;
                                position: absolute;
                                top: 100%;
                                right: 0;
                                z-index: 1;
                                border-radius: 6px;
                                color: #fff;
                                min-width: 220px;
                            `}
                            onClickOutside={this.close}
                        >
                            {this.props.options.map((option) => (
                                <Option
                                    key={option.id}
                                    id={option.id}
                                    checked={this.props.value.includes(option.id)}
                                    onCheckedChange={this.handleOptionCheckedChange}
                                    name={option.name}
                                />
                            ))}
                        </ClickOutside>
                    ) : null}
                </div>
            </div>
        )
    }

    handleOptionCheckedChange = ({id}) => {

        const remove = this.props.value.includes(id)

        let value = [].concat(this.props.value)

        if (remove) {
            value = value.filter(i => i !== id)
        }

        value.push(id)

        this.props.onChange(value)
    }

    close = () => {
        this.setState({
            open: false
        })
    }
}