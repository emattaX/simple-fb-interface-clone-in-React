import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel.js'
import MessageSender from './MessageSender.js'
import Post from './Post.js'

function Feed() {
	return (
		<div className='feed'>

			<StoryReel />
			<MessageSender />

			<Post 
				profilePic='https://esportspedia-lol.s3.amazonaws.com/b/b0/OriannaSquare.png'
				message='Wow, the blade of the ruined king vs. shockwave!'
				timestamp='Today'
				username='Ernexian'
				image='https://ruinedking.com/assets/images/static/hero/hero-bg-m.jpg'
			/>
		</div>	
	)
}

export default Feed