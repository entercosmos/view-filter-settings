import React from 'react'
import {css} from 'emotion'
import DateInput from '../modules/DateInput'

export default class DateEditor extends React.Component {

    render() {
        return (
            <DateInput
                className={css`
                    justify-content: flex-end;
                    display: flex;
                    flex: 1 1 auto;
                    min-width: 0;
                    min-height: 0;
                    align-items: center;
                    cursor: pointer;
                    border-radius: 3px;
                    position: relative;
                    background-color: hsla(0,0%,0%,0.05);
                    border: 2px solid transparent;
                    &:focus {
                        border-color: rgba(0,0,0,0.25);
                    }
                `}
                dateInputClassName={css`
                    border: 2px solid transparent;
                    padding-left: 4px;
                    padding-right: 4px;
                    border-radius: 3px;
                    &:focus {
                        border-color: rgba(0,0,0,0.25);
                    }
                `}
                value={this.props.value.exactDate}
                disabled={false}
                includeTime={false}
                sameTimeZone={false}
                dateFormat={'D/M/YYYY'}
                datePlaceholder={'dd/mm/yyyy'}
                timeFormat={'HH:mm'}
                timePlaceholder={'hh:mm'}
                onChange={({value}) => {

                    this.props.onChange({
                        modeId: this.props.modeId,
                        exactDate: value
                    })
                }}
            />
        )
    }
}