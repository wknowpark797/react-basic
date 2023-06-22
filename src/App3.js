/* 이벤트 연동 스터디 페이지 */

import './scss/style.scss';

function App3() {
	const handleClick = (e, name) => {
		e.target.innerText = name;
	};
	const noArgs = (e) => {
		e.target.innerText = 'noname';
	};

	return (
		<div className='wrap'>
			<button
				onClick={(e) => {
					e.target.innerText = '버튼1';
				}}
			>
				button1
			</button>

			{/* 인수 전달이 필요한 함수 이벤트 연결시 함수 호출부가 먼저 실행 되므로 wrapping 함수로 감싸준다. */}
			<button onClick={(e) => handleClick(e, '버튼2')}>button2</button>

			{/* 인수 전달이 필요없을 경우 함수명만 입력해준다. */}
			<button onClick={noArgs}>button3</button>
		</div>
	);
}

export default App3;
