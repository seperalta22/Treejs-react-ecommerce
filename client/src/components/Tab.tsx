interface TabProps {
	key: string;
	tab: {
		name: string;
		icon: string;
	};
	handleClick: () => void;
	isFiltertab?: boolean;
	isActiveTab?: string;
}

const Tab = ({}: TabProps) => {
	return <div>Tab</div>;
};
export default Tab;
