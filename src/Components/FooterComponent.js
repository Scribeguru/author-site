import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Footer() {

	const [insta, setInsta] = useState('./instagram1.png');
	const [tiktok, setTiktok] = useState('./tiktok1.png');
	const [youtube, setYoutube] = useState('./youtube1.png');

	function date() {
		let date = new Date();
		return date.getFullYear();
	}

	return (
		<>
			<footer>
				<Row className='py-3 text-center'>
					<Col xs='12' sm='4' className='py-3'>
						<Link target='_blank' to='https://instagram.com/mljpoco' onMouseEnter={() => setInsta('./instagram.png')} onMouseLeave={() => setInsta('./instagram1.png')}><img className='social-icon' src={insta} /></Link>
					</Col>
					<Col xs='12' sm='4' className='py-3'>
						<Link target='_blank' to='https://tiktok.com/@mitchljpoco' onMouseEnter={() => setTiktok('./tiktok.png')} onMouseLeave={() => setTiktok('./tiktok1.png')}><img className='social-icon' src={tiktok} /></Link>
					</Col>
					<Col xs='12' sm='4' className='py-3'>
						<Link target='_blank' to='https://www.youtube.com/@MLJPoco' onMouseEnter={() => setYoutube('./youtube.png')} onMouseLeave={() => setYoutube('./youtube1.png')}><img className='social-icon' src={youtube} /></Link>
					</Col>
				</Row >
				<Row className='pb-1 pt-2 text-center cprt'>
					<Col>
						© {date()} Mitchell L.J. Poco. All rights reserved.
					</Col>
				</Row>
			</footer>
		</>
	);
}