import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

type InputProps = {
    name: string;
    title: string;
    placeHolder: string;
    sub?: {
        placeHolder: string,
        buttonText: string
    };
};
  
function Input({name, title, placeHolder, sub}: InputProps) {
    return (
      <StyledInputWrap>
          <label htmlFor={name}>{title}</label>
          {sub ?
            <>
                <div>
                    <StyledInput name={name} placeholder={placeHolder}/>
                    <Button enable={false} size="13" margin="0 0 0 1rem">{sub.buttonText}</Button>
                </div>
                <StyledInput placeholder={sub.placeHolder}/>
            </>
            :<StyledInput name={name} placeholder={placeHolder}/>
          } 
      </StyledInputWrap>
    );
  }
  
export default Input;
  

const StyledInputWrap = styled.div`
    & + & {
        margin-top: 4.3rem;
    }
    label{
        display: block;
        font-size: 1.8rem;
        color: #343434;
        margin-bottom: 1.3rem;
    }
    >div{
        display: flex;
        margin-bottom: 1rem;
        input{
            flex: 1;
        }
    }
`;

const StyledInput = styled.input`
    width: 100%;
    height: 5rem;
    padding: 0 1.5rem;
    margin: 0;
    background-color: #f4f4f4;
    border: .1rem solid #f4f4f4;
    border-radius: 1rem;
    font-size: 1.5rem;
    outline: none;
    box-sizing: border-box;
    &:focus {
        border-color: #9732fc;
    }
    & + & {
        margin-top: 1rem;
    }
`;
  