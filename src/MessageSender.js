import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

function MessageSender() {

	const [input, setInput] = useState('')
	const [imageURL, setImageURL] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		setInput('')
		setImageURL('')
	}

	return (
		<div className='messageSender'>

			<div className='messanger__top'>
				<Avatar />
				<form>
					<input 
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className='messange__input' 
					placeholder='What is on your mind?' />
					<input 
					value={imageURL}
					onChange={(e) => setImageURL(e.target.value)}
					placeholder='image URL (Optional)' />
					<button onClick={handleSubmit} 
					type='submit'>Hidden Submit</button>
				</form>
			</div>

			<div className='messanger__bottom'>
				<div className='messangerSender__option'>
					<VideocamIcon style={{color: 'red'}}/>
					<h3>Live Video</h3>
				</div>
				<div className='messangerSender__option'>
					<PhotoLibraryIcon style={{color: 'green'}}/>
					<h3>Photo/Video</h3>
				</div>
				<div className='messangerSender__option'>
					<InsertEmoticonIcon style={{color: 'orange'}}/>
					<h3>Feeling/Activity</h3>
				</div>	
			</div>
			
		</div>
	)
}

export default MessageSender