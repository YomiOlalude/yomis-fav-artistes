import styled from "styled-components";
import defaultImg from "../images/defaultBcg.jpg";

const StyledHero = styled.header`
    height: 60vh;
    background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export default StyledHero;
