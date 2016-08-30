import React from 'react';
import AdListEntry from './AdListEntry';

export default class AdList extends React.Component {
	render() {
		return (
			<div>
				{this.props.ads.map(ad => (
					<AdListEntry ad={ad} />
				))}
			</div>
		)
	}
}

// var AdList = props => (
// 	<div>
// 		{props.ads.map(function(ad) {
// 			<AdListEntry ad={ad} />
// 		})}
// 	</div>
// )