import React, {type FC} from 'react';
import './layout.scss';

const Layout: FC = () => {
	return (
		<div className="layout">
			<div className="sidebar">
				Sidebar
			</div>
			<div className="content">
				Content
			</div>
		</div>
	);
};

export default Layout;
