import React from 'react'
import ClickOutside from 'react-click-outside'
import icons from './icons'
import {css, cx} from 'emotion'

const Option = ({name, icon}) => (
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
        {icon ? icon({height: 16, style: {marginRight: 8, color: '#6C9AEF'}}) : null}
        {name}
    </div>
)

export default class Select extends React.Component {

    state = {
        open: false
    }

    render() {

        const option = this.props.options.find(option => {
            return option.id === this.props.value
        })

        if (!option) {
            throw new Error(this.props.value)
        }

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
                    `, this.props.alignRight ? css`justify-content: flex-end` : null
                    )}
                    onClick={() => this.setState({open: !this.state.open})}
                >
                    <div>
                        {option.name} {icons.arrowDown({size: 12})}
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
                            {this.props.options.map(({id, name, icon}) => (
                                <Option
                                    key={id}
                                    id={id}
                                    icon={icon}
                                    name={name}
                                />
                            ))}
                        </ClickOutside>
                    ) : null}
                </div>

            </div>
        )
    }

    close = () => {
        this.setState({
            open: false
        })
    }
}