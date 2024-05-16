import useStore from './store/store'; // Import the useStore function from the appropriate module
function App() {
	const { count, upCount, downCount, resetCount } = useStore((state) => state);

	return (
		<>
			<h1>{count} 번째 입니다.</h1>
			<button onClick={upCount}>증가</button>
			<button onClick={downCount}>감소</button>
			<button onClick={resetCount}>초기화</button>
		</>
	);
}

export default App;
