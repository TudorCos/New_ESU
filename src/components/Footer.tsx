import styled from "styled-components";

// Footer styled components
const FooterWrapper = styled.footer`
  background-color: #071E46;
  color: #ffffff;
  padding: 20px 0;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 900px) {
    padding: 15px 0;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    gap: 15px;
    padding: 10px 0;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 60px;
  color: #ccc;
  font-size: 20px;
  margin-top: -10px;

  img {
    max-width: 125px;
  }

  @media (max-width: 900px) {
    gap: 30px;
    img {
      max-width: 120px;
    }
  }
`;

const FooterSocial = styled.div`
  a {
    color: #ffffff;
    font-size: 22px;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.4s ease-in-out;

    &:hover {
      color: #fac82d;
    }

    @media (max-width: 900px) {
      font-size: 22px;
      margin: 0 8px;
    }
  }
`;

const FooterDivider = styled.hr`
  border: none;
  height: 2px;
  background-color: #696969;
  margin: 20px auto;
  width: 90%;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
  color: #ccc;
  font-size: 14px;
  margin-top: -10px;

  a {
    color: inherit;
  }

  img {
    max-width: 140px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 0;

    img {
      max-width: 100px;
    }
  }
`;

const FooterContact = styled.div`
  padding-bottom: 5px;
  text-align: justify;

  b {
    color: #ffffff;
  }

  h3 {
    color: #ffffff;
    text-align: center;
    margin-left: 0px;
    font-size: 130%;
    margin-bottom: 15px;
  }

  p {
    margin: 8px 0;
    line-height: 1.6;
  }

  a {
    color: inherit;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLogo>
          <a href="https://www.utcluj.ro/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/Logo-uri/UTalb.png" alt="UT Logo" />
          </a>
          <a href="https://osut.org/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/Logo-uri/OSUT alb.png" alt="OSUT Logo" />
          </a>
        </FooterLogo>
        <FooterSocial>
          <a href="https://www.facebook.com/engineering.summer.university" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/engineering.summer.university" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@esu.osut" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="mailto:esu.osutcluj@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </FooterSocial>
      </FooterContent>
      <FooterDivider />
      <FooterBottom>
        <a href="https://esu.osut.org/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/Logo-uri/ESU_logo.png" alt="ESU Logo" />
        </a>
        <FooterContact>
          <h3>Contact:</h3>
          <p><b>Orțan Adela - Responsabil BC</b></p>
          <p>Număr de telefon: <i>0754273202</i></p>
          <p>Email: <a href="mailto:adelalorena16@gmail.com">adelalorena16@gmail.com</a></p>
          <p><b>Florea Alexandru - Coordonator</b></p>
          <p>Număr de telefon: <i>0728020039</i></p>
          <p>Email: <a href="mailto:alexandruflorea2004@gmail.com">alexandruflorea2004@gmail.com</a></p>
        </FooterContact>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
