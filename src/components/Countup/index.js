import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { Timer, Buttons, BackgroundImage, ContainerTimer, ContainerButtons, TimeOut } from './styles';

const Countup = ({}) => {
  //Set the initial states
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  //Here will be all the logic when the user click start
  useEffect(() =>{
    let interval = null;

    if(timerOn){
      interval = setInterval(()=>{
        //Change this symbol to up or down the cont
        setTime(prevTime => prevTime + 10)
      }, 10)
    }else{
      clearInterval(interval)
    }
    //ComponentDidMount
    return ()=> clearInterval(interval)
  }, [timerOn])
  console.log(timerOn);
  /* Here i'm showing the time in 3 parts, the miliseconds, the seconds and the minutes
  I use slice to hide the rest of the number and show only 2 numbers, and also add a 0 to show in the browser  
  Add the logic to make it functional, and add the Math floor to make it run 
  When the miliseconds have done
   */
  return <BackgroundImage>
            <ContainerTimer>
                <Timer timer={time}>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</Timer>
                <Timer timer={time}>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</Timer>
                <Timer timer={time}>{("0" + ((time / 10) % 100)).slice(-2)}</Timer>
            </ContainerTimer>
            {time >= 60000 ?
              <TimeOut>Time out!</TimeOut>
              : "" }
            {/* Create some conditional to show and hide the buttons */}
            <ContainerButtons>
                {!timerOn && time === 0 ? (
                    <Buttons onClick={() => setTimerOn( true)}>Start</Buttons>
                  ) : ""}
                  
                  {timerOn ? (
                    <Buttons onClick={() => setTimerOn( false)}>Stop</Buttons>
                  ) : ""}

                  {!timerOn && time !== 0 ? (
                    <Buttons onClick={() => setTimerOn( true)}>Resume</Buttons>
                  ) : ""}
                  
                  {!timerOn && time > 0 ? (
                    <Buttons onClick={() => setTime(0)}>Clear</Buttons>
                  ) : ""}
              </ContainerButtons>
          </BackgroundImage>
};

Countup.propTypes = {
  time: PropTypes.arrayOf(PropTypes.number),
};
Countup.defaultProps = {
  time: [],
};

export default Countup;
