import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'

function SidebarRow({ src, Icon, title }) { //destructuring using title instead of props (no need for props.title in p below)
	return (								// capital letter indicates a prop passed as a parameter, like Item
		<div className='sidebarRow'>
		
			{src && <Avatar src={src} />}  
			{Icon && <Icon />}
			<h4>{title}</h4>       
			
		</div>
	)
}

export default SidebarRow