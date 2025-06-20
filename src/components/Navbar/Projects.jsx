import React from 'react'
import Projectcard from './Projectcard'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
          <Projectcard title="Dress-360" source="https://github.com/KirtiSharma0/Dress360-PP" main="This is a fashion recommendation website created using Reactjs and Nodejs and used some component libraries."/>
          <Projectcard title="School Management" source="https://github.com/KirtiSharma0/School-Management" main="This is nodejs assignment containing school management APIs for addition of schools and getting school based on distances."/>
          <Projectcard title="Text-to-Voice" source="https://github.com/KirtiSharma0/Text-to-Speech-Converter" main="A text to speech converter which reads out the text given by user. It has multiple options for changing languages and voices."/>
          <Projectcard title="Mini-Javascript projects" source="" main="This includes various javascript projects like tic-Tac-Toe, Stone paper scissors game and stopwatch."/>
          <Projectcard title="QR-Code Generator" source="https://github.com/KirtiSharma0/QR-Code-generator" main="This is an Qr code generator for any link or website given which is feasible and easy to use and precisely used for registration and bookings.Easy to use for new users"/>
          <Projectcard title="Strong Password recommendation" source="https://github.com/KirtiSharma0/Password-Generator" main="Its a perfect and a secure method to keep your data safe by protecting with strong passwords."/>
      </div>
    </div>
  )
}

export default Projects
