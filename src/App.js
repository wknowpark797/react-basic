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
