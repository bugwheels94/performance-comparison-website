import React, { useState } from 'react';
import Pagination from 'react-bootstrap-plus/Pagination';
import FetchComponent from './FetchComponent';

export default ({
	children, tracker, getAll, FilterComponent, getAllArguments = {}, initialSearchOptions={}
}) => {
	const [searchOptions, setSearchOptions] = useState({
		limit: 10,
		offset: 0,
		...initialSearchOptions
	});
	return (
		<>
			<FilterComponent submit={(v) => {
				setSearchOptions({ ...v, ...searchOptions });
				getAll({ params: searchOptions, ...getAllArguments });
			}}
			/>
			<FetchComponent tracker={tracker}>
				{(data) => children(data, searchOptions)}
			</FetchComponent>
			<Pagination className="justify-content-center m-3" size="sm">
				<Pagination.Prev
					disabled={searchOptions.offset <= 0}
					onClick={() => {
						const updatedSearchOptions = { ...searchOptions, offset: searchOptions.offset - 10 };
						setSearchOptions(updatedSearchOptions);
						getAll({ params: updatedSearchOptions, ...getAllArguments });
					}}
				/>
				<Pagination.Item active>{Math.floor(searchOptions.offset / searchOptions.limit) + 1}</Pagination.Item>
				<Pagination.Next
					onClick={() => {
						const updatedSearchOptions = { ...searchOptions, offset: searchOptions.offset + 10 };
						setSearchOptions(updatedSearchOptions);
						getAll({ params: updatedSearchOptions, ...getAllArguments });
					}}
				/>
			</Pagination>
		</>
	);
};
