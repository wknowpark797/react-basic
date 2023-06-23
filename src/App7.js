/*
	useState에서 참조형 자료 활용
	- 참조형 자료의 state 변경
*/

// 미션1) ['red', 'green', 'blue'] 라는 배열 정보값을 컴포넌트 내부에 생성하고 해당 배열값의 색상으로 li 요소를 동적으로 생성
// 미션2) 버튼 클릭 시 동적으로 생긴 세번째 li의 글자색을 black으로 변경

import { useState } from 'react';

function App7() {
	const [Colors, setColors] = useState(['red', 'green', 'blue']);

	return (
		<>
			<ul>
				{Colors.map((color, idx) => {
					return (
						<li key={idx} style={{ color: color }}>
							{color}
						</li>
					);
				})}
			</ul>

			<button
				onClick={() => {
					// 기존 Colors의 참조형 자료인 배열값을 Deep Copy
					const newColors = [...Colors];

					// 원본은 유지한채 복사된 배열값을 변경
					newColors[2] = 'black';

					// 변경된 복사된 배열값을 state 변경함수로 처리
					setColors(newColors);
				}}
			>
				세번째 목록의 색상을 black으로 변경
			</button>
		</>
	);
}

export default App7;
