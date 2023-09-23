import { useEffect, useState } from 'react';

import { Button, Modal, Typography } from '@goorm-dev/gds-challenge';

import styles from './Expectation.module.scss';

// 선택지 목록
const options = [
	{ id: 0, text: '1. 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행' },
	{ id: 1, text: '2. 모르는 사람들과의 팀워크 경험' },
	{ id: 2, text: '3. 의사소통 능력 향상 경험' },
	{ id: 3, text: '4. 새로운 기술 스택에 대한 학습 경험' },
];

const Expectation = ({ inputs, setInputs }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	const handleOptionClick = (option) => {
		setSelectedOption(option.id);

		setInputs({
			...inputs,
			option: inputs.option.map((op) => {
				if (op.id === option.id) return true;
				return false;
			}),
		});
	};

	return (
		<Modal.Body>
			<div className="content">
				<div className={styles.title}>
					<p className="text-wrapper">
						<Typography token="h4">
							오프라인 팀 챌린지에
							<br />
							가장 기대하는 점은 무엇인가요?
						</Typography>
					</p>
					<p className="div">
						<Typography color="info">
							더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고
							해요.
						</Typography>
					</p>
				</div>
				<div className={styles.buttons}>
					{options.map((option, index) => {
						return (
							<Button
								id={option.id}
								key={option.id}
								color="basic"
								size="lg"
								iconSide="left"
								content="start"
								block
								active={selectedOption === option.id}
								outline={false}
								onClick={() => {
									return handleOptionClick(option);
								}}
							>
								{option.text}
							</Button>
						);
					})}
				</div>
			</div>
		</Modal.Body>
	);
};

export default Expectation;
