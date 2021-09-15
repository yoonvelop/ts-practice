import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ValidateRule } from '../types/common';
import Button from './Button';

type InputProps = {
    name: string;
    title: string;
    placeHolder: string;
    sub?: {
        placeHolder: string,
        buttonText: string
    };
    validation?: ValidateRule[]
};

function Input({name, title, placeHolder, sub, validation}: InputProps) {

    const [validateRules, setValidateRules] = useState<ValidateRule[]>([]);
    const [text, setText] = useState('');
    const [errorText, setErrorText] = useState('');

    useEffect(()=>{
        initValidate();
    },[])

    useEffect(()=>{
        const errorMessage = validate()?.message;
        setErrorText(errorMessage?errorMessage:'');
    },[text])

    const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    };

    // 받아온 props로 체크할 유효성 규칙 넣기
    const initValidate = () => {
        setValidateRules(validation?validation:[])
    }

    // 체크할 유효성 filter로 돌려서 안 맞으면 첫번째 rule의 messege return 
    const validate = (): ValidateRule | null => {
        const invalidateRules = validateRules
          .filter(validateRule => validateRule.rule.test(text) !== validateRule.match);
          console.log(validateRules)
        return (invalidateRules.length > 0) ? invalidateRules[0] : null;
      }
  

    return (
      <StyledInputWrap>
          <label htmlFor={name}>{title}</label>
          {sub ?
            <>
                <div>
                    <StyledInput name={name} placeholder={placeHolder} value={text} onChange={()=>onChangeInputText}/>
                    <Button enable={false} size="13" margin="0 0 0 1rem">{sub.buttonText}</Button>
                </div>
                <StyledInput placeholder={sub.placeHolder}/>
            </>
            :<StyledInput name={name} placeholder={placeHolder} value={text} onChange={onChangeInputText}/>
          } 
          {errorText && <StyledErrorBox>{errorText}</StyledErrorBox> }
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

const StyledErrorBox = styled.p`
    margin: 0;
    padding: 1.2rem 0 1.3rem;
    font-size: 1.4rem;
    color: #fc4c4c;
`;
  
  