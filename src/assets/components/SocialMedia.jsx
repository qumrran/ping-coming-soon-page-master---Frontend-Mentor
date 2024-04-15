import { CiFacebook } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';

const SocialMedia = () => {
	return (
		<>
			<div className='socialMedia_container flex gap-2 text-custom-blue mt-20 mb-4'>
				<a href='https://www.facebook.com'>
					<CiFacebook className='w-9 h-9 hover:text-blue-700 cursor-pointer transition duration-300 ' />
				</a>
				<a href='https://www.twitter.com'>
					<CiTwitter className='w-9 h-9 hover:text-blue-700 cursor-pointer transition duration-300 ' />
				</a>
				<a href='https://www.instagram.com'>
					<CiInstagram className='w-9 h-9 hover:text-blue-700 cursor-pointer transition duration-300 ' />
				</a>
			</div>
			<span className='text-custom-gray text-xs'>
				{' '}
				&copy; Copyright Ping. All rights reserved.
			</span>
		</>
	);
};

export default SocialMedia;
