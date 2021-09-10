import styled from 'styled-components';

export const Container = styled.main`
  flex-grow: 1;

  h1 {
    display:flex;
    justify-content: left;
    align-items: left;
    text-align: left;
    
    font-family: Asap;
    font-style: normal;
    font-weight: bold;
    font-size: 66px;
    line-height: 76px;
    letter-spacing: 0.1em;
    margin-left: 6rem;
    color: #FFC404;
}
   .home-text {
    display:flex;
    text-align: left;
    width: 603px;
    height: 362px;

    margin-top: 70px;
    margin-bottom: 24px;
    font-family: Asap;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 47px;
    text-align: justify;
    margin-left: 6rem;
    color: #1C1C1C;
  } 
.sub-text {
  display:flex;
  width: 540px;
  height: 25px;
  left: 141px;
  top: 458px;
  margin-left: 6rem;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  
}
.img-edc{
  display:flex;
  text-align: left;
}
p {
  margin-bottom: 24px;
}
.join {
  display:flex;
  align-items: center;
  justify-content: space-around;
}
.up {
  display:flex;
  flex-direction: column;
}
.atv {
  margin-top: 220;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Asap", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 0.355em;
  color: #FFC404;
}
.imgsml {
  margin-top: 209;
  display:flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}
.cntittle {
  margin-top: 297;
  font-family: "Asap";
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 55px;


  text-align: center;
  letter-spacing: 0.355em;



  color: #1C1C1C;
}


.countn {
  margin-top: 150;
  font-family: "Asap";
  font-style: normal;
  font-weight: 500;
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: space-around;
  h2 {
    font-size: 144px;
    color:#868686;
  }
  h3 { 
    font-size: 36px;
    color:#868686;
  }
  .border1{
    border-right : solid 3px #868686;
    padding: 0 100px
  }
  .border2{
    border-left : solid 3px #868686;
    padding: 0 100px
  }
}
.namectn {
  font-size: 36px;
}

.tltact {
  margin-top: 220;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Asap", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 0.355em;
  color: #FFC404;
}
.retangulo {
  display:flex;
  flex-direction: column;
  justify-content: center;
  background-color:#868686 !important;
  border: 1px solid #EEEEEE;
  box-sizing: border-box;
}
`;
