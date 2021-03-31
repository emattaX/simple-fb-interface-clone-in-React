// rfce
import React from 'react'
import './Header.css'
import PageviewTwoToneIcon from '@material-ui/icons/PageviewTwoTone'
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone'
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone'
import FiberNewTwoToneIcon from '@material-ui/icons/FiberNewTwoTone'
import { Avatar } from '@material-ui/core'
import { useStateValue } from "./StateProvider.js"

function Header() {

	const [{user}, dispatch] = useStateValue()

	return (
		<div className='header'>

			<div className='header__left'>
				<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png' alt='' />
				<div className='header__input'>
					<PageviewTwoToneIcon fontSize='large'/>
					<input placeholder='Search...' type='text' />
				</div>
			</div>

			<div className='header__center'>
				<div className='header__options header__option--active'>
					<WhatshotTwoToneIcon fontSize='large' />
					<p>Trending</p>
				</div>
				<div className='header__options'>
					<FavoriteTwoToneIcon fontSize='large' />
					<p>Popular</p>
				</div>
				<div className='header__options'>
					<FiberNewTwoToneIcon fontSize='large' />
					<p>Recent</p>
				</div>
			</div>

			<div className='header__right'>
				<div className='header__info'>
					<Avatar src={user.photoURL}/>
					<h4>{user.displayName}</h4>
				</div>
			</div>

		</div>
	)
}

export default Header