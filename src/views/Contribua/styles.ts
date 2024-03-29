import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;

  .contribute-donate {
      margin-top: 70px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0 9rem;
      font-family: "Asap", sans-serif;
      font-weight: normal;
      text-align: justify;
      font-size: 1.5rem;
      color: #1C1C1C;
  }

  .contribute-btn {
      margin: 9rem 16rem;
      display: flex;
      justify-content: space-around;
      text-align: center;
      font-family: "Asap", sans-serif;
      font-size: 2.25rem;
      font-weight: bold;
      transition: all .6s ease-in-out;

      img {
          margin-bottom: 3rem;
          height: 240px;
          width: 240px;
          
      }

      a {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 27rem;
          width: 20rem;
          background-color: #FFF069;
          text-decoration: 0;
          color: #868686;
          padding: 1rem;
          border-radius: 15px;
          transition: all .6s ease-in-out;
          &:hover {
            transform: scale(1.3);
            cursor: pointer;
          }
      }
  }

  .contribute-pix {
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-size: 36px;
    margin:  0 0 11rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #EEEEEE;
    padding: 130px;

    .first {
        margin-bottom: 4rem;
    }

    .contribute-pix__QRCODE {
        display: flex;
        justify-content: center;
        border: 4px solid #FFC404;
        border-radius: 15px;
        background: #FFFF;

        img {
            height: 20rem;
            width: 20rem;
            border-radius: 15px;
        }
    }

    h5 {
            margin-top: 20px;
            text-align: center;
            font-size: 24px;
            color: #1C1C1C;
        }
    
    h3 {
        font-weight: 600;
        color: #1C1C1C;
    }

    p {
        color: #868686;
        font-weight: 400;
    }
  }
  
`;
