import React from 'react'

export default function Card({content, customStyles}) {

	return (
		(
			customStyles !== undefined ? <div className={customStyles.concat("h-auto bg-primary-light rounded-2xl")}>
				{content}
		</div> :
		<div className="w-auto h-auto bg-primary-light rounded-2xl">
				{content}
		</div>
		)
	)
}
