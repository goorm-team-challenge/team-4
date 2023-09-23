export const generateId = () => {
	const prevId = localStorage.getItem('id');
	if (prevId) {
		localStorage.setItem('id', Number(prevId) + 1);
	} else {
		localStorage.setItem('id', 1);
	}
	return localStorage.getItem('id');
};
