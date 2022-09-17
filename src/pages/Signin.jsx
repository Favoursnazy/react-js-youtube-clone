import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({theme}) => theme.text}
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.bgLighter};
  border: ${({theme}) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`

const Title = styled.h1`
  font-size: 24px
`

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300
`

const Input = styled.input`
  border: 1px solid ${({theme}) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  outline: none
`

const Button = styled.button`
  boder-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight:500;
  cursor: pointer;
  background-color: ${({theme}) => theme.soft};
  color: ${({theme}) => theme.textSoft};
`

const More = styled.div``


const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>To Continue to Favour Tube</SubTitle>
        <Input placeholder="Username" type="text" required/>
        <Input placeholder="Password" type="password" required/>
        <Button>Sign In</Button>
        <Title>Or</Title>
        <Input placeholder="Username" type="text" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <More></More>
      </Wrapper>
    </Container>
  )
}

export default Signin