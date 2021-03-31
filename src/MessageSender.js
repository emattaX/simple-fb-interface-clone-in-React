import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from "./StateProvider.js"
import db from "./firebase"
import firebase from 'firebase'

function MessageSender() {

	const [{user}, dispatch] = useStateValue()
	const [input, setInput] = useState('')
	const [imageURL, setImageURL] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		db.collection("posts").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image: imageURL,
		})

		setInput('')
		setImageURL('')
	}

	return (
		<div className='messageSender'>

			<div className='messanger__top'>
				<Avatar src={user.photoURL}/>
				<form>
					<input 
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className='messange__input' 
					placeholder={`What is on your mind, ${user.displayName}?` } />
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