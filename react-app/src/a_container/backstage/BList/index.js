import React from 'react';

import PublicStyle from '../backstageApi/index.js';

class BList extends React.Component {
	render() {
		return (
			<PublicStyle.BackStageMainStyled className="backStage-main">
				<h1>blist</h1>	
			</PublicStyle.BackStageMainStyled>
		);
	}
};

export default BList;