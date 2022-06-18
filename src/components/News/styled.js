import styled from 'styled-components';

export const SecNews = styled.section`
    width: 100%;
    height: 800px;
    font-family: 'BluuNext', sans-serif;
    h1 {
        font-size: 3rem;
        text-align: center;
        padding-top: 100px;
    }
    .line {
        width: 70vw;
        margin: 5px auto;
        border: 1px solid #696b78;
    }
    .select-news {
        display: flex;
        flex-direction: row;
        gap: 10px;
        justify-content: center;
        margin-top: 15px;
    }
    #I,
    #II,
    #III,
    #IV,
    #V,
    #VI {
        opacity: 0.5;
        transition: all 0.1s ease-in-out;
        cursor: pointer;
    }
    .active {
        opacity: 1 !important;
        color: #d1af5a;
        transform: scale(1.2);
    }
`;
