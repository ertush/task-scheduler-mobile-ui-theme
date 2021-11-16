import React from 'react'

export default function Screen ({screenStyles, children}) {

	const nativeStyles = {
		padding: '30px', 
		borderRadius: '50px', 
		width: '320px', 
		height: '640px'
	};

	return (
			<div className={screenStyles} style={nativeStyles}>
				{children}
			</div>
		)
}