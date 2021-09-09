import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  flex-direction: column;
  padding: 8rem;
  display: flex;
  align-items: center;

  .container-content {
      display: flex;
      justify-content: center;
      flex-direction: column;

      margin-top: 150px;
      margin-bottom: 70px;
  }

  .btn {
      background: #FFF069;
      text-decoration: 0;
      color: #1C1C1C;
      font-family: "Asap", sans-serif;
      font-weight: 700;
      font-size: 2rem;
      padding: 34px 135px;
  }

`;
