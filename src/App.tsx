import React from 'react'
import TaskShow from './components/2_interface'

const App = () => {
  return (
    <div>
      <h1>Typescript</h1>
      <TaskShow title='Hello' completed={true} />
    </div>
  )
}

export default App