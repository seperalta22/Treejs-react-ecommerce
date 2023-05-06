import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import {
	headContainerAnimation,
	headContentAnimation,
	headTextAnimation,
	slideAnimation,
} from '../config/motion';

const Home = () => {
	const snap = useSnapshot(state);
	return (
		<AnimatePresence>
			{snap.intro && (
				<motion.div className='home' {...slideAnimation('left')}>
					<motion.header {...slideAnimation('down')}>
						<img
							src='./threejs.png'
							alt='threejs'
							className='w-8 h-8 object-contain'
						/>
					</motion.header>
					<motion.div className='home-content' {...headContainerAnimation}>
						<motion.div {...headTextAnimation}>
							<h1 className='head-text'>
								LET'S <br className='xl:block hidden' />
								<span className='text-blue-500'>DO IT.</span>
							</h1>
						</motion.div>
						<motion.div
							{...headContentAnimation}
							className='flex flex-col gap-5'
						>
							<p className='max-w-md font-normal text-gray-600 text-base'>
								Create your unique and exclsive shirt whit our brand-new 3D
								customization tool. <strong>Unleash your imagination</strong>{' '}
								and create your own shirt.
							</p>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
export default Home;
