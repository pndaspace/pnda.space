import React, {type FC} from 'react';
import {type Root, createRoot} from 'react-dom/client';

const App: FC = () => (
	<div>test</div>
);

const container = document.getElementById('app');
const root: Root = createRoot(container!);
root.render(<App />);
