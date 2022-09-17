import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Link } from 'react-router-dom'

const Container = styled.div`
   position: sticky;
   top: 0;
   background-color: ${({theme}) => theme.bgLighter};
   height: 56px
`

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   padding: 0px 20px;
   height: 100%;
   justify-content: flex-end;
   position: relative;
`

const Search = styled.div`
   position: absolute;
   left: 0px;
   right: 0px;
   margin: auto;
   display: flex;
   width: 40%;
   align-items: center;
   justify-content: space-between;
   padding: 5px;
   border: 1px solid #ccc;
   border-raduis: 3px;
`

const Input = styled.input`
   border: none;
   background-color: transparent;
   outline: none;
   width: 100%;
   padding-right: 10px;
   color: ${({theme}) => theme.text}
`

const Button = styled.button`
   padding: 5px 15px;
   background-color: transparent;
   border: 1px solid ${({theme}) => theme.text};
   color: ${({theme}) => theme.text};
   border-radius: 3px;
   font-weight: bold;
   margin-top:10px;
   cursor: pointer;
   margin-bottom: 10px;
   display: flex;
   align-items: center;
   gap:5px;
`

const index = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search Your Videos'/><SearchOutlinedIcon />
        </Search>
        <Link to="/signin" style={{textDecoration: "none"}}>
        <Button>SIGN IN</Button></Link>
      </Wrapper>
    </Container>
  )
}

export default index