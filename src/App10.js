/*
	리액트에서 Fontawesome 연결하기

	- https://fontawesome.com/ > DOCS 메뉴
	- 설치 항목
		npm i --save @fortawesome/fontawesome-svg-core
		npm i --save @fortawesome/free-solid-svg-icons
		npm i --save @fortawesome/free-regular-svg-icons
		npm i --save @fortawesome/free-brands-svg-icons
		npm i --save @fortawesome/react-fontawesome@latest (리액트 전용 컴포넌트)

	- webFont와 SVG 버전 모두 사용이 가능
	- Add Individual Icons Explicitly
	- 아이콘 선택 후 React > Individual Import
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './scss/style.scss';

function App10() {
	return (
		<>
			<FontAwesomeIcon icon={faHouse} />
			<FontAwesomeIcon icon={faMagnifyingGlass} />
		</>
	);
}

export default App10;
