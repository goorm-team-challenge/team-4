import { useEffect, useState } from 'react';

import {
	Button,
	CarouselIndicators,
	Form,
	Label,
	Modal as ModlaComponent,
} from '@goorm-dev/gds-challenge';

import styles from './ServiceExperience.module.scss';

const ServiceExperience = ({ isOpen, handleToggle }) => {
	const [isSelected, setIsSelected] = useState(false);
	const [isValue, setIsValue] = useState('');

	const onClickButton = (e) => {
		e.preventDefault();
		setIsSelected(!isSelected);
		setIsValue(e.target.value);
	};

	return (
		<ModlaComponent.Body>
			<Form>
				<div className={styles.title}>
					<h4>구름 서비스 이용 경험을 알려주세요.</h4>
					<p className={styles.subTitle}>
						더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.
					</p>
				</div>

				<Form.Group gap="lg" className={styles.firstQuestion}>
					<div className={styles.form}>
						<div>1. SW 관련 학과를 전공하셨나요?</div>
						<Label required />
					</div>
					<div className={styles.button}>
						<Button
							id="firstButton"
							onClick={(e) => {
								return onClickButton(e);
							}}
							icon={null}
							acitve
							color="link"
							content="center"
							block
							size="lg"
							iconSide="left"
							value="전공"
						>
							전공
						</Button>
						<Button
							id="secondButton"
							onClick={(e) => {
								return onClickButton(e);
							}}
							icon={null}
							color="link"
							content="center"
							block
							size="lg"
							iconSide="left"
							value="비전공"
						>
							비전공
						</Button>
					</div>
				</Form.Group>

				<Form.Group gap="lg" className={styles.firstQuestion}>
					<div className={styles.form}>
						<div>2. 구름 서비스를 사용해보신 적이 있나요?</div>
						<Label required />
					</div>
					<div className={styles.button}>
						<Button
							id="firstButton"
							onClick={(e) => {
								return onClickButton(e);
							}}
							icon={null}
							color="link"
							content="center"
							block
							size="lg"
							iconSide="left"
							value="예"
						>
							예
						</Button>
						<Button
							id="secondButton"
							onClick={(e) => {
								return onClickButton(e);
							}}
							icon={null}
							color="link"
							content="center"
							block
							size="lg"
							iconSide="left"
							value="아니오"
						>
							아니오
						</Button>
					</div>
				</Form.Group>
			</Form>
		</ModlaComponent.Body>
	);
};

export default ServiceExperience;
