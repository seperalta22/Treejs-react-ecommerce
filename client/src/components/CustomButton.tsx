import { useSnapshot } from 'valtio';
import state from '../store';

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
					color: '#f2f2f2 ',
				};
			case 'outlined':
				return {
					backgroundColor: '#fff',
					color: '#2563EB',
					border: '1px solid #2563EB',
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
