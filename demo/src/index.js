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

const views = ['attachment', 'autonumber', 'checkbox', 'collaborator', 'createdCollaborator', 'createdTime', 'date', 'linkToAnotherRecord', 'longText', 'multipleCollaborator', 'multipleSelect', 'number', 'singleLineText', 'singleSelect', 'updatedTime']

class Demo extends Component {
    render() {
        return <Provider store={store}>
            <h1>ViewFilterSettings Demo</h1>
            <h2>Desktop</h2>
            {views.map(id => (
                <div
                    key={id}
                >
                    <h3>{id}</h3>
                    <Viewport>
                        <div
                            className={css`
                              width: 600px;
                              height: 400px;
                            `}
                        >
                            <Example1
                                viewId={id}
                            />
                        </div>
                    </Viewport>
                </div>
            ))}
            <h2>Empty list</h2>
            <Viewport>
                <div
                    className={css`
                              width: 600px;
                              height: 400px;
                            `}
                >
                    <Example1
                        viewId={'empty'}
                    />
                </div>
            </Viewport>
        </Provider>
    }
}

render(<Demo/>, document.querySelector('#demo'))
