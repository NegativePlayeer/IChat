import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';

function App() {
	return (
		<div className='flex h-screen'>
			<Sidebar />
			<Chat />
		</div>
	);
}

export default App;
