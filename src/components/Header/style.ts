import styled from 'styled-components';

export const NavBar = styled.header`
  width: 100%;
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Asap", sans-serif;
  font-weight: 500;
  font-size: 1em;
  text-align: center;


  .header-logo {
      width: 22rem;
      height: 7rem;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .header-menu {
    display: flex;
    justify-content: space-around;

    a {
        text-decoration: none;
        color: #868686;
        margin-left: 3rem;
        font-weight: 700;
      }
    }

    .header-menu__link {
        padding-top: 15px;
        transition: all .6s ease-in-out;

        &:hover {
            transform: scale(1.3);
            cursor: pointer;
        }
   
    }

    .contribute {
        width: 9rem;
        padding: 2px;
        background-color: #FFC404;
        color: #FFFFFF !important;
        padding: 15px;
        border-radius: 15px;
    }
`;
