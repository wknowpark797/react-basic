/* 반복문 적용 스터디 페이지 */

import Card from './Card';
import './scss/style.scss';

function App5() {
	const colors = ['green', 'orange', 'hotpink', 'cornflowerblue', 'black'];

	return (
		<div className='wrap'>
			<h1>Color Chart</h1>
			{colors.map((color, idx) => {
				// 부모요소에서 color, idx props로 Card 컴포넌트에 데이터 전달
				// key 값은 반복하는 대상 Card 컴포넌트에 적용
				return <Card color={color} idx={idx} key={idx} />;
			})}
		</div>
	);
}

export default App5;

/*
  [ React의 불변성 (Immutable) ]
  - 원형을 변형시키지 않으면서 원본을 유지한 상태로 복사본을 변경 후 비교하는 형태
  - 리액트에서는 원본 대비 변경된 부분을 비교하여 화면을 렌더링하기 때문에 불변성 유지가 필수
  - 리액트에서는 원본과 복사본이 같이 있어야 한다.
  - 참조형 자료를 변경할 때 무조건 전개연산자로 deep copy 해야한다.
  - 특정 요소를 반복처리할 때 무조건 map 처리 (forEach X)
  - JSX 문법 안쪽에서 map외의 반복문 사용 불가
    - JSX에서 조건문은 삼항연산자와 && 연산자만 사용 가능
  - JSX로 반복되는 요소를 동적으로 만들 때 무조건 key 값으로 고유값을 등록해야 한다.
    - 리액트가 반복되는 요소를 개별적으로 인지하기 위함
*/

/*
  외부 컴포넌트 파일을 import 연결시 특정 데이터값을 전달하기 위해 props를 통해 전달
  - 기본적으로 리액트는 단방향 데이터 바인딩 (부모 -> 자식 데이터 전달)
*/
