import styled from 'styled-components';

export const Container = styled.main`
  flex-grow: 1;
  strong {
    font-weight:700;
  }
  iframe {
    padding:5.5rem;
  }
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
    margin-top: 180;
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
.txt1 {

    margin-top: 70px;
    margin-bottom: 50px;
    font-family: "Asap";
    line-height: 31px;
    text-align: justify !important; 
    margin-left: 6rem;
    color: #1C1C1C;
    font-size: 25px;

}
   .txt2 {

    margin-bottom: 70px;
    font-family: "Asap";
    font-style: normal;
    line-height: 31px;
    text-align: justify;
    margin-left: 6rem;
    color: #1C1C1C;
    font-size: 25px;
    

  }
  .txt3 {
    font-family: "Asap";
    font-style: normal;
    line-height: 31px;
    text-align: justify;
    margin-left: 6rem;
    color: #1C1C1C;
    font-size: 25px;
    
  }
  .txtend {
      font-family: "Asap";
      font-style: normal;
      font-weight: normal;
      font-size: 25px;
      text-align: justify;
      color: #1C1C1C;
      line-height: 31px;
      margin-left: 6rem;
      margin-right: 6rem;
      margin-bottom: 150px;
    }

.img-edc{
  width: 508px;
  height: 734px;
  margin-top: 180px
  
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Asap", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 0.355em;
  color: #FFC404;
  margin-bottom: 150px;
}
.imgsml {

  display:flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 223;
}
.cntittle {
  
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
    padding: 0 50px
  }
  .border2{
    border-left : solid 3px #868686;
    padding: 0 50px
  }
}
.namectn {
  font-size: 36px;
}

.tltact {
  margin-top: 220;
  margin-bottom: 158;
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
  background-color:#EEEEEE;
  border: 1px solid #EEEEEE;
  box-sizing: border-box;
  padding: 10%;
  
}
.alg {
    display:flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom:-5rem;
    
  a{
    flex-direction:column;
    
    
  }
}
@media(max-width:480px){
  h1 {
      margin-top: 50px;
    }
  .join{
    display: inline
    
  }
  .up{
    margin-left:-3.5rem
  }
  .img-edc{
    img {
      width: 60%;
      margin-left: 30rem;
      margin-top:-48rem;
    }
  }
  .txtend{
    margin-top:-52.5rem;
    margin-left: 3rem;
    margin-right: 0rem;
  }
  .atv{
    margin-left:30rem;
  }
  .imgsml{
      margin-left:30rem;
  }
  .retangulo{
    display:flex;
  flex-direction: column;
  justify-content: center;
  background-color:#EEEEEE;
  border-right: 5rem solid #EEEEEE;
  box-sizing: border-box;
  padding: 10%;
  margin-right:-33.5rem;
  }

  .tltact{
    margin-left: 30rem;
  }
  .alg{

    margin-left: 3rem;
    margin-right: -32rem;
    display:flex;
    align-items: none;
    justify-content: space-around;
    a{
      width: -50%
    }
  }
  
}
@media(max-width:1020px){
  .alg{}
  .atv{}
  .border1{}
  .border2{}
  .cntittle{}
  .countn{}
  .img-edc{}
  .imgsml{}
  .join {

  }
  .namectn{}
  .retangulo{}
  .sub-text{}
  .tltact{}
  .txt1{}
  .txt2{}
  .txt3{}
  .txtend{}
  .up{}
}
`;
