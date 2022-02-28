import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import arrow from './assets/arrow.svg';
import check from './assets/check.svg';
import refresh from './assets/refresh.svg';

export const Button = styled.button`

    ${({ color }) => {
            if (!['primary', 'secondary'].includes(color.toLowerCase())) {
            throw new Error(`Failed prop type: Unexpected prop "color" of value "${color}", the only available options are ['primary', 'secondary']. Primary for green color palette and secondary for yellow color palette.`);
        }
    }};

    ${({ icon }) => {
            if (!['no-icon', 'arrow-right', 'check', 'refresh'].includes(icon.toLowerCase())) {
            throw new Error(`Failed prop type: Unexpected prop "icon" of value "${icon}", the only available options are ['arrow-right', 'check', 'refresh'].`);
        }
    }};

    /* Import da fonte 'Inter', definida no Figma */
    @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

    /* Propriedades Fixas */
    width: 100%;
    min-width: 311px;
    height: 56px;
    padding: 16px;
    border: none;
    font-family: 'Inter';
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    transition: background-color 0.3s ease;
    letter-spacing: -0.032em;

    /* Daqui pra baixo as propriedade mudam conforme props de ICON passadas ao componente */
    ${({ icon }) => (icon.toLowerCase() !== 'no-icon') && css`

    /* Proibindo o botão de exister com apenas o icon, é preciso ter algum conteúdo junto. */
    ${(props) => {
        if (props.children === undefined) {
            throw new Error('The button should have at least an inner text to exist. It is important to highlight that there\'s no button with just an icon.');
        }
    }}

    display: flex;
    align-items: center;
    justify-content: space-between; 
    /* Aqui temos expressões ternarias aninhadas, basicamente a segue a regra:
    Primeira operação: se o icon for arrow-right, retorna o SVG arrow, se não manda pra outra operação ternária.
    Segunda operação: se o icon for check, retorna o SVG check, se não retorna o SVG refresh, o único que sobrou.
    a intenção NÃO é complicar o código, simplesmente acredito que foi uma boa solução. */
    &::after {
        content: url(
            ${({ icon }) => (icon.toLowerCase() === 'arrow-right' ? `${arrow}` : (icon.toLowerCase() === 'check' ? `${check}` : `${refresh}`))}
        );
        filter: ${({ color, disabled }) => ((color.toLowerCase() === 'secondary') && (!disabled)) ? 'invert(100%);' : 'none;'};
    }
  `}

    /* Daqui pra baixo as propriedade mudam conforme props de COLOR passadas ao componente */
    background-color: ${({ color }) => (color.toLowerCase() === 'secondary' ? '#F7C346' : '#026C00')};
    color: ${({ color }) => (color.toLowerCase() === 'secondary' ? '#000000' : '#FFFFFF')};

    &:hover { 
        background-color: ${({ color }) => (color.toLowerCase() === 'secondary' ? '#FFDF77' : '#079504')};
        cursor: pointer;
    }

    &:active {
        background-color: ${({ color }) => (color.toLowerCase() === 'secondary' ? '#DCAC0D' : '#013C00')};
    }

    &:disabled {
        background-color: ${({ color }) => (color.toLowerCase() === 'secondary' ? '#FFE58D' : '#B7D0B6')};
        color: #FFFFFF;
        cursor: default;
    }
`;

/* Definindo tipos e valores default de propriedades com propTypes */
Button.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
};

Button.defaultProps = {
    color: 'primary',
    icon: 'no-icon',
};
