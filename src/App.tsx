import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background: #fff;
  }
`;

// Hero Section
const HeroSection = styled.section`
  position: relative;
  background-image: url('/assets/images/Banner Page/MainPage.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

const HeroTitle = styled.h1`
  color: #ffffff;
  font-size: 6rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  margin: 0;
  line-height: 1.4;

  .line1 { margin-bottom: 0.5em; }
  .line2 { margin-top: 0; }

  @media (max-width: 1800px) { font-size: 5.2rem; }
  @media (max-width: 1500px) { font-size: 4.4rem; }
  @media (max-width: 950px) { font-size: 3.8rem; }
  @media (max-width: 768px) { font-size: 2.6rem; padding: 0 10px; }
`;

const MainWrap = styled.main`
  background-color: #ffffff;
  margin: 0;
  padding: 0;
`;

// Ce este ESU Section
const CeESU = styled.section`
  max-width: 70%;
  margin: 60px auto;
  text-align: justify;
  font-family: 'Poppins', sans-serif;
  padding: 0 20px;
`;

const CeESUTitle = styled.h2`
  color: #fac82d;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3vh;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.2);

  @media (max-width: 767px) { font-size: 1.6rem; }
  @media (min-width: 768px) and (max-width: 950px) { font-size: 1.8rem; }
  @media (min-width: 951px) and (max-width: 1500px) { font-size: 2.1rem; }
`;

const CeESUDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #073B7F;
  margin-bottom: 20px;

  @media (max-width: 767px) { font-size: 0.9rem; }
  @media (min-width: 768px) and (max-width: 950px) { font-size: 1rem; }
`;

// Counters Section
const CountersSection = styled.section`
  background: #073B7F;
  color: white;
  padding: 50px 20px;
  margin-bottom: 1.5%;
`;

const CountersContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CounterItem = styled.div`
  flex: 1;
  min-width: 200px;
`;

const CounterNumber = styled.span`
  font-size: 2.7rem;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 1800px) { font-size: 2.4rem; }
  @media (max-width: 1500px) { font-size: 2.2rem; }
  @media (max-width: 950px) { font-size: 1.8rem; }
  @media (max-width: 768px) { font-size: 1.6rem; }
`;

const CounterLabel = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 600;
  color: #fac82d;
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;

  @media (max-width: 1800px) { font-size: 1.7rem; }
  @media (max-width: 1500px) { font-size: 1.4rem; }
  @media (max-width: 950px) { font-size: 1.2rem; }
  @media (max-width: 768px) { font-size: 0.9rem; }
`;

// Video Section
const VideoSection = styled.section`
  background-color: #073B7F;
  padding: 3vh 0;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 4vh;
  height: 0;
  overflow: hidden;
  margin: 0 auto 8vh auto;
  max-width: 80vw;
  border-radius: 15px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const VideoTitle = styled.h2`
  color: #fac82d;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3vh;
  padding-top: 3vh;

  @media (max-width: 767px) { font-size: 1.6rem; }
`;

// Slideshow Section
const SlideshowSection = styled.section`
  padding: 20px 0 60px 0;
`;

const SlideshowContainer = styled.div`
  position: relative;
  max-width: 70vw;
  margin: 5vh auto 8vh auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`;

const Slide = styled.div<{ $active: boolean; $direction: 'left' | 'right' | 'center' }>`
  width: 100%;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  display: ${({ $active }) => ($active ? "block" : "none")};

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

const SlideArrow = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 28px;
  font-weight: bold;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  user-select: none;
  z-index: 3;
  text-align: center;
  transition: color 0.4s ease-in-out, background 0.4s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #073E7F;
    color: #fac82d;
  }

  @media (max-width: 1800px) { width: 52px; height: 52px; line-height: 52px; font-size: 24px; }
  @media (max-width: 1500px) { width: 45px; height: 45px; line-height: 45px; font-size: 20px; }
  @media (max-width: 950px) { width: 38px; height: 38px; line-height: 38px; font-size: 18px; }
  @media (max-width: 768px) { width: 32px; height: 32px; line-height: 32px; font-size: 16px; }
`;

const PrevArrow = styled(SlideArrow)`
  left: 20px;
`;

const NextArrow = styled(SlideArrow)`
  right: 20px;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 4;
