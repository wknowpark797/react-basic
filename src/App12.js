// 미션) 좌우버튼 클릭시 45도씩 왼쪽, 오른쪽 회전되도록 모션 처리 (transition 활용)

import './scss/style.scss';
import { useState, useRef } from 'react';

function App12() {
	// document.querySelector 사용 불가
	// App 컴포넌트가 호출된 후 article 요소가 동적으로 생성되는 구조이기 때문에 해당 구문에서 에러 발생
	// 리액트 컴포넌트 안쪽에서 document.querySelector문을 사용하지 않는것을 추천
	// 리액트에서 관리되고 있는 가상돔을 제어하는 것이 아닌 제어가 불가능한 리얼돔을 가져오기 때문
	// const article = document.querySelector('article');

	// 가상돔 요소가 담길 빈 참조객체를 미리 초기화
	const article = useRef(null);
	let [Num, setNum] = useState(0);

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

			{/* 참조하고 싶은 가상돔 요소를 useRef로 만든 참조객체와 연결 */}
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
