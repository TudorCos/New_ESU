import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Hero Section
const HeroSection = styled.section`
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
  .line2 { margin-top: 0; font-size: 4.5rem; }

  @media (max-width: 1800px) { font-size: 5.2rem; .line2 { font-size: 4rem; } }
  @media (max-width: 1500px) { font-size: 4.4rem; .line2 { font-size: 3rem; } }
  @media (max-width: 950px) { font-size: 3.8rem; .line2 { font-size: 2.4rem; } }
  @media (max-width: 768px) { font-size: 2.6rem; .line2 { font-size: 1.6rem; } padding: 0 10px; }
`;

const MainWrap = styled.main`
  background-color: #ffffff;
  margin: 0;
  padding: 0;
`;
// FAQ Section
const FaqSection = styled.section`
  background: #fff;
  padding: 50px 5%;
  font-family: 'Poppins', sans-serif;
`;

const FaqContainer = styled.div`
  max-width: 75%;
  margin: 0 auto;
`;

const FaqItem = styled.div<{ $active: boolean }>`
  background: #073B7F;
  border-radius: 15px;
  margin-bottom: 25px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(255,255,255,0.2);
  transition: transform 0.2s;
  transform: ${({ $active }) => $active ? "scale(1.02)" : "none"};
`;

const FaqQuestion = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.4rem;
  padding: 20px 3%;
  text-align: left;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #fac82d;
    color: #073B7F;
  }
`;

const FaqArrow = styled.span<{ $active: boolean }>`
  transition: transform 0.4s;
  transform: ${({ $active }) => $active ? "rotate(180deg)" : "none"};
`;

const FaqAnswer = styled.div<{ $active: boolean }>`
  background: #1366d3;
  color: #fff;
  padding: ${({ $active }) => $active ? "20px" : "0 20px"};
  max-height: ${({ $active }) => $active ? "500px" : "0"};
  overflow: hidden;
  transition: max-height 0.6s cubic-bezier(0.4,0,0.2,1), padding 0.4s;
  font-family: 'Poppins', sans-serif;

  a {
    color: #fff;
    text-decoration: underline;
    transition: color 0.3s;
    &:hover { color: #fac82d; }
  }

  p {
    margin: 0;
    line-height: 1.8;
  }
`;

// FAQ data
const faqData = [
  {
    question: "Costul taberei",
    answer: "Costul pentru participarea la tabăra de vară este de 650 lei/elev. Acest preț include cazarea, mesele, precum și toate activitățile educative și recreative organizate pe parcursul taberei.",
  },
  {
    question: "Cum te înscrii la ESU?",
    answer: "Înscrierea la tabăra de vară se face foarte ușor! Tot ce trebuie să faci este să completezi formularul disponibil pe site-ul nostru. În doar câțiva pași simpli, îți poți rezerva locul pentru o experiență de neuitat!",
  },
  {
    question: "Acte necesare pentru înscriere",
    answer: `1. Formularul de înscriere de la adresa esu.osut.org (completat online)
2. Adeverință din partea instituției de învățământ care atestă calitatea de elev în clasa a XI-a a aplicantului
3. Regulamentul prezent semnat de către participant și reprezentantul legal al acestuia pe fiecare pagină și scanat
4. Fotografie de profil (format .jpeg ¾, asigurându-vă că fotografia este clară și că fața este vizibilă)
5. Formular de acord a prelucrării datelor cu caracter personal (GDPR)
6. Diplome care să ateste activitatea extracurriculară din perioada liceului menționată în formular
7. Copie după buletin
8. Acord parental sau declarație pe proprie răspundere (pentru majori)
9. Aviz epidemiologic
10. Adeverință medicală care atestă faptul că participantul este clinic sănătos
11. Adeverință medicală cu eventualele afecțiuni medicale
12. Copie după pașaport (doar pentru aplicanții internaționali)`,
  },
];

const documentsData = [
  { name: "Regulament ESU 2025", file: "/assets/documente/Regulament participanți ESU - 2025.pdf" },
  { name: "Formular GDPR", file: "/assets/documente/Formular GDPR ESU 2025.pdf" },
  { name: "Acord Parental", file: "/assets/documente/Acord Parental ESU 2025.pdf" },
  { name: "Declarație pe proprie răspundere", file: "/assets/documente/Declarație pe propria răspundere ESU2025.pdf" },
];

const ESU2025 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <MainWrap>
        <HeroSection>
          <HeroTitle>
            <span className="line1">ESU 2025</span><br />
            <span className="line2">19 IULIE - 2 AUGUST</span>
          </HeroTitle>
        </HeroSection>

        <FaqSection>
          <FaqContainer>
            {faqData.map((item, idx) => (
              <FaqItem key={idx} $active={activeIndex === idx}>
                <FaqQuestion onClick={() => toggleFaq(idx)}>
                  <b>{item.question}</b>
                  <FaqArrow $active={activeIndex === idx}>▼</FaqArrow>
                </FaqQuestion>
                <FaqAnswer $active={activeIndex === idx}>
                  <p style={{ whiteSpace: "pre-line" }}>{item.answer}</p>
                </FaqAnswer>
              </FaqItem>
            ))}

            {/* Documents FAQ Item */}
            <FaqItem $active={activeIndex === faqData.length}>
              <FaqQuestion onClick={() => toggleFaq(faqData.length)}>
                <b>Documente importante</b>
                <FaqArrow $active={activeIndex === faqData.length}>▼</FaqArrow>
              </FaqQuestion>
              <FaqAnswer $active={activeIndex === faqData.length}>
                <p>
                  {documentsData.map((doc, idx) => (
                    <span key={idx}>
                      {idx + 1}. {doc.name} (<a href={doc.file} download>descarcă aici</a>)<br />
                    </span>
                  ))}
                </p>
              </FaqAnswer>
            </FaqItem>
          </FaqContainer>
        </FaqSection>

        <Footer />
      </MainWrap>
    </>
  );
};

export default ESU2025;
