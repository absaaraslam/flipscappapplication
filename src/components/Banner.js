import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from 'axios';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;
  const [debt, setDebt] = useState(null);

  // useEffect(() => {
  //   const fetchDebtNumbers = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://cors-anywhere.herokuapp.com/https://www.usadebtclock.com/api/json',
  //         {
  //           headers: {
  //             'X-Requested-With': 'XMLHttpRequest',
  //           },
  //         }
  //       );
  //       setDebt(response.data.USDebt);
  //     } catch (error) {
  //       console.error('Error fetching debt numbers:', error);
  //     }
  //   };

  //   fetchDebtNumbers();
  // }, []);

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => { clearInterval(ticker) };
  // }, [text])

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta(prevDelta => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex(prevIndex => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === '') {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex(prevIndex => prevIndex + 1);
  //   }
  // }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
     
          <Col xs={12} md={6} xl={7} className="text-center text-md-start" >
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Introduction</span>
                  <h1>{`Hi! this is Flipscape.`}
                    {/* <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span> */}
                  </h1>
                  {/* <div>
                    <h2>United States National Debt</h2>
                    {debt ? (
                      <p>{debt.toLocaleString('en-US')}</p>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div> */}


                  <p>In its humble beginnings, this was a blog about my day to day life, and has now become a news blog about what is going on in America and the world. I hope you can enjoy the rss news feed here, as well as my commentary. I'll try to always add some wit, psychology, and philosophy for life. I find that I learn something new everyday, so why not keep track of it. Everything happens for a reason and I like to think about that reason and the affect to truly consider the nature of whats going on.</p>
                 
                  <button onClick={() => console.log('connect')}>See My Blogs. <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
        
          <Col xs={12} md={8} xl={5}  >
            <TrackVisibility>
              {({ isVisible }) =>
                // <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                //   <img src={headerImg} alt="Header Img" />
                // </div>
              
                  <div className="col-12 justify-content-center">
                    <div className="debt-clock wow zoomIn">
                      <h2>U.S National Debt</h2>
                      <p>Live Debt Clock<br></br></p>
                      {//Debt clock component
                      }
                      <iframe src="https://www.USADebtClock.com/us-debt-clock-widget.php" height="100" width="350" scrolling="no" frameborder="0">
                      </iframe>
                    </div>
                  </div>
               
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
