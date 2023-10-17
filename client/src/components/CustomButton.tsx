import { useSnapshot } from 'valtio';
import state from '../store';
import { getContrastingColor } from '../config/helpers';

interface CustomButtonProps {
	title: string;
	type: 'filled' | 'outlined';
	handleClick: () => void;
	customStyles?: string;
}

const CustomButton = ({
	title,
	type,
	handleClick,
	customStyles,
}: CustomButtonProps) => {
	const snap = useSnapshot(state);
	const generateStyle = (type: string) => {
		switch (type) {
			case 'filled':
				return {
					backgroundColor: snap.color,
					color: getContrastingColor(snap.color),
				};
			case 'outlined':
				return {
					color: snap.color,
					borderWidth: '1px',
					borderColor: snap.color,
				};
			default:
				return {
					backgroundColor: '#2563EB',
					color: '#fff',
				};
		}
	};

	return (
		<button
			className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
			style={generateStyle(type)}
			onClick={handleClick}
		>
			{title}
		</button>
	);
};
export default CustomButton;
