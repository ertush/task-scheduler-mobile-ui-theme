import React from 'react'
import Card from './Card'
// import image from '../assets/index.jpg'
// import userImage1 from '../assets/index.jpg'
import './TimeLineItem.css'

export default function TimelineItem({startTime, endTime, task, taskHandlers, imageHandler1, imageHandler2}) {
  return (
    <div className="timeline-container">
      {/* timestamp */}
      <div className="timestamps">
          <h4 className="text-md font-normal text-gray-400">{startTime.concat(' AM')}</h4>
          <h4 className="text-md font-normal text-gray-400">{endTime.concat(' AM')}</h4>
      </div>

      {/* Card */}
      <Card content={
				<div className="task-card">
					<h4 className="task-card-heading">{task}</h4>
					<h5 className="task-handlers">{taskHandlers.replace(',', ' and ')}</h5>
					<div className="handler-images-container">
						<span className="relative w-12 h-7 flex">
							<img src={imageHandler1} alt={'handler-1'} className="absolute left-0 border-2 border-secondary-grad-light rounded-full w-6 h-6" />
							<img src={imageHandler2} alt={'handler-2'} className="absolute left-4 border-2 border-secondary-grad-light rounded-full w-6 h-6" />
						</span>

						<h4 className="text-sm font-normal text-gray-300">{`${startTime.concat(' AM')} - ${endTime.concat(' AM')}`}</h4>
					</div>
			</div>
			}
      customStyles={`
          shadow-md
          hover:shadow-xl
          transition-shadow
          w-52
          duration-300
        `}
      />

    </div>
  )
}
