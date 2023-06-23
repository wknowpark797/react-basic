/* 조건문 적용 스터디 페이지 (팝업 예제) */

import Popup from './Popup';
import { useState } from 'react';
import './scss/style.scss';

function App6() {
	console.log('App Called');

	/*
  일반 변수 사용의 문제점
	컴포넌트 함수 안쪽에서 특정 정보값을 지역변수에 담아놓으면 해당 함수가 호출될 때마다 다시 초기값으로 갱신되는 문제가 발생 (함수가 실행되고 끝나기 때문)
	컴포넌트 함수 안에서 특정 정보값을 이벤트에 의해 바꾸고 그 정보값을 토대로 JSX를 리턴해주는 함수를 다시 호출하여 재렌더링을 해주어야 한다.
	State: 컴포넌트 내부에서 특정 정보값을 담아준다.
	-> 해당 값이 바뀌면 컴포넌트 함수를 강제로 재호출하면서 새로운 화면으로 갱신해준다.
	let isPop = false;
  */

	// useState는 배열값을 리턴 [인수로 전달한 값을 state에 담은 첫번째 값, 해당 state를 변경할 수 있는 전용함수]
	const [IsPop, setIsPop] = useState(false);
	const [TitleColor, setTitleColor] = useState('#333'); // uss 키워드 자동완성

	// 미션) 팝업의 닫기 버튼 클릭시 팝업 제거

	return (
		<>
			<main>
				<h1
					style={{ color: TitleColor }}
					onClick={() => {
						// isPop = true;
						setIsPop(true);
					}}
				>
					메인 컨텐츠
				</h1>

				<button onClick={() => setTitleColor('red')}>제목 글자색을 red로 변경</button>
				<button onClick={() => setTitleColor('green')}>제목 글자색을 green으로 변경</button>
			</main>

			{/* JSX 안쪽에서 조건문은 삼항연산자와 &&연산자로만 처리 가능 */}
			{/* 자식 컴포넌트로 setIsPop state 변경 함수를 props로 전달 */}
			{/* 부모 자식 관계의 useState가 고민된다면 부모 컴포넌트에 만들어 자식 컴포넌트에 전달하는것을 추천 */}
			{IsPop && <Popup setIsPop={setIsPop} />}
		</>
	);
}

export default App6;

/*
  State (상태값)
  - 리액트에서 컴포넌트의 화면 출력(렌더링)을 담당하는 중요 정보값을 담는 그릇
  - 컴포넌트 안에서 State값이 변경되면 해당 컴포넌트 화면이 자동으로 재렌더링된다. (함수 재호출)
  - 바뀐 State값을 유지하면서 함수 재호출
  
  사용법
  1. 리액트로부터 useState라는 state를 생성해주는 전용 기능을 import (hook)
    - hook은 무조건 컴포넌트 함수 내부에서 호출되어야 한다.
  2. useState 함수를 통해 state와 state를 변경해주는 함수를 비구조화할당으로 받는다.
  3. 해당 state값을 무조건 state 전용 변경함수를 통해서만 변경이 가능하다.
*/
