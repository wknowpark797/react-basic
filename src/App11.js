// 미션1) 팝업열기 버튼 클릭시 외부 컴포넌트 Popup 컴포넌트 노출
// 미션2) Popup 컴포넌트 안쪽에 닫기 버튼을 만들어 닫기버튼 클릭시 팝업 제거
// 미션3) Popup 컴포넌트 안쪽에 숫자를 출력하고 그 밑에 증가, 감소 버튼을 만들어 버튼 클릭시 숫자의 증가, 감소가 출력되도록 처리

import { useState } from 'react';
import Popup from './Popup';

function App11() {
	// 화면에 변경점을 만들어야 할 때 생성
	const [IsPopup, setIsPopup] = useState(false);

	return (
		<>
			<button
				onClick={() => {
					setIsPopup(true);
				}}
			>
				팝업열기
			</button>

			{IsPopup && <Popup setIsPop={setIsPopup} />}
		</>
	);
}

export default App11;
