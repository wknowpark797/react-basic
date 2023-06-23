// src 폴더
import pic1 from './img/pic1.jpg';
import pic2 from './img/pic2.jpg';
import pic3 from './img/pic3.jpg';

import './scss/style.scss';

function App8() {
	// public 폴더까지의 절대경로값
	const path = process.env.PUBLIC_URL;

	return (
		<>
			<div>
				<h1>src 폴더 안쪽에서 이미지 import</h1>
				{/* src 폴더에서 import 하는 방식은 각각의 컴포넌트 파일을 독립적으로 관리할 때 용이하다. */}
				<img src={pic1} alt='pic1' />
				<img src={pic2} alt='pic2' />
				<img src={pic3} alt='pic3' />
			</div>

			<div>
				<h1>public 폴더 안쪽에서 이미지 경로 연결</h1>
				{/* public 폴더의 이미지 경로를 연결하는 방식은 페이지에 연결되는 이미지가 많을 때 용이하다. */}
				<img src={path + '/img/pic1.jpg'} alt='pic1' />
				<img src={path + '/img/pic2.jpg'} alt='pic2' />
				<img src={path + '/img/pic3.jpg'} alt='pic3' />
			</div>
		</>
	);
}

export default App8;

/*
  [ 이미지 불러오기 ]
  번들링 완료 후 이미지 경로가 최적화되어 변경된다.

  1. public 폴더 
    - 정적인 이미지

  2. src 폴더 
    - 동적인 이미지 (웹팩에 의해 데이터 가공이 일어나는 이미지)
*/
