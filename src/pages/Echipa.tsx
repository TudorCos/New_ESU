import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Hero Section
const HeroSection = styled.section`
  position: relative;
  background-image: url('/assets/images/Banner Page/Echipa.jpg');
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

  @media (max-width: 1800px) { font-size: 5.2rem; line-height: 1.3; }
  @media (max-width: 1500px) { font-size: 4.4rem; line-height: 1.3; }
  @media (max-width: 950px) { font-size: 3.8rem; line-height: 1.25; }
  @media (max-width: 768px) { font-size: 2.6rem; line-height: 1.2; padding: 0 10px; }
`;

const MainWrap = styled.main`
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const TeamSection = styled.section`
  padding: 20px 0;
`;

// Team Member Card
const TeamCard = styled.div`
  width: 75vw;
  background: linear-gradient(145deg, #094b9c, #052d6a);
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  font-family: 'Poppins', sans-serif;
  margin: 30px auto;
  min-height: 300px;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 950px) {
    flex-direction: column;
    height: auto;
    padding: 15px;
    margin-bottom: 20px;
    margin-top: 30px;
  }
`;

const LeftSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;

  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const Photo = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  margin-bottom: 30px;
  overflow: hidden;
  background: linear-gradient(145deg, #1a5fb4, #0d3a73);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fac82d;
  font-size: 3rem;
  font-weight: bold;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 40px;

  a {
    color: white;
    font-size: 25px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #fac82d;
    }
  }

  @media (max-width: 950px) {
    margin-bottom: 3vh;
  }
`;

const RightSection = styled.div`
  width: 40%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  color: #ffffff;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 30px;
    margin-top: -5%;
    font-family: 'Poppins', sans-serif;
    text-align: center;
  }

  h3 {
    font-size: 1.3rem;
    color: #FAC82D;
    margin-bottom: 5%;
    margin-top: -10px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    opacity: 1;
    font-family: 'Poppins', sans-serif;
    text-align: justify;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding-left: 0;

    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.2rem; }
    p { font-size: 1rem; }
  }

  @media (min-width: 768px) and (max-width: 950px) {
    width: 100%;
    text-align: center;
    padding-left: 0;

    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.2rem; }
  }

  @media (min-width: 950px) and (max-width: 1500px) {
    h2 { font-size: 1.6rem; }
    h3 { font-size: 1.1rem; }
    p { font-size: 0.85rem; }
  }

  @media (min-width: 1500px) and (max-width: 1800px) {
    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.2rem; }
    p { font-size: 1rem; }
  }
`;

const ExtraRightSection = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
    height: auto;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

