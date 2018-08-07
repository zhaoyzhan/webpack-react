import React from 'react';

import PublicStyle from '../backstageApi/index.js';

class BCon extends React.Component {
	render() {
		return (
			<PublicStyle.BackStageMainStyled className="backStage-main">
				<h1>bcon</h1>	
			</PublicStyle.BackStageMainStyled>
		);
	}
};

export default BCon;