import React from 'react';
import Spinner from 'react-bootstrap-plus/Spinner';
import Alert from 'react-bootstrap-plus/Alert';

export default ({ children, tracker, trackingID }) => {
	const realTracker = trackingID ? tracker && tracker[trackingID] : tracker;
	if (realTracker == null) return null;
	return (
		<>
			{realTracker.pending ? <Spinner animation="border" /> :
				realTracker.error ? <Alert variant="danger">{ realTracker.error }</Alert>
					: realTracker.received && realTracker.received.length === 0 ? <div className="small font-italic text-center">No Records Found</div>
						: realTracker.finished && children && children(realTracker)}
		</>
	);
};
