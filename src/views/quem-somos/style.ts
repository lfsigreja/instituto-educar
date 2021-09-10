import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  .img-edc3{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .titulo{
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  ul{
    display: flex;
    list-style: none;
  }
  li{
    font-size:15px;
    text-align: center;
    font-weight: 600;
}
.ulLista{
  margin-top:1rem;
  margin-bottom:1rem;
  align-items: center;
  justify-content: space-around;
}
.lista{
  background:#ffc404;
  border-radius:5%;
  margin-left: 10px;
  padding:5px;
}

`;
