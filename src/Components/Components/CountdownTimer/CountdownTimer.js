import { useEffect, useState } from "react";
import './CountdownTimer.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const CountdownTimer = ({ targetDate }) => {
    
    const calculateTimeLeft = () => {
        const difference = + new Date(targetDate) - + new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / (1000)) % 60),
            }
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

  return (
      <div className="container">
        <div className="sales-block">
            <div className="row">
                { Object.keys(timeLeft).length === 0 ? 
                    (<div className="col-12 text-danger fw-bold"> Time's up </div>)
                    :
                    (
                       <ul className="countdown" >
                        {Object.entries(timeLeft).map((unit, index) => (
                            <div className="countdown-block col fw-bold" key={index}>
                                <p className="countdown-title text-capitalize">{unit[0]}</p>                          
                                <div className="countdown-timer">
                                    <li className="countdown-timer-count text-uppercase">{(unit[1].toString().padStart('2', "0"))}</li>                         
                                    { unit[0]!=='seconds' && <p className="countdown-timer-dots text-uppercase">{':'}</p>}
                                </div>
                               
                            </div>
                        ))}       
                    </ul>)
                    }
              </div>
        </div> 
      </div>
  )
}

export default CountdownTimer;