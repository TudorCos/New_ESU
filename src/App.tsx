import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Global styles (fonts, resets)
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

// Styled components
const MainWrap = styled.main`
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const LContent = styled.div`
  margin: 0;
  padding: 0;
`;

const FaqHero = styled.section`
  position: relative;
  background-image: url('/assets/images/Banner Page/ESU2025.JPG');
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
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.4);
    z-index: -1;
  }
`;

const FaqHeroTitle = styled.h1`
  color: #fff;
  font-size: 6rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
  margin: 0;
  line-height: 1.4;

  .line1 { margin-bottom: 0.5em; }
  .line2 { margin-top: 0; font-size: 4.5rem; }

  @media (max-width: 1800px) { font-size: 5.2rem; .line2 { font-size: 4rem; } }
  @media (max-width: 1500px) { font-size: 4.4rem; .line2 { font-size: 3rem; } }
  @media (max-width: 950px)  { font-size: 3.8rem; .line2 { font-size: 2.4rem; } }
  @media (max-width: 768px)  { font-size: 2.6rem; .line2 { font-size: 1.6rem; } }
`;

const CeESU = styled.section`
  max-width: 70%;
  margin: 60px auto 0 auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  padding: 0 20px;
`;

const CeESUTitle = styled.h2`
  color: #fac82d;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3vh;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
`;

const CustomFaqLinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, #094b9c, #052d6a);
  color: #fff;
  font-size: 2.2rem;
  font-weight: 600;
  height: 8vh;
  padding: 0 5vw;
  text-decoration: none;
  border-radius: 50px;
  transition: background 0.6s, color 0.5s, box-shadow 0.5s, transform 0.4s;
  font-family: 'Poppins', sans-serif;
  width: fit-content;
  margin: 4vh auto;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2);
  transform: translateY(0);

  &:hover {
    background: linear-gradient(145deg, #fac82d, #f7b800);
    color: #073B7F;
    box-shadow: 0 12px 28px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.2);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.25);
  }
`;

const FaqSection = styled.section`
  background: #fff;
  padding: 50px 5%;
  font-family: 'Poppins', sans-serif;
`;

const FaqContainer = styled.div`
  max-width: 75%;
  margin: 0 auto;
`;

const FaqItem = styled.div<{active: boolean}>`
  background: #073B7F;
  border-radius: 15px;
  margin-bottom: 25px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(255,255,255,0.2);
  transition: transform 0.2s;
  transform: ${({active}) => active ? "scale(1.02)" : "none"};
`;

const FaqQuestion = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.4rem;
  padding: 20px;
  text-align: left;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 3%;
  padding-left: 3%;
  font-family: 'Poppins', sans-serif;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #fac82d;
    color: #073B7F;
  }
`;

const FaqArrow = styled.i<{active: boolean}>`
  transition: transform 0.4s;
  transform: ${({active}) => active ? "rotate(180deg)" : "none"};
`;

const FaqAnswer = styled.div<{active: boolean}>`
  background: #1366d3;
  color: #fff;
  padding: ${({active}) => active ? "20px" : "0 20px"};
  max-height: ${({active}) => active ? "250vh" : "0"};
  overflow: hidden;
  transition: max-height 0.6s cubic-bezier(0.4,0,0.2,1), padding 0.4s;
  font-family: 'Poppins', sans-serif;

  a {
    color: #fff;
    text-decoration: underline;
    transition: color 0.3s;
    &:hover { color: #fac82d; }
  }
`;

// FAQ data
const faqData = [
  {
    question: "Costul taberei",
    answer: (
      <p>
        Costul pentru participarea la tabăra de vară este de 650 lei/elev. Acest preț include cazarea, mesele, precum și toate activitățile educative și recreative organizate pe parcursul taberei.
      </p>
    ),
  },
  {
    question: "Cum te înscrii la ESU?",
    answer: (
      <p>
        Înscrierea la tabăra de vară se face foarte ușor! Tot ce trebuie să faci este să completezi formularul disponibil pe site-ul nostru. În doar câțiva pași simpli, îți poți rezerva locul pentru o experiență de neuitat!
      </p>
    ),
  },
  {
    question: "Acte necesare pentru înscriere",
    answer: (
      <p>
        1. Formularul de înscriere de la adresa esu.osut.org (completat online) <br />
        2. Adeverință din partea instituției de învățământ care atestă calitatea de elev în clasa a XI-a a aplicantului <br />
        3. Regulamentul prezent semnat de către participant și reprezentantul legal al acestuia pe fiecare pagină și scanat <br />
        4. Fotografie de profil (format .jpeg ¾, asigurându-vă că fotografia este clară și că fața este vizibilă, nu e obligatoriu să fie poza de buletin) <br />
        5. Formular de acord a prelucrării datelor cu caracter personal (GDPR) <br />
        6. Diplome care să ateste activitatea extracurriculară din perioada liceului menționată în formular <br />
        7. Copie după buletin <br />
        8. Acord parental - semnarea acordului parental atestă faptul că părinții aplicantului au luat la cunoștință și sunt de acord cu prezentul regulament, sau, în cazul în care aplicantul este major (are peste 18 ani împliniți, înainte de începerea proiectului), declarație pe proprie răspundere semnată de către acesta <br />
        9. Aviz epidemiologic <br />
        10. Adeverință medicală care atestă faptul că participantul este clinic sănătos <br />
        11. Adeverință medicală în care sunt precizate eventualele afecțiuni medicale (ex: hipertensiune arterială severă, astm bronșic, epilepsie, hepatită A, B sau C activă) <br />
        12. Copie după pașaport (doar în cazul aplicanților internaționali)<br />
      </p>
    ),
  },
  {
    question: "Documente importante",
    answer: (
      <p>
        1. Regulament ESU 2025 (<a href="/assets/documente/Regulament participanți ESU - 2025.pdf" download>descarcă aici</a>)<br />
        2. Formular GDPR (<a href="/assets/documente/Formular GDPR ESU 2025.pdf" download>descarcă aici</a>)<br />
        3. Acord Parental (<a href="/assets/documente/Acord Parental ESU 2025.pdf" download>descarcă aici</a>)<br />
        4. Declarație pe proprie răspundere (<a href="/assets/documente/Declarație pe propria răspundere ESU2025.pdf" download>descarcă aici</a>)<br />
      </p>
    ),
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainWrap>
        <LContent>
          <FaqHero>
            <FaqHeroTitle>
              <span className="line1">ESU 2025</span><br />
              <span className="line2">19 IULIE - 2 AUGUST</span><br />
            </FaqHeroTitle>
          </FaqHero>

          <CeESU>
            <CeESUTitle>Liste finale</CeESUTitle>
            <CustomFaqLinkButton
              href="/assets/documente/Liste finale.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Liste finale</span>
            </CustomFaqLinkButton>
          </CeESU>

          <FaqSection>
            <FaqContainer>
              {faqData.map((item, idx) => (
                <FaqItem key={idx} active={activeIndex === idx}>
                  <FaqQuestion
                    onClick={() =>
                      setActiveIndex(activeIndex === idx ? null : idx)
                    }
                  >
                    <b>{item.question}</b>
                    <FaqArrow
                      as="span"
                      active={activeIndex === idx}
                      className="faq-arrow"
                    >
                      ▼
                    </FaqArrow>
                  </FaqQuestion>
                  <FaqAnswer active={activeIndex === idx}>
                    {item.answer}
                  </FaqAnswer>
                </FaqItem>
              ))}
            </FaqContainer>
          </FaqSection>
        </LContent>

        <Footer />
      </MainWrap>
    </>
  );
}

export default App;
