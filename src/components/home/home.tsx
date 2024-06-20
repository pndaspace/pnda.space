import React, {type MutableRefObject, type FC} from 'react';
import {elite, useAsciiText} from 'react-ascii-text';

const Home: FC = () => {
	const logo: MutableRefObject<HTMLPreElement | undefined> = useAsciiText({
		font: elite,
		text: 'pnda.space',
	});

	return (
		<pre ref={logo}></pre>
	);
};

export default Home;