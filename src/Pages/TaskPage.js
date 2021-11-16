import React from 'react'

import Screen from '../Components/Screen'
import Task from '../Components/Task'

export default function TaskPage() {

const taskScreenStyles = `
  bg-gradient-to-tl
  from-secondary-light
  via-secondary-light
  to-secondary-grad-light
  rounded-50px
  flex
  flex-col
  space-y-5
  justify-start
  items-stretch`;


  return <Screen screenStyles={taskScreenStyles} children={<Task />} />

}
