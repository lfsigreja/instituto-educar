import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8rem;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 70px;
  border-bottom: 3px solid #EEEEEE;

  h2 {
        margin-bottom: 50px;
      color: #FFC404;
      font-family: Asap;
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        text-align: center;
        letter-spacing: 0.355em;
        text-transform: uppercase;
  }


  .post-content {

    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        border-radius: 15px;
        width: 550px;
        height: 550px;
      }

  }



`;
