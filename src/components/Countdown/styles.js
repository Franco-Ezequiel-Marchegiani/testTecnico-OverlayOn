import styled from 'styled-components';
import img from '../../images/backgroundImage.jpg';
export const ContainerTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Timer = styled.p`
  display: inline;
  font-size: 64px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  /* Add a conditional if the timar only left one minute, turns red */
  ${props => props.timer > 60 ? "color: whiteSmoke" : "color: red" }
`;
export const TimeOut = styled.p`
  text-align: center;
  width: 100%;
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  margin: 0;
`;
export const BackgroundImage = styled.section`
  width: 100%;
  height: 90vh; 
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
export const ContainerButtons = styled.div`
  display: flex;
  padding: 40px auto; 
  justify-content: center;
  align-items: center;
`
export const Buttons = styled.button`
  font-size: 24px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 240px;
  cursor: pointer;
  display: block;
	position: relative;
	margin: 0.5em 0.5em 0.5em 0;
	padding: .8em 2.2em;

	background: #FFFFFF;
	border: none;
	border-radius: .4em;

	text-transform: uppercase;
	font-size: 1.4em;
	font-family: "Work Sans", sans-serif;
	font-weight: 500;
	letter-spacing: 0.04em;

	mix-blend-mode: color-dodge;
	perspective: 500px;
	transform-style: preserve-3d;

	&:before, &:after {
		--z: 0px;
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		content: '';
		width: 100%;
		height: 100%;
		opacity: 0;
		mix-blend-mode: inherit;
		border-radius: inherit;
		transform-style: preserve-3d;
		transform: translate3d(
			calc(var(--z) * 0px), 
			calc(var(--z) * 0px), 
			calc(var(--z) * 0px)
		);
	}
`