import React, { useState } from 'react';
import cn from 'classnames';

import { Input, Label, Modal, Typography } from '@goorm-dev/gds-challenge';

import styles from './UserInformation.module.scss';

const UserInformation = ({ inputs, setInputs }) => {
	const handleChangeName = (e) => {
		setInputs({
			...inputs,
			name: e.target.value,
		});
	};

	const handleChangePhone = (e) => {
		setInputs({
			...inputs,
			phone: e.target.value,
		});
	};

	const handleChangeEmail = (e) => {
		setInputs({
			...inputs,
			email: e.target.value,
		});
	};

	const handleChangeAllAgreement = (e) => {
		setInputs({
			...inputs,
			agreement: {
				privacy: e.target.checked,
				marketing: e.target.checked,
				advertisement: {
					email: e.target.checked,
					sms: e.target.checked,
				},
			},
		});
	};

	const handleChangePrivacy = (e) => {
		setInputs({
			...inputs,
			agreement: {
				...inputs.agreement,
				privacy: e.target.checked,
			},
		});
	};

	const handleChangeMarketing = (e) => {
		setInputs({
			...inputs,
			agreement: {
				...inputs.agreement,
				marketing: e.target.checked,
			},
		});
	};

	const handleChangeAdvertisement = (e) => {
		setInputs({
			...inputs,
			agreement: {
				...inputs.agreement,
				advertisement: {
					...inputs.agreement.advertisement,
					email: e.target.checked,
					sms: e.target.checked,
				},
			},
		});
	};

	const handleChangeAdvertisementEmail = (e) => {
		setInputs({
			...inputs,
			agreement: {
				...inputs.agreement,
				advertisement: {
					...inputs.agreement.advertisement,
					email: e.target.checked,
				},
			},
		});
	};

	const handleChangeAdvertisementSms = (e) => {
		setInputs({
			...inputs,
			agreement: {
				...inputs.agreement,
				advertisement: {
					...inputs.agreement.advertisement,
					sms: e.target.checked,
				},
			},
		});
	};

	return (
		<Modal.Body>
			<div>
				<Typography token="h4">참여자 정보를 입력해주세요.</Typography>
				<Typography color="hint">
					오프라인 팀 챌린지 참여자의 정보를 수집하려고 해요.
				</Typography>
			</div>
			<div className={cn(styles.contents)}>
				<Label required>이름</Label>
				<Input
					id="name"
					type="text"
					value={inputs.name}
					block
					placeholder="이름을 입력해주세요"
					onChange={handleChangeName}
				/>
				<Label required>전화번호</Label>
				<Input
					id="phone"
					type="tel"
					value={inputs.phone}
					block
					placeholder="ex. 01012345678"
					onChange={handleChangePhone}
				/>
				<Label htmlFor="email" required>
					이메일
				</Label>
				<Input
					id="email"
					label="email"
					type="email"
					value={inputs.email}
					block
					placeholder="ex. goormee@goorm.io"
					onChange={handleChangeEmail}
				/>
			</div>
			<div className={cn(styles.agreement)}>
				<Input
					type="checkbox"
					label="전체동의"
					onChange={handleChangeAllAgreement}
					checked={
						inputs.agreement.privacy &&
						inputs.agreement.marketing &&
						inputs.agreement.advertisement.email &&
						inputs.agreement.advertisement.sms
					}
				/>
				<hr className={cn(styles.hr)} />
				<Input
					type="checkbox"
					label="(필수) 개인정보처리방침"
					required
					checked={inputs.agreement.privacy}
					onChange={handleChangePrivacy}
				/>
				<Input
					type="checkbox"
					label="(선택) 마케팅 목적의 개인 정보 수집 및 이용"
					checked={inputs.agreement.marketing}
					onChange={handleChangeMarketing}
				/>
				<Input
					type="checkbox"
					label="(선택) 광고성 정보 수신"
					checked={
						inputs.agreement.advertisement.email &&
						inputs.agreement.advertisement.sms
					}
					onChange={handleChangeAdvertisement}
				/>
				<div className={cn(styles.advertisement)}>
					<Input
						type="checkbox"
						label="이메일"
						checked={inputs.agreement.advertisement.email}
						onChange={handleChangeAdvertisementEmail}
					/>
					<Input
						type="checkbox"
						label="SMS"
						checked={inputs.agreement.advertisement.sms}
						onChange={handleChangeAdvertisementSms}
					/>
				</div>
				<Typography color="secondary">
					※ 광고성 정보 수신에 동의하시면 챌린지에 꾸준히 참여하실 수
					있도록 리마인드 알림을 보내드려요.
				</Typography>
			</div>
		</Modal.Body>
	);
};

export default UserInformation;
