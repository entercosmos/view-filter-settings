import React from 'react'
import {css} from 'emotion'

export default class TextEditor extends React.Component {

    render() {
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
                value={this.props.value}
                onChange={e => {
                    this.props.onChange(e.target.value)
                }}
            />
        )
    }
}