import React from 'react'

import {Link} from 'react-router-dom'
import userImage from '../assets/index.jpg'
import CalendarItem from '../Components/CalendarItem'
import TimeLineItem from './TimeLineItem'

import imageHandler1 from '../assets/index.jpg'
import imageHandler2 from '../assets/me.jpg'

import './Home.css'
import './Task.css'

import {iteniary, data} from '../shared/mockData'


function TimeLinePointer({currentHour}) {
  return (
    <div className="timeline-pointer">
      <h4 className="text-md font-normal text-gray-400 w-16">{currentHour.concat(' AM')}</h4>
      <div className="flex space-x-2 items-center w-full h-auto">
        <span className="w-7 h-6 rounded-full flex bg-secondary-grad-light justify-center items-center shadow-md">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
        </span>

        <div className="w-full h-1 rounded bg-red-500"></div>
      </div>
    </div>
  )
}

export default function Task() {

	return (
  		<>
        {/* Header Menu */}

        <div className="flex justify-between items-center w-full h-auto">
          <button className="back-btn">
            <Link to="/home">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
            </Link>
          </button>

          <img src={userImage} className="user-image" alt={'me.jpeg'}/>
        </div>

        {/* Scrol View Heading */}
        <div className="scroll-view-header">
          <span className="flex justify-between items-center w-16 h-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <h5 className="capitalize text-xs font-normal text-secondary-accent">mar</h5>
          </span>

          <h3 className="capitalize text-lg font-semibold text-secondary-accent">april</h3>

          <span className="flex flex-row-reverse justify-between items-center border-2 w-16 h-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" stroke-width="2" />
            </svg>
            <h5 className="capitalize text-xs font-normal text-secondary-accent">may</h5>
          </span>
        </div>

        {/* Horizontal Scroll */}

        <div className="h-scroll-view">
          {
              data.map(time => (time.active ?
                                <CalendarItem
                                key={time.date}
                                calendarItemStyle={'bg-primary-dark'}
                                childrenStyles={'text-secondary-grad-light'}
                                date={time.date}
                                day={time.day} /> :
                                <CalendarItem
                                key={time.date}
                                calendarItemStyle={''}
                                childrenStyles={''}
                                date={time.date}
                                day={time.day} />
                              )
                              )
          }
        </div>

        {/*Timeline Section*/}

        <h3 className="timeline-heading">ongoing</h3>

        <div className="timeline-scroll-view">

        {
            iteniary.map(_data => (_data.start === '3' ?
                      <>
                        <TimeLineItem
                          startTime={_data.start}
                          endTime={_data.end}
                          task={_data.task}
                          taskHandlers={_data.taskHandlers}
                          imageHandler1={imageHandler1}
                          imageHandler2={imageHandler2}/>

                        <TimeLinePointer currentHour={_data.end} />
                      </> :
                      <TimeLineItem
                        startTime={_data.start}
                        endTime={_data.end}
                        task={_data.task}
                        taskHandlers={_data.taskHandlers}
                        imageHandler1={imageHandler1}
                        imageHandler2={imageHandler2}/>
                    )
                  )
        }


        </div>
  		</>
		);
}
