import React from 'react'

import {Link} from 'react-router-dom'
import './Welcome.css'
import welcomeImage from '../assets/welcome-image.svg'

export default function Welcome() {
	return (
		<>
			<object data={welcomeImage} type={'image/svg+xml'} className="welcome-image" aria-label={'svg-welcome-image'}>
		    </object>

		    <div className="heading-wrapper">
		        <h2 className="heading">Manage your daily tasks</h2>

		        <span className="heading-detail">Team and Project management with solution providing App</span>

		        <div className="getting-started-btn">
		          <button className="start-btn">
		            <Link to="/home">get started</Link>
		          </button>
		        </div>
		     </div>
      	</>
		);
}
