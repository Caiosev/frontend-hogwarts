import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    padding: 150px 25px 50px;
    #inDisplay {
        display: ${(props) => (props.isOpen ? 'none' : 'block')};
    }
    .option {
        display: ${(props) => (props.isOpen ? 'block' : 'none')};
    }
    .filter {
        img {
            width: 60px;
        }
        .options {
            width: ${(props) => (props.isOpen ? '90%' : '80px')};
            display: flex;
            gap: 20px;
            overflow-x: ${(props) => (props.isOpen ? 'scroll' : 'hidden')};
        }
        display: flex;
        align-items: center;
        width: ${(props) => (props.isOpen ? '100%' : '130px')};
        #arrow {
            transform: ${(props) =>
                props.isOpen ? 'rotate(-180deg)' : 'none'};
            transition: all 0.5s ease-in-out;
            width: 40px;
            height: 40px;
        }
    }
    #search {
        display: ${(props) => (props.isOpen ? 'none' : 'block')};
        height: 50px;
        padding-left: 10px;
        font-size: 18px;
        border-radius: 10px;
        width: 180px;
    }
    @media (min-width: 800px) {
        display: none;
    }
`;
