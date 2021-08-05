import React from 'react'

import {Link} from 'react-router-dom'
import Card from './Card'
import './Home.css'
import image from '../assets/me.jpg'
import altMenu from '../assets/alt-menu.svg'
import userImage1 from '../assets/index.jpg'

export default function Home() {
	return (
		<>
			{/* Header Section*/}

			<div className="header-menu">
				<button className="alt-menu">
					 <object data={altMenu} type={'image/svg+xml'} className="text-secondary-grad-light" aria-label={'svg-menu-icon'}></object>
				</button>
				<img src={image} className="user-image" alt={'me.jpeg'}/>
			</div>


			{/* Main Heading */}
			<div className="main-heading">
				<h2 className="user-name">hi eric</h2>
				<span className="task-status">6 Tasks are pending</span>
			</div>

			{/* Task Card */}
			<Card content={
				<div className="task-card">
					<h4 className="task-card-heading">Mobile App Design</h4>
					<h5 className="task-handlers">Eric and Bob</h5>
					<div className="handler-images-container">
						<span className="relative w-12 h-7 flex">
							<img src={image} alt={'handler-1'} className="absolute left-0 border-2 border-secondary-grad-light rounded-full w-6 h-6" />
							<img src={userImage1} alt={'handler-2'} className="absolute left-4 border-2 border-secondary-grad-light rounded-full w-6 h-6" />
						</span>

						<h4 className="text-sm font-normal text-gray-300">Now</h4>
					</div>
			</div>
			}
			customStyles={'shadow-2xl'}
			/>

		    {/* Monthly Review title */}
		    <div className="monthly-review-container">
		    	<h3 className="text-xl font-semibold text-secondary-grad-light capitalize">monthly review</h3>
		    	<button className="monthly-review-button">
						<Link to="/tasks">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						</Link>
					</button>
		    </div>

			{/* Card Dashboard */}
			<div className="card-dashboard">
				<div className="grid-cols-1" >
					<Card content={
						<div className="card">
							<h2 className="card-heading">22</h2>
							<h4 className="status-text">Done</h4>
						</div>
					} />
				</div>

				<div className="grid-cols-2">
					<Card content={
						<div className="card">
							<h2 className="card-heading">7</h2>
							<h4 className="status-text">in progress</h4>
						</div>
					} />
				</div>

				<div className="grid-cols-1">
					<Card content={
						<div className="card">
							<h2 className="card-heading">10</h2>
							<h4 className="status-text">on going</h4>
						</div>
					} />
				</div>

				<div className="grid-cols-2">
					<Card content={
						<div className="card">
							<h2 className="card-heading">12</h2>
							<h4 className="status-text">pending review</h4>
						</div>
					} />
				</div>
			</div>



			{/* bottom menu bar*/}
			<div className="bottom-menu">

				<button className="icon-button">
				<Link to="/">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
				</Link>

			</button>

				<button className="icon-button text-primary-accent">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
				</svg>
			</button>


				<button className="icon-button">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
				</svg>
			</button>


				<button className="icon-button">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
				</svg>
			</button>
			</div>

      	</>
		);
}
