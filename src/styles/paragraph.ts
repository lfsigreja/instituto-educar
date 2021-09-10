import styled from 'styled-components';

export const Paragraph = styled.p`
    font-family: "Asap", sans-serif;
    font-weight: normal;
    text-align: justify;
    font-size: 1.5rem;
    color: #1C1C1C;
    font-size: 24px;
    line-height: 44px;
    padding: 0 8rem;

    strong {
        font-weight: 700;
    }

    ul {
        padding-left: 55px;
        list-style-type: disc;

        a {
            color: #1C1C1C;
        }
    }

    ol {
        list-style-type: upper-alpha;
        padding-left: 30px;
    }

    dt {
    font-weight: 700;
    text-decoration: underline;
    padding: .5em;
    }

    dd {
        margin: 0;
        padding-left: 1em;
    }
`;
