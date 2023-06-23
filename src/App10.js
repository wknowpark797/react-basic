/* Fontawesome 연결 */

// DOCS (무료 설치)
// npm i --save @fortawesome/fontawesome-svg-core (설치)
// npm i --save @fortawesome/free-solid-svg-icons (설치)
// npm i --save @fortawesome/free-regular-svg-icons (설치)
// npm i --save @fortawesome/free-brands-svg-icons (설치)
// npm i --save @fortawesome/react-fontawesome@latest (리액트 전용 컴포넌트 설치)

// Add Individual Icons Explicitly
// webFont와 SVG 버전 모두 사용이 가능
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './scss/style.scss';

function App10() {
	return (
		<div>
			<FontAwesomeIcon icon={faHouse} />
			<FontAwesomeIcon icon={faMagnifyingGlass} />
		</div>
	);
}

export default App10;
