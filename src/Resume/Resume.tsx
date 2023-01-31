import React from 'react'
import './Resume.scss'

const Resume: React.FC = () => {
  return (
    <div className='resume-page'>
      <div className="contact-pane">
        <div className='block'>
          <img src="/images/profile-img.gif" width={70} />
          <h1>Anthony Barrera</h1>
          <p>Web Developer</p>
          <button>
            Contact Me
          </button>
        </div>
        <div className='block'>

        </div>
      </div>
      <div className="resume-pane">
        <section>
          <h1 className='section__heading'>Career Objective</h1>
          <div>
            <p className='resume__description'>Seeking a challenging developer position where I can utilize my skills to design and implement innovative and user-friendly websites and applications. My goal is to contribute to a dynamic and collaborative team and make a positive impact on the user experience.</p>
          </div>
        </section>
        <section>
          <h1 className='section__heading'>Experience</h1>
          <div className='content'> 
              <span className='resume__heading resume__title'>Fullstack / Mobile Developer @ Akoni Design (Owner)</span>
              <span className='resume__timeline'>August 2017 - Now</span> 
            <p className='resume__description'>Personal freelance business with multiple successful client projects completed from start to finish.</p>
            <ul className='resume__tasks'>
              <li>Create and oversee wireframe designs from client request. </li>
              <li>Streamline the deployment of mobile apps to Apple and Google app stores using expo, along with complete setup of app store listings. </li>
              <li>Reduced cost by more than 50% by developing and deploying to cloud platforms. </li>
              <li>Provide a responsive design prototype following the latest UX/UI trends. </li>
              <li>Optimize website content, including meta titles and descriptions, to improve search engine visibility and ranking.</li>
            </ul>
          </div>
          <div className='content'> 
              <span className='resume__heading resume__title'>Technology Support Technician @ School District D300</span> 
              <span className='resume__timeline'>August 2016 - Now</span>
            <p className='resume__description'>Provide efficient and effective technical support to users, ensuring that all computer systems, software, and hardware are functioning properly. This includes troubleshooting and resolving technical issues, providing training and assistance, and performing regular maintenance and updates.</p>
            <ul className='resume__tasks'>
              <li>Perform technical tasks to maintain interactive whiteboards, document cameras, computer workstations, peripheral electronic equipment, printers, telephone equipment, and other district technologies as needed.</li>
              <li>Prioritize issues based on impact to the organization. </li>
              <li>Effectively work on assigned service tickets with detail and accuracy within a 24 hour window. </li>
              <li>Perform initial system image, setup, configuration, updates, and maintenance of all district technologies both hardware and software. </li>
              <li>Provides technical support and guidance to end users.</li>
              <li>Managed 10-12 daily work tickets, prioritizing urgent needs and scheduling projects to resolve tickets within 24 hours.</li>
            </ul>
          </div>
          <div className='content'> 
              <span className='resume__heading resume__title'>Head of Web & Technology @ RNJ2022</span> 
              <span className='resume__timeline'>August 2020 - July 2022</span>
            <p className='resume__description'>Provided volenteer work for a youth rally of about 500-600 attendees. </p>
            <ul className='resume__tasks'>  
              <li>Oversee and contribute to the design, development, maintenance, and delivery a web and mobile app that fulfill the committee objectives for the scheduled event.</li> 
              <li>Communicate with other department heads on progress and any issues interfering with the project.</li>
              <li>Lead and delegate responsibilities to team members to meet deadlines and complete all tasks necessary to meet the committee's goals.</li>
            </ul>
          </div>
        </section>
        <section>
          <h1 className='section__heading'>Education</h1>
          <div className='content'> 
            <span className=' resume__heading resume__title'> Bachelor's of Science in Information Technology </span> 
            <span className='resume__description'>King University</span>
            <span className='resume__timeline'>August 2016 - May 2017</span> 
          </div>
          <div className='content'> 
              <span className='resume__heading resume__title'> Associate of Applied Science Management </span>
              <span className='resume__description'>Elgin Community College</span>
              <span className='resume__timeline'>August 2011 - May 2016</span>
          </div> 
        </section>
        <section>
          <h1 className='section__heading'>Skills</h1>
          <ul className='resume__skills'>
            <li className='resume__skill'>Javascript</li>
            <li className='resume__skill'>REST API</li>
            <li className='resume__skill'>AJAX</li>
            <li className='resume__skill'>Node, Express</li>
            <li className='resume__skill'>AWS, Google Cloud Console</li>
            <li className='resume__skill'>Firebase</li>
            <li className='resume__skill'>SQL, NoSQL</li>
            <li className='resume__skill'>React, React Native</li>
            <li className='resume__skill'>Expo</li>
            <li className='resume__skill'>HTML</li>
            <li className='resume__skill'>CSS</li>
            <li className='resume__skill'>Photoshop</li>
            <li className='resume__skill'>Illustrator</li>
            <li className='resume__skill'>XD</li>
            <li className='resume__skill'>Figma</li>
            <li className='resume__skill'>Prototyping</li>
          </ul>
        </section>
        {/* <section>
          <h1 className='section__heading'>Interests</h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section> */}
      </div>
    </div>
  )
}

export default Resume


