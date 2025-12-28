import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Hero Section
const HeroSection = styled.section`
  position: relative;
  background-image: url('/assets/images/Banner Page/DespreNoi.jpg');
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

// Content Section
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
  padding-bottom: 8vh;

  @media (max-width: 767px) { font-size: 0.9rem; }
  @media (min-width: 768px) and (max-width: 950px) { font-size: 1rem; }
`;

const ResponsiveHighlight = styled.b`
  color: #FAC82D;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 767px) { font-size: 1.2rem; }
  @media (min-width: 768px) and (max-width: 950px) { font-size: 1.4rem; }
  @media (min-width: 951px) and (max-width: 1500px) { font-size: 1.6rem; }
`;

// Blue background section
const VideoBackground = styled.div`
  position: relative;
  max-width: 100%;
  background-color: #073B7F;
  height: auto;
  padding-bottom: 10vh;
  padding-top: 6vh;
`;

const CeESUDescription2 = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #ffffff;
  max-width: 70%;
  margin: 0 auto;
  text-align: justify;
  padding: 0 20px;

  @media (max-width: 767px) { font-size: 0.9rem; }
  @media (min-width: 768px) and (max-width: 950px) { font-size: 1rem; }
`;

const CeESUMotto = styled.h2`
  color: #fac82d;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.2);
  margin-top: 30px;

  @media (max-width: 767px) { font-size: 1.6rem; }
  @media (min-width: 768px) and (max-width: 950px) { font-size: 1.8rem; }
  @media (min-width: 951px) and (max-width: 1500px) { font-size: 2.1rem; }
`;

// Slideshow
const SlideshowContainer = styled.div`
  position: relative;
  max-width: 70vw;
  margin: 5vh auto 8vh auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`;

const Slide = styled.div<{ $active: boolean }>`
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

// Testimonials images
const testimonialImages = [
  "/assets/images/Testimoniale/testimoniale-01.png",
  "/assets/images/Testimoniale/testimoniale-02.png",
];

const DespreNoi = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n: number) => {
    let newIndex = slideIndex + n;
    if (newIndex >= testimonialImages.length) newIndex = 0;
    if (newIndex < 0) newIndex = testimonialImages.length - 1;
    setSlideIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <>
      <Header />
      <MainWrap>
        <HeroSection>
          <HeroTitle>DESPRE NOI</HeroTitle>
        </HeroSection>

        <CeESU>
          <CeESUDescription>
            <ResponsiveHighlight>Engineering Summer University</ResponsiveHighlight> este o tabără de 2 săptămâni dedicată elevilor de clasa a 11-a. Organizat de OSUT Cluj și aflat la a 11-a ediție, scopul proiectului este acela de a oferi participanților experiența cât mai veritabilă de student.
            <br /><br />
            Pregătește-te pentru un program captivant, unde vei învăța prin experiență! Vei participa la cursuri interesante și laboratoare hands-on, susținute de profesori de top de la Universitatea Tehnică din Cluj-Napoca. Fiecare activitate te va provoca să gândești creativ și tehnic, oferindu-ți oportunitatea de a pune în practică ceea ce înveți într-un mod inovator și, de ce nu, distractiv.
          </CeESUDescription>
        </CeESU>

        <VideoBackground>
          <CeESUDescription2>
            Dar ESU nu înseamnă doar învățat! Pe lângă experiențele educaționale, te așteaptă activități de echipă, provocări captivante și seri tematice, toate menite să îți dezvolte abilitățile sociale și să creeze prietenii care pot dura o viață. Cazarea în căminele campusului îți va oferi o experiență autentică de viață de student.
            <br /><br />
            Nu ai planuri pentru vară? ESU este locul ideal unde poți învăța, te poți distra și poți construi fundamentul unui viitor de succes! Vino să explorezi ingineria într-un mod inedit și să creezi amintiri de neuitat alături de o echipă de tineri pasionați!
          </CeESUDescription2>
          <CeESUMotto>Dive into the journey of a lifetime!</CeESUMotto>
        </VideoBackground>

        <CeESU>
          <CeESUTitle>Uite ce au zis foștii participanți despre ESU</CeESUTitle>
        </CeESU>

        <SlideshowContainer>
          {testimonialImages.map((img, idx) => (
            <Slide key={idx} $active={slideIndex === idx}>
              <img src={img} alt={`Testimonial ${idx + 1}`} />
            </Slide>
          ))}
          <PrevArrow onClick={() => plusSlides(-1)}>❮</PrevArrow>
          <NextArrow onClick={() => plusSlides(1)}>❯</NextArrow>
          <DotsContainer>
            {testimonialImages.map((_, idx) => (
              <Dot
                key={idx}
                $active={slideIndex === idx}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </DotsContainer>
        </SlideshowContainer>

        <Footer />
      </MainWrap>
    </>
  );
};

export default DespreNoi;
