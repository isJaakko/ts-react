/** @format */

import React from 'react'
import ReactDOM from 'react-dom'

const Component = () => {
    return <div>Component</div>
}

const App: React.FC = () => {
    return (
        <div>
            hello World
            <Component />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
