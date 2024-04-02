import React from 'react'

interface TaskShowProps {
  title: string;
  completed: boolean
}

const TaskShow = ({ title, completed }: TaskShowProps) => {
  return (
    <div>
      {title} - {completed ? 'Done' : 'Need to complete'}
    </div>
  )
}

export default TaskShow