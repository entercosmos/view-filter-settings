import React, {Component} from 'react'
import Example1 from './examples/Example1'
import {Provider} from 'react-redux'
import {css, injectGlobal} from 'emotion'
import {render} from 'react-dom'
import store from './services/store'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    *:focus {
        outline: none;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const stringifyJSON = (args) => {
    try {
        return JSON.stringify(args, null, 2)
    } catch (e) {
        return null
    }
}

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

class Demo extends Component {
    render() {
        return <Provider store={store}>
            <h1>ViewFilterSettings Demo</h1>
            <h2>Desktop</h2>
            <Viewport>
                <div
                    className={css`
              width: 600px;
              height: 400px;
            `}
                >
                    <Example1/>
                </div>
            </Viewport>
            <h2>Mobile</h2>
            <h2>Empty list</h2>
        </Provider>
    }
}

render(<Demo/>, document.querySelector('#demo'))
