function App() {
	return <h1>Hello World</h1>;
}

/*
	function App() {
		return document.createElement('h1').innerText('Hello World');	
	}

	- 해당 코드를 JSX로 표현
	- DOM 요소를 반환하는 컴포넌트
	- 컴포넌트 함수 이름은 대문자로 시작
*/

export default App;

/*
	SSR (Server Side Rendering)
	- 페이지 이동시마다 서버쪽에 출력할 HTML 파일을 요청
		[ 장점 ]
		- 초기 로딩 속도가 빠르다.
		- 검색엔진에 최적화 (SEO)
		[ 단점 ]
		- 페이지 이동시마다 서버 요청이 필요하여 화면 깜빡임이 발생하여 사용성에 좋지 않다.

	------------------------------

	[ SPA (Single Page Application) ]

	=> React

		CSR (Client Side Rendering)
		- 초기에 빈 HTML 파일을 가져오고 화면에 출력될 모든 정보데이터를 Chunk 단위로 구성된 자바스크립트 파일(컴포넌트 파일)을 모두 가져온다.
		[ 장점 ]
		- 같은 페이지 안에서 서로 다른 컨텐츠를 실시간으로 변경하면서 출력하기 때문에 동적인 화면 컨텐츠 변경이 자유롭다.
		- 페이지간의 로딩이 없어 사용성에 좋다. (화면 깜빡임)
		[ 단점 ]
		- 한번에 모든 데이터를 불러와야 하기 때문에 초기 로딩 속도가 SSR에 비해 느리다.
		- 검색엔진에 비 최적화
			-> Next.js에 의해 단점 커버가 가능하다.
*/

/*
	RealDOM - 실제 DOM
	- HTML 태그를 이용하여 구조를 만들면 브라우저가 이를 해석하여 실제 DOM 형태로 객체를 만들고 화면에 렌더링하는 형태

	------------------------------

	=> React

	VirtualDOM - 가상 DOM
	- 실제 브라우저에서 RealDOM으로 변환되기 전 메모리상에서 DOM 구조를 가상으로 만들어 기존의 DOM 구조와 차이점을 분석
	- 기존 DOM과 변경되는 부분을 수정해서 최종적으로 RealDOM으로 출력하는 형태

	JSX
	- React에서 자체적으로 가상 DOM을 편하게 생성해주는 문법체계
	- 실제로는 자바스크립트로 DOM을 만들지만 개발자의 사용성을 위해 HTML 표현 방식을 채택
*/
