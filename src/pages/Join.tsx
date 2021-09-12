import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';

function Join() {
   
    return (
      <StyledPage>
        <h1>이메일로 가입하기</h1>
        <form>
            <Input name="email" title="이메일" placeHolder="abc@uphone.co.kr"/>
            <Input name="password" title="비밀번호" placeHolder="8~16자 영문, 숫자, 특수문자 사용"/>
            <Input name="passwordCheck" title="비밀번호 재확인" placeHolder="입력한 비밀번호와 동일"/>
            <Input name="name" title="이름" placeHolder="김유폰"/>
            <Input name="phone" title="휴대전화번호" placeHolder="010-1234-5678" sub={{placeHolder: "인증번호를 입력하세요", buttonText: "인증번호 받기"}}/>
            <Button enable={false} size="full" margin="4rem 0 0">회원가입</Button>
        </form>
      </StyledPage>
    );
  }

export default Join;

const StyledPage = styled.form`
    width: 40rem;
    margin: 5rem auto 16rem;
    h1{
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
`;