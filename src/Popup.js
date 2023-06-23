function Popup({ setIsPop }) {
	const popStyle = {
		width: 600,
		height: 300,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#555',
		fontSize: '30px',
		color: '#fff',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	};

	return (
		<aside style={popStyle}>
			{/* 팝업(자기자신)을 닫아주는 state가 부모 컴포넌트에 있기 때문에 부모 컴포넌트로부터 state 변경함수를 props로 전달받아 호출한다. */}
			<button onClick={() => setIsPop(false)}>close</button>
		</aside>
	);
}

export default Popup;