// Team member data
const teamMembers = [
  {
    name: "Florea Alexandru",
    role: "Coordonator",
    quote: "Să pleci două săptămâni de acasă, într-un loc necunoscut, alături de oameni pe care nu i-ai mai întâlnit, e o nebunie. Să revii, an de an, ducând mai departe aceleași emoții, înseamnă iubire. ESU devine acasă nu prin locație sau activități, ci prin sufletele care îl fac magic.",
    photo: "/assets/images/Echipa/Florea.png",
    icon: "/assets/images/Forme/rac.png",
    facebook: "https://facebook.com/flowerman13",
    instagram: "https://instagram.com/alexandruflorea13",
  },
  {
    name: "Orțan Adela",
    role: "Responsabil BC",
    quote: "Nu credeam că este posibil să te apropii atât de mult de niște persoane în doar două săptămâni. ESU mi-a schimbat complet perspectiva; este un proiect de suflet pentru mine și mi-aș dori ca toată lumea să aibă ocazia, măcar o dată în viață, să trăiască ceea ce am trăit eu la ESU.",
    photo: "/assets/images/Echipa/Adela.png",
    icon: "/assets/images/Forme/scoica1.png",
    facebook: "https://www.facebook.com/adela.ortan",
    instagram: "https://www.instagram.com/adela_ortan/",
  },
  {
    name: "Pavel Luca",
    role: "Secretar",
    quote: "Nu mă așteptam ca o tabără de vară să-mi ofere șansa unui nou început. La ESU am legat prietenii valoroase, care s-au menținut de-a lungul timpului și pentru care sunt în continuare recunoscător. Am amintiri la care aș vrea să mă întorc ori de câte ori am ocazia, fiindcă vor rămâne mereu importante pentru mine.",
    photo: "/assets/images/Echipa/Luca.png",
    icon: "/assets/images/Forme/calut_de_mare.png",
    facebook: "https://facebook.com/acu1p",
    instagram: "https://instagram.com/acu1p",
  },
  {
    name: "Bașa Iarina",
    role: "Co-coordonator",
    quote: "Când am venit la ESU, habar n-aveam că o tabără de vară mă poate convinge unde să dau la facultate. Dar ghici ce? Fix asta s-a întâmplat. A fost genul ăla de experiență unde te simți bine, râzi, cunoști oameni super tari și, cumva, în timp ce te distrezi, îți dai seama că \"aici sunt oamenii mei!\"",
    photo: "/assets/images/Echipa/Iarina.png",
    icon: "/assets/images/Forme/delfin.png",
    facebook: "https://www.facebook.com/iarinamaria.basa",
    instagram: "https://www.instagram.com/iarinabasa",
  },
  {
    name: "Constandache Ionela",
    role: "Co-coordonator",
    quote: "Pentru mine ESU nu a fost doar o tabără de vară, ci o experiență care m-a ajutat să mă dezvolt mai mult decât orice așteptare. Cu siguranță, toate amintirile și prieteniile pe care le-am creat la ESU, îmi vor rămâne adânc imprimate în suflet!",
    photo: "/assets/images/Echipa/Ionela.png",
    icon: "/assets/images/Forme/scoica2.png",
    facebook: "https://www.facebook.com/share/1AuM9KcuG7/",
    instagram: "https://www.instagram.com/ionellaa__",
  },
  {
    name: "Felic Cristian",
    role: "Responsabil Activități",
    quote: "Două săptămâni, 14 zile pline de aventuri, conversații, râsete, și prietenii legate neașteptat. 14 zile dureros de scurte. Iar la final, când toți își urau rămas bun, am știut că, să vin la ESU a fost cea mai bună alegere, deoarece chiar dacă plecam cu inima grea aveam sufletul plin.",
    photo: "/assets/images/Echipa/Felic.png",
    icon: "/assets/images/Forme/caracatita2.png",
    facebook: "https://www.facebook.com/share/165S1xpKtm/",
    instagram: "https://www.instagram.com/felic.cristian",
  },
  {
    name: "Sîrb Andrei",
    role: "Responsabil Activități",
    quote: "ESU m-a făcut să-mi doresc să retrăiesc experiențele din tabără în fiecare vară. Cele două săptămâni m-au ajutat să leg prietenii de lungă durată și să mă dezvolt ca persoană.",
    photo: "/assets/images/Echipa/Deiu.png",
    icon: "/assets/images/Forme/testoasa1.png",
    facebook: "https://www.facebook.com/share/1Kr2cp5CKo/",
    instagram: "https://www.instagram.com/andreisirb3011",
  },
  {
    name: "Coș Tudor",
    role: "Responsabil Tehnic",
    quote: "ESU este cea mai tare experiență de vară din viața mea. Nu doar că mi-am făcut o mulțime de noi prieteni, dar am și reușit să ies din propria zonă de confort. Toate amintirile pe care le-am creat în cele două săptămâni de tabără vor rămâne mereu parte din sufletul meu!",
    photo: "/assets/images/Echipa/Cos.png",
    icon: "/assets/images/Forme/peste1.png",
    facebook: "https://www.facebook.com/tudoradrian.cos.5",
    instagram: "https://www.instagram.com/tudor._.cos",
  },
  {
    name: "Nicula Mălina",
    role: "Responsabil PR",
    quote: "ESU pentru mine înseamnă… tot. Este experiența care mi-a schimbat viața din toate punctele de vedere. La ESU am înțeles ce înseamnă o prietenie adevărată, cum să mă distrez la maximum și cât de ușor poate fi să socializez cu persoane necunoscute. ESU m-a învățat să apreciez fiecare lucru, oricât de mic ar fi.",
    photo: "/assets/images/Echipa/Pali.png",
    icon: "/assets/images/Forme/Steluta.png",
    facebook: "https://www.facebook.com/share/1HvuZphhkq/",
    instagram: "https://www.instagram.com/_saturn.s_ring_",
  },
];

const Echipa = () => {
  return (
    <>
      <Header />
      <MainWrap>
        <HeroSection>
          <HeroTitle>
            <span className="line1">MEET THE ESU</span><br />
            <span className="line2">TEAM</span>
          </HeroTitle>
        </HeroSection>

        <TeamSection>
          {teamMembers.map((member, index) => (
            <TeamCard key={index}>
              <LeftSection>
                <Photo>
                  <img src={member.photo} alt={member.name} />
                </Photo>
                <SocialLinks>
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </SocialLinks>
              </LeftSection>

              <RightSection>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p><i>"{member.quote}"</i></p>
              </RightSection>

              <ExtraRightSection>
                <img src={member.icon} alt="Icon" />
              </ExtraRightSection>
            </TeamCard>
          ))}
        </TeamSection>

        <Footer />
      </MainWrap>
    </>
  );
};

export default Echipa;
