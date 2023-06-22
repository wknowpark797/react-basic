import './scss/style.scss';

/*
  미션1) scss가 아닌 스타일 객체를 변수로 활용하여 넓이, 높이 300px 배경색을 gray로 박스 스타일링
  미션2) 외부함수를 만들어 해당 박스 클릭시 배경색이 원하는 색상으로 변경되도록 클릭 이벤트 연결
*/

function App4() {
	const boxStyle = {
		width: 300,
		height: 300,
		background: 'gray',
	};
	const changeBg = (e, background) => {
		e.target.style.background = background;
	};

	return (
		<div className='wrap'>
			<div className='box' style={boxStyle} onClick={(e) => changeBg(e, 'blue')}></div>
		</div>
	);
}

export default App4;
