/* 스타일 연동 스터디 페이지 */

// Sass Loader가 함께 들어가 있어 watch 할 필요가 없다.
import './scss/style.scss';

function App2() {
	const fontStyle = {
		color: 'green',
		fontSize: 60,
		fontWeight: 'normal',
	};

	return (
		<>
			<div className='wrap'>
				{/* 정의한 스타일 객체를 변수에 선언 후 가상돔에 연결 */}
				<h1 style={fontStyle}>Title1</h1>

				{/* 가상돔에 직접 객체 리터럴 형식으로 스타일 적용 */}
				<h1 style={{ color: 'orange', fontSize: 30 }}>Title2</h1>
			</div>
		</>
	);
}

export default App2;
