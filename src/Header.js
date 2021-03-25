// rfce
import React from 'react'
import './Header.css'
import PageviewTwoToneIcon from '@material-ui/icons/PageviewTwoTone'
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone'
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone'
import FiberNewTwoToneIcon from '@material-ui/icons/FiberNewTwoTone'
import { Avatar } from '@material-ui/core'

function Header() {
	return (
		<div className='header'>

			<div className='header__left'>
				<img src='https://ethereum.org/static/c48a5f760c34dfadcf05a208dab137cc/31987/eth-diamond-rainbow.png' alt='' />
				<h2>WeDoDeFi</h2>
				<div className='header__input'>
					<PageviewTwoToneIcon fontSize='large'/>
					<input placeholder='Search DeFi' type='text' />
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
					<Avatar />
					<h4>Ernexian</h4>
				</div>
			</div>

		</div>
	)
}

export default Header