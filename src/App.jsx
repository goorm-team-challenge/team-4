import { useState } from 'react';

import { EmptyView, Header } from '@/components';
import Modal from '@/components/Modal/Modal';

import styles from './App.module.scss';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.App}>
			<Header toggle={toggle} />
			<main className={styles.main}>
				<EmptyView />
			</main>
			<Modal isOpen={isOpen} toggle={toggle} />
		</div>
	);
}

export default App;