`;

const Dot = styled.span<{ $active: boolean }>`
  display: inline-block;
  width: 30px;
  height: 4px;
  margin: 5px 4px;
  background-color: ${({ $active }) => ($active ? "#FAC82D" : "rgba(255, 255, 255, 0.5)")};
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.4s ease;
`;

// Slideshow images
const slideshowImages = [
  "/assets/images/Main Page/1.jpg",
  "/assets/images/Main Page/2.jpg",
  "/assets/images/Main Page/3.jpg",
  "/assets/images/Main Page/4.jpg",
  "/assets/images/Main Page/5.jpg",
  "/assets/images/Main Page/6.jpg",
  "/assets/images/Main Page/7.JPG",
  "/assets/images/Main Page/8.jpg",
];

// Counter Hook
const useCounter = (end: number, duration: number, start: number = 0) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const range = end - start;
    const step = Math.abs(Math.floor(duration / range));
    const increment = end > start ? 1 : -1;

    const timer = setInterval(() => {
      countRef.current += increment;
      setCount(countRef.current);
      if (countRef.current === end) {
        clearInterval(timer);
      }
    }, step);

    return () => clearInterval(timer);
  }, [end, duration, start]);

  return count;
};

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const participantsCount = useCounter(2200, 4000, 1700);
  const volunteersCount = useCounter(700, 4000, 200);
  const daysCount = useCounter(14, 8000, 0);

  const plusSlides = (n: number) => {
    let newIndex = slideIndex + n;
    if (newIndex >= slideshowImages.length) newIndex = 0;
    if (newIndex < 0) newIndex = slideshowImages.length - 1;
    setSlideIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainWrap>
        <HeroSection>
          <HeroTitle>
            <span className="line1">ENGINEERING SUMMER</span><br />
            <span className="line2">UNIVERSITY</span>
          </HeroTitle>
        </HeroSection>

        <CeESU>
          <CeESUTitle>Ce este Engineering Summer University?</CeESUTitle>
          <CeESUDescription>
            Engineering Summer University este o tabără de vară de două săptămâni, destinată elevilor de clasa a XI-a pasionați de domeniile STEM, curioși să exploreze aceste domenii captivante și să trăiască experiența de student într-un mediu dinamic, ieșind din zona de confort.
            <br /><br />
            Participanții vor avea parte de un program interactiv și antrenant, ce îmbină teoria cu practica. Pe lângă cursuri susținute de profesori renumiți de la Universitatea Tehnică din Cluj-Napoca, elevii vor lua parte la activități de laborator, punând în aplicare cunoștințele acumulate într-un mod practic și inovator.
            <br /><br />
            Dincolo de partea academică, tabăra include și numeroase activități recreative menite să ajute participanții să-și dezvolte abilitățile de comunicare și să se integreze într-o comunitate activă și energică. Cazarea în căminele studențești din Observator le va oferi ocazia de a experimenta viața de campus într-un mod autentic.
            <br /><br />
            Dacă încă nu ți-ai făcut planuri pentru perioada 19 iulie - 2 august, alătură-te nouă pentru două săptămâni pline de experiențe de neuitat, alături de tineri entuziaști din întreaga țară!
          </CeESUDescription>
        </CeESU>

        <CountersSection>
          <CountersContainer>
            <CounterItem>
              <CounterNumber>{participantsCount}+</CounterNumber>
              <CounterLabel>Participanți</CounterLabel>
            </CounterItem>
            <CounterItem>
              <CounterNumber>{volunteersCount}+</CounterNumber>
              <CounterLabel>Voluntari</CounterLabel>
            </CounterItem>
            <CounterItem>
              <CounterNumber>{daysCount}</CounterNumber>
              <CounterLabel>Zile</CounterLabel>
            </CounterItem>
          </CountersContainer>
        </CountersSection>

        <VideoSection>
          <VideoTitle>Aftermovie ESU 2024</VideoTitle>
          <VideoContainer>
            <iframe
              src="https://www.youtube.com/embed/IkRQNqete7g"
              frameBorder="0"
              allowFullScreen
              title="ESU 2024 Aftermovie"
            />
          </VideoContainer>
        </VideoSection>

        <SlideshowSection>
          <CeESU>
            <CeESUTitle>Iată ce înseamnă să fii participant la ESU</CeESUTitle>
          </CeESU>
          <SlideshowContainer>
            {slideshowImages.map((img, idx) => (
              <Slide
                key={idx}
                $active={slideIndex === idx}
                $direction="center"
              >
                <img src={img} alt={`ESU Slide ${idx + 1}`} />
              </Slide>
            ))}
            <PrevArrow onClick={() => plusSlides(-1)}>❮</PrevArrow>
            <NextArrow onClick={() => plusSlides(1)}>❯</NextArrow>
            <DotsContainer>
              {slideshowImages.map((_, idx) => (
                <Dot
                  key={idx}
                  $active={slideIndex === idx}
                  onClick={() => goToSlide(idx)}
                />
              ))}
            </DotsContainer>
          </SlideshowContainer>
        </SlideshowSection>

        <Footer />
      </MainWrap>
    </>
  );
}

export default App;
