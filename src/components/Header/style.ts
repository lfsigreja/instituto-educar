import styled from 'styled-components';

export const NavBar = styled.div`
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
      width: 215px;
      height: 3.75rem;
      background-color: grey;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .header-menu {
    display: flex;
    justify-content: space-around;

    a {
        text-decoration: none;
        color: #1c1c1c;
        margin-left: 3rem;
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
        padding: 15px;
        border-radius: 15px;

    }
`;
