import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

// Animations
const slideInAnimation = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled Components
const Navbar = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ $scrolled }) => ($scrolled ? "#071E46" : "transparent")};
  height: 70px;
  color: #071E46;
  z-index: 500;
  transition: background 0.4s ease-in-out;
  font-family: 'Poppins', sans-serif;
  box-shadow: ${({ $scrolled }) => ($scrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none")};
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  a img {
    width: 176px;
    height: 60px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin-left: auto;
  gap: 20px;
  font-size: 22px;
  text-decoration: none;
  padding: 0;
  margin-right: 5%;

  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.6s ease-in-out;

    &:hover {
      color: #fac82d;
    }
  }

  li {
    margin: 0 15px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1050px) {
    li:not(:last-child) {
      display: none;
    }
  }
`;

const HeaderButton = styled.a`
  background: #ffffff;
  color: #073B7F !important;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  padding: 6px 16px;
  font-size: 1rem;
  border-radius: 30px;
  transition: background 0.6s ease, color 0.4s ease, transform 0.2s ease, box-shadow 0.3s ease;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 1;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #fac82d;
    color: #073B7F !important;
    transform: translateY(-1px);
  }
`;

const MenuButton = styled.div`
  cursor: pointer;
  position: fixed;
  top: 15px;
  left: 5%;
  z-index: 1000;
  opacity: 1;
  font-family: 'Poppins', sans-serif;
`;

const Bar = styled.div<{ $isOpen: boolean; $barNumber: 1 | 2 | 3 }>`
  width: 35px;
  height: 5px;
  background-color: #ffffff;
  margin: 6px 0;
  transition: transform 0.4s, background-color 0.6s ease-in-out, opacity 0.4s;

  ${MenuButton}:hover & {
    background-color: #fac82d;
  }

  ${({ $isOpen, $barNumber }) => {
    if ($barNumber === 1 && $isOpen) {
      return css`transform: translate(0, 11px) rotate(-45deg);`;
    }
    if ($barNumber === 2 && $isOpen) {
      return css`opacity: 0;`;
    }
    if ($barNumber === 3 && $isOpen) {
      return css`transform: translate(0, -11px) rotate(45deg);`;
    }
    return "";
  }}
`;

const Sidenav = styled.div<{ $isOpen: boolean }>`
  height: 100vh;
  width: ${({ $isOpen }) => ($isOpen ? "22%" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  background-color: #06265e;
  overflow: hidden;
  transition: width 0.5s ease;
  padding-top: 0;
  z-index: 500;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 0;
    align-items: center;
    text-align: center;
    width: ${({ $isOpen }) => ($isOpen ? "100vw" : "0")};
  }

  @media (min-width: 768px) and (max-width: 1050px) {
    width: ${({ $isOpen }) => ($isOpen ? "35vw" : "0")};
  }
`;

const SidenavLink = styled.a<{ $isOpen: boolean; $index: number }>`
  padding: 8px 8px 8px 32px;
  padding-left: 20%;
  text-decoration: none;
  font-size: 30px;
  color: #fac82d;
  display: block;
  transition: color 0.4s ease-in-out, opacity 0.3s ease, transform 0.3s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-20px)")};
  transition-delay: ${({ $isOpen, $index }) => ($isOpen ? `${$index * 0.05}s` : "0s")};
  white-space: nowrap;

  ${({ $isOpen, $index }) =>
    $isOpen &&
    css`
      animation: ${slideInAnimation} 0.4s ease-out forwards;
      animation-delay: ${$index * 0.05}s;
    `}

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 6vw;
    padding: 2vh 0;
    padding-left: 0;
  }
`;

const SidenavInscriere = styled.a<{ $isOpen: boolean }>`
  display: none !important;

  @media (max-width: 768px) {
    display: inline-flex !important;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    color: #073B7F;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    padding: 20px 30px;
    font-size: 1.3rem;
    border-radius: 30px;
    text-decoration: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 30px auto 0 auto;
    width: fit-content;
    max-width: 85%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-20px)")};
    transition: opacity 0.3s ease, transform 0.3s ease;
    transition-delay: ${({ $isOpen }) => ($isOpen ? "0.3s" : "0s")};
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Acasă", external: false },
    { href: "/about", label: "Despre noi", external: false },
    { href: "/echipa", label: "Echipa", external: false },
    { href: "/esu2025", label: "ESU 2025", external: false },
    { href: "/faq", label: "FAQ", external: false },
    { href: "https://osutcluj.pixieset.com/engineeringsummeruniversity2024/", label: "Galerie", external: true },
  ];

  return (
    <>
      <Navbar $scrolled={isScrolled}>
        <Logo>
          <a href="/">
            <img src="/assets/images/Logo-uri/ESU_logo_header.png" alt="ESU Logo" />
          </a>
        </Logo>
        <NavLinks>
          <li>
            <a href="https://www.facebook.com/engineering.summer.university" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/engineering.summer.university/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@esu.osut" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
          </li>
          
        </NavLinks>
      </Navbar>

      <MenuButton onClick={toggleNav}>
        <Bar $isOpen={isOpen} $barNumber={1} />
        <Bar $isOpen={isOpen} $barNumber={2} />
        <Bar $isOpen={isOpen} $barNumber={3} />
      </MenuButton>

      <Sidenav $isOpen={isOpen}>
        {navLinks.map((link, index) => (
          link.external ? (
            <SidenavLink
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              $isOpen={isOpen}
              $index={index}
            >
              <b>{link.label}</b>
            </SidenavLink>
          ) : (
            <SidenavLink
              key={link.href}
              as={Link}
              to={link.href}
              $isOpen={isOpen}
              $index={index}
              onClick={() => setIsOpen(false)}
            >
              <b>{link.label}</b>
            </SidenavLink>
          )
        ))}
        <SidenavInscriere
          href="/assets/documente/Liste finale.pdf"
          target="_blank"
          rel="noopener noreferrer"
          $isOpen={isOpen}
        >
          Liste finale
        </SidenavInscriere>
      </Sidenav>
    </>
  );
};

export default Header;
