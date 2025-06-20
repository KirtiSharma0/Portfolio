import React from 'react'
import Projectcard from './Projectcard'

const Projects = () => {
  return (
    <div id="Projects" classname="p-10 md:p-24 text-white">
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
          <Projectcard title="Dress-360" main="This is a fashion recommendation website created using Reactjs and Nodejs and used some component libraries."/>
          <Projectcard title="School Management" main="This is nodejs assignment containing school management APIs for addition of schools and getting school based on distances."/>
          <Projectcard title="Text-to-Voice" main="A text to speech converter which reads out the text given by user. It has multiple options for changing languages and voices."/>
          <Projectcard title="Mini-Javascript projects" main="This includes various javascript projects like qr code generator, strong password recommendation and stopwatch."/>
      </div>
    </div>
  )
}

export default Projects
