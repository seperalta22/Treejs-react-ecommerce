import { Center, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CameraRig from './CameraRig';
import Backdrop from './Backdrop';
import Shirt from './Shirt';

const CanvasModel = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} /> // soft white light
			<Environment preset='city' /> // city, forest, night, warehouse
			<CameraRig>
				{/* <Backdrop /> */}
				<Center>
					<Shirt />
				</Center>
			</CameraRig>
		</Canvas>
	);
};
export default CanvasModel;
