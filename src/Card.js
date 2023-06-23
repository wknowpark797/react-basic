function Card({ color = 'gray', width = '200px' }) {
	// props 데이터를 전달받을 때 비구조화할당으로 받을 수 있다.
	// console.log('props: ', props);

	return (
		<article style={{ width: width }}>
			<div className='bg' style={{ backgroundColor: color }}></div>
			<div className='txt'>{color}</div>
		</article>
	);
}

export default Card;
