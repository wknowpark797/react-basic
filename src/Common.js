/*
  하나의 파일에서 여러개의 컴포넌트 함수를 export 가능
  - default 키워드 제거
  - export default는 파일을 통째로 내보낼 수 있다.
*/

export function Header() {
	return (
		<header>
			<h1>Header</h1>
		</header>
	);
}

export function Section() {
	return (
		<section>
			<h1>Layout</h1>
		</section>
	);
}

export function Footer() {
	return (
		<footer>
			<h1>Footer</h1>
		</footer>
	);
}
