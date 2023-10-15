import React, 
	{ 
		useState
	} from 'react';

// Reference used: https://codepen.io/DZuz14/pen/XxKLVY?editors=0110
// Basically the same but translated to using functional component with hooks

const Gallery = (props: any) => {

	// State
	const [index, setIndex] = useState(0);
	const [translate, setTranslate] = useState(0);
	
	const slideWidth = () => {
		return document.querySelector('.slide')?.clientWidth ?? 0;
	}

	const goToNextSlide = () => {
		if(index === props.images.length){
			setIndex(0);
		}
		else {
			setIndex(index+1);
			setTranslate(translate + slideWidth());
		}
	}

	const goToPrevSlide = () => {
		if(index === 0) {
			setIndex(props.images.length - 1)
		}
		else {
			setIndex(index-1);
			setTranslate(translate - slideWidth());
		}
	}

	/*
	const goToSlide = (i) => {
		if(i >= 0 && i < props.images.length){
			setIndex(i);
		}
	}
	*/

	return(
		<div className="Gallery">
			<div className="Gallery-wrapper"
				 style={{
					 transform: `translateX(${translate}px)`,
					 transition: 'transform ease-out 0.45s'
				 }}>
				{
					props.images.map((image: any, i: any) => (
						<Slide key={i} image={image} />
					))
				}
			</div>

			<LeftArrow
				goToPrevSlide={goToPrevSlide}
			/>
			<RightArrow
				goToNextSlide={goToNextSlide}
			/>
		</div>
	);
};

const Slide = ({image}: {image: any}) => {
	const styles = {
		backgroundImage: image,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 60%'
	}
	return <div className="slide" style={styles}></div>
}

const LeftArrow = (props: any) => {
	return (
		<div className="backArrow arrow" onClick={props.goToPrevSlide}>
			<i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
		</div>
	);
}

const RightArrow = (props: any) => {
	return (
		<div className="nextArrow arrow" onClick={props.goToNextSlide}>
			<i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
		</div>
	);
}

export default Gallery;