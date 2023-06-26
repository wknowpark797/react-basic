/* useRef 사용 예제 */

// 미션) 좌우버튼 클릭시 45도씩 왼쪽, 오른쪽 회전되도록 모션 처리 (transition 활용)

import './scss/style.scss';
import { useState, useRef } from 'react';

function App12() {
	/*
		[ document.querySelector 사용시 에러 ]
		- App.js 컴포넌트가 호출된 후 article 요소가 동적으로 생성되는 구조이기 때문에 해당 구문에서 에러 발생
		- 리액트 컴포넌트 안쪽에서 document.querySelector문을 사용하지 않는것을 추천
			- 리액트에서 관리되고 있는 가상돔을 제어하는 것이 아닌 제어가 불가능한 리얼돔을 가져오기 때문
	*/
	// const article = document.querySelector('article');

	// 가상돔 요소가 담길 빈 참조객체를 미리 초기화
	const article = useRef(null);
	let [Num, setNum] = useState(0);

	let custom = useRef(0);

	/*
		setNum(Num - 1) 코드의 경우 한박자 늦게 동작
		-> 함수에 wrapping되어 있기 때문
	*/
	// 변경된 state는 다음 렌더링에 적용
	const prev = () => {
		setNum(--Num);
		article.current.style.transform = `rotate(${45 * Num}deg)`;
	};
	const next = () => {
		setNum(++Num);
		article.current.style.transform = `rotate(${45 * Num}deg)`;
	};

	return (
		<div className='wrap2'>
			<button
				onClick={() => {
					console.log(article);
				}}
			>
				참조객체 확인
			</button>
			<button onClick={prev}>왼쪽으로 회전</button>
			<button onClick={next}>오른쪽으로 회전</button>

			<button onClick={() => console.log(++custom.current)}>plus</button>
			<button onClick={() => console.log(--custom.current)}>minus</button>

			{/* 참조하고 있는 가상돔 요소를 useRef로 만든 참조객체와 연결 */}
			<article ref={article}></article>
		</div>
	);
}

/*
	function App12() {
		const [Direction, setDirection] = useState('');

		return (
			<div className='wrap2'>
				<button
					onClick={() => {
						setDirection('left');
					}}
				>
					왼쪽으로 회전
				</button>
				<button
					onClick={() => {
						setDirection('right');
					}}
				>
					오른쪽으로 회전
				</button>
				<article className={Direction}></article>
			</div>
		);
	}
*/

export default App12;

/*
	[ useRef ]
	const 변수 = useRef(초기값);
	- 변수에는 useRef의 초기값을 활용하여 빈 참조객체가 생성된다.
	- 이때 해당 객체안에는 current 키값이 자동생성되면서 초기값이 담긴다.
	- 이렇게 만들어진 빈 참조객체를 원하는 가상돔 요소에 ref속성을 지정하여 참조 가능
	- 참조된 가상요소는 이벤트 발생시 자유롭게 호출이 가능하다.
	- useRef는 보통 이벤트 연결시 제어해야 하는 가상돔을 참조할 때 주로 쓰인다.
	- useRef를 변경하면 화면이 재렌더링되지 않는다.

	[ 사용 순서 ]
	1. 변수에 useRef(null)을 대입해서 일단 빈 참조객체 생성
	2. 원하는 가상돔 요소에 ref={참조객체}로 연결
	3. 참조객체명.current 형식으로 참조된 가상돔 요소를 자유롭게 호출

	[ useRef의 다른 사용예 ]
	- 컴포넌트 안쪽에서 특정 값을 변경하고 싶은데 해당값 변경시 컴포넌트를 재호출 하고 싶지 않을 때
	- 컴포넌트가 다른 state에 의해 재호출 되더라도 특정 값을 초기화시키고 싶지 않을 때
*/
