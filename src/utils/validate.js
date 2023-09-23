// input validation 여부 확인

// 전화번호 형식 확인
export const isPhone = (phone) => {
	const phoneRegex = /^\d{3}\d{3,4}\d{4}$/;
	return phoneRegex.test(phone);
};

// 이메일 형식 확인
export const isEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};
