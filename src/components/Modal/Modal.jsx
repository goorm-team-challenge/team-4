import { useEffect, useState } from 'react';
import cn from 'classnames';

import { generateId } from '@/utils/generateId';
import { isEmail, isPhone } from '@/utils/validate';

import {
	Button,
	Modal as ModalComponent,
	Typography,
} from '@goorm-dev/gds-challenge';

import Expectation from './Expectation';
import styles from './Modal.module.scss';
import Option from './Option';
import ServiceExperience from './ServiceExperience';
import UserInformation from './UserInformation';

const validation = {
	1: (values) => {
		if (values.name === '') return false;
		if (values.phone === '' || !isPhone(values.phone)) return false;
		if (values.email === '' || !isEmail(values.email)) return false;
		if (values.agreement.privacy === false) return false;
		return true;
	},
	2: (values) => {
		return true;
	},
	3: (values) => {
		return true;
	},
	4: (values) => {
		if (values.opinion === '') return false;
		return true;
	},
};

const Modal = ({ isOpen, toggle }) => {
	const [currentIdx, setCurrentIdx] = useState(1);

	const [inputs, setInputs] = useState({
		id: generateId(),
		name: '',
		phone: '',
		email: '',
		agreement: {
			privacy: true,
			marketing: true,
			advertisement: {
				email: true,
				sms: true,
			},
		},
		opinion: '',
		option: [false, false, false, false],
	});
	const [nextButton, setNextButton] = useState(false);

	useEffect(() => {
		setNextButton(validation[currentIdx](inputs));
	}, [inputs, currentIdx]);

	const handleNextButton = () => {
		if (currentIdx === 4) {
			// 제출하기 액션
			const prevList = localStorage.getItem('user') ?? [];
			const nextList = [...prevList, inputs];
			localStorage.setItem('user', nextList);
		} else {
			setCurrentIdx(currentIdx + 1);
		}
	};

	const ModalBody = {
		1: <UserInformation inputs={inputs} setInputs={setInputs} />,
		2: <ServiceExperience />,
		3: <Expectation inputs={inputs} setInputs={setInputs} />,
		4: <Option inputs={inputs} setInputs={setInputs} />,
	};

	const handlePrevButton = () => {
		setCurrentIdx(currentIdx - 1);
	};

	return (
		<ModalComponent isOpen={isOpen} toggle={toggle}>
			<ModalComponent.Header toggle={toggle} />
			{ModalBody[currentIdx]}
			<ModalComponent.Footer between>
				<div className={cn(styles.circleContainer)}>
					<Typography color="primary">{currentIdx} / 4</Typography>
					{Array.from({ length: 4 }, (_, idx) => {
						if (idx + 1 === currentIdx) {
							return <div className={cn(styles.circleActive)} />;
						}
						return <div className={cn(styles.circle)} />;
					})}
				</div>
				<div className={cn(styles.buttonContainer)}>
					{currentIdx > 1 && (
						<Button color="link" onClick={handlePrevButton}>
							이전
						</Button>
					)}
					<Button type="primary" onClick={handleNextButton}>
						{currentIdx === 4 ? '제출하기' : '다음'}
					</Button>
				</div>
			</ModalComponent.Footer>
		</ModalComponent>
	);
};

export default Modal;
