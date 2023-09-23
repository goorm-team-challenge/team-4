import { Modal, TextArea, Typography } from '@goorm-dev/gds-challenge';

const Option = ({ inputs, setInputs }) => {
	const onChangeHandler = (e) => {
		setInputs({
			...inputs,
			opinion: e.target.value,
		});
	};

	return (
		<Modal.Body>
			<div>
				<h4 id="title">
					구름톤 챌린지에<br></br>
					전하고 싶은 말을 적어주세요.
				</h4>
				<Typography color="info" token="subtitle-2">
					더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.
				</Typography>
			</div>
			<TextArea
				block
				rows={5}
				onInput={onChangeHandler}
				value={inputs.opinion}
				placeholder=" ex.&#13;&#10;&#13;&#10;다음 번 챌린지에서는 더 어려운 문제가 출제되면 좋겠어요.&#13;&#10;&#13;&#10;오프라인 과제가 다양했으면 좋겠어요."
			/>
		</Modal.Body>
	);
};

export default Option;
