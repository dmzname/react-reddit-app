import React from 'react';
import './styles/main.sass';
import { Content, Header, Layout } from './components';
import { CardsList } from './components/CardsList';

function App() {
	return (
		<Layout>
			<Header />
			<Content>
				<CardsList />
			</Content>
		</Layout>
	);
}

export default App;
