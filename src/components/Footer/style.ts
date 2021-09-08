import styled from 'styled-components';

export const Container = styled.footer`
    background-color: #FFF069;
    height: 16rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
  
    .footer-volunteer {
        font-family: 'IBM Plex Mono', monospace;
        display: flex;
        flex-wrap: wrap;
        font-size: 1.2rem;
        width: 14rem;
        word-break: normal;

        a {
            margin-bottom: 1rem;
            flex-basis: 100%;
            text-decoration: 0;
            color: #1c1c1c;

            transition: all .6s ease-in-out;

            &:hover {
                transform: scale(1.1);
                cursor: pointer;
            }
        }
    }

    .footer__edu-img {
        height: 227px;
        width: 227px;
        margin-bottom: 50px;
        border: 0;
    }

    .footer__address {
        font-family: 'Asap', sans-serif;
        font-size: 20px;
        width: 400px;
    }
`;
