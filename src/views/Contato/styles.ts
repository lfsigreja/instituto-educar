import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  padding: 8rem;

   .btn {
      text-decoration: 0;
      font-family: "Asap", sans-serif;
      font-weight: 700;
      font-size: 2rem;
      background-color: #FFC404;
      border-radius: 15px;
      color: #FFFFFF;
      padding: 34px 62px;

      transition: all .6s ease-in-out;
      &:hover {
        transform: scale(1.3);
        cursor: pointer;
      }
  }

  .contact-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 280px;
  }

  .icons {
    display: grid;
    grid-template-columns: 200px 200px;
    grid-row: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    a {
      margin: 0 0 50px 150px;
    }
  }

`;
