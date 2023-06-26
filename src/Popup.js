import { useState } from 'react';

function Popup({ setIsPop }) {
	const popStyle = {
		width: 400,
		height: 250,
		backgroundColor: '#333',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
	};

	const [Number, setNumber] = useState(0);

	return (
		<aside style={popStyle}>
			{/* 팝업(자기자신)을 닫아주는 state가 부모 컴포넌트에 있기 때문에 부모 컴포넌트로부터 state 변경함수를 props로 전달받아 호출 */}
			<button onClick={() => setIsPop(false)}>팝업닫기</button>

			<h1>{Number}</h1>
			<nav>
				<button
					onClick={() => {
						// 후위 증감 연산자의 사용 에러
						// 변경된 값이 다음 렌더링에 사용되어야 하기 때문에 에러 발생
						// 전위 증감 연산자를 사용해야 한다.
						setNumber(Number - 1);
					}}
				>
					감소
				</button>
				<button
					onClick={() => {
						setNumber(Number + 1);
					}}
				>
					증가
				</button>
			</nav>
		</aside>
	);
}

export default Popup;
