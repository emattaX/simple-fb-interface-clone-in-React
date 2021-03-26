import React from 'react'
import './StoryReel.css'
import Story from './Story.js'

function StoryReel() {
	return (
		<div className='storyreel'>
			<Story 
				image=' https://static.zerochan.net/Orianna.full.2666078.jpg'
				profileSrc='https://esportspedia-lol.s3.amazonaws.com/b/b0/OriannaSquare.png' 
				title='Ernexian'
			/>
			<Story 
				image='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_36.jpg'
				profileSrc='https://i.pinimg.com/originals/e8/39/24/e83924556121884d90e66b918c20724b.jpg'
				title='Ernesto Matta'
			/>
			<Story 
				image='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_11.jpg'
				profileSrc='https://www.mobafire.com/images/avatars/twisted-fate-high-noon.png' 
				title='Beatle Korn'
			/>
			<Story 
				image='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_26.jpg'
				profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MOPAcbapVCF6GK0UyttJcYOXN2_p24LVhA&usqp=CAU' 
				title='WeDoDeFi'
			/>
			<Story 
				image='https://img.rankedboost.com/wp-content/plugins/league-of-legends-wild-rift/assets/skins/Crime%20City%20Graves.jpg'
				profileSrc='https://www.mobafire.com/images/avatars/graves-classic.png' 
				title='Ethereum'
			/>
		</div>
	)
}

export default StoryReel