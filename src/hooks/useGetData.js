import { useState, useEffect } from 'react';
const api = 'https://us-central1-luis-rodriguez-resume.cloudfunctions.net/api';

const useGetData = () => {
	const [
		mydata,
		setData
	] = useState([]);

	useEffect(() => {
		fetch(api).then((response) => response.json()).then((data) => setData(data));
	}, []);

	return mydata;
};
export default useGetData;
