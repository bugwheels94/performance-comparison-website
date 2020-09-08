import React, { useEffect, useRef } from 'react';
import Player from 'rrweb-player';
// import { Replayer } from 'rrweb';
import 'rrweb-player/dist/style.css';
// import 'rrweb/dist/rrweb.min.css';
// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
export default ({
	track,
}) => {
	const refContainer = useRef(null);
	useEffect(() => {
		if (track.length < 2) return;
		const p = new Player({
			target: refContainer.current, // customizable root element
			data: {
				events: JSON.parse(`[${track.filter(v => v).join()}]`),
				autoPlay: true,
			},
		});
		return () => p.destroy();
	});
	return (
		<div ref={refContainer} />
	);
};
