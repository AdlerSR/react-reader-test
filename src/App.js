import React from 'react';
import { ReactReader } from 'react-reader';

import book from './alice.epub';

const ReaderTest = (props) => {
	return (
		<div style={{ position: 'absolute', height: '100%', width: '100%' }}>
			<ReactReader
				url={book}
				title="test"
				location={'epubcfi(/6/2[cover]!/6)'}
				locationChanged={(epubcifi) => console.log(epubcifi)}
			/>
		</div>
	);
};

export default ReaderTest;
