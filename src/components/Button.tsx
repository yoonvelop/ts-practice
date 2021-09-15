import React, { useState } from 'react';
import styled , { css }from 'styled-components';

type ButtonProps = {
    children: string;
    size: string;
    enable: boolean;
    margin: string;
};

function Button({children, size, enable, margin}: ButtonProps) {
    return (
      <StyledButton size={size} enable={enable} margin={margin}>{children}</StyledButton>
    );
  }

export default Button;
  

const StyledButton = styled.button<ButtonProps>`
    width: ${css`${(props: ButtonProps) => props.size === 'full' ? '100%' : props.size + 'rem'}`};
    height: ${css`${(props: ButtonProps) => props.size === 'full' ? '6rem' : '5rem'}`};
    margin: ${css`${(props: ButtonProps) => props.margin}`};
    font-size: ${css`${(props: ButtonProps) => props.size === 'full' ? '2rem':'1.5rem'}`};
    font-weight: 700;
    border-radius: ${css`${(props: ButtonProps) => props.size === 'full' ? '0 .8rem .8rem .8rem':'.8rem'}`};;
    border: none;
    color: #fff;
    outline: none;
    cursor: pointer;
    background: ${css`${(props: ButtonProps) => props.size === 'full' ? 'linear-gradient(90deg,#9732fc,#fc4c4c)' : '#333'}`};

    /*  버튼 비활성화 */
    ${props =>!props.enable && css`
        background: #555;
        border-color: #555;
        color: #999;
        cursor: default;
        pointer-events: none;
    `}
`;
  