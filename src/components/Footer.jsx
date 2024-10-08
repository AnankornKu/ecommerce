import React from 'react'
import styled from 'styled-components'
import { Facebook,Instagram,Twitter,Pinterest,Room,Phone,MailOutline } from '@mui/icons-material'
import {mobile} from '../responsive'


const Container = styled.div`
display: flex;
${mobile({flexDirection:"column"})}
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``;
const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display:flex ;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;


`;



const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display:"none"})}

`

const Title = styled.h3`
    margin-bottom: 30px;

`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;


`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`


const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor:"#f8eeee"})}
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`

const Payment = styled.img`
width: 50%;
`


const Footer = () => {
  return (
    <Container>
    <Left>
        <Logo>Aunny Store</Logo>
        <Desc>
        There are many variations of passages of Lorem Ipsum available, but theses majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>
            <SocialIcon color ="E60023">
                <Pinterest />
            </SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
    <Title>Useful Links</Title>
    <List>
    
    <ListItem>Home</ListItem>
    <ListItem>Cart</ListItem>
    <ListItem>Men Fashion</ListItem>
    <ListItem>Women Fashion</ListItem>
    <ListItem>Accessories</ListItem>
    <ListItem>My Account</ListItem>
    <ListItem>Order Tracking</ListItem>
    <ListItem>Wishlist</ListItem>
    <ListItem>Wishlist</ListItem>
    <ListItem>Terms</ListItem>
    
    </List>
    
    </Center>

    <Right>
    <Title>Contact</Title>
    <ContactItem><Room style={{marginRight:"10px"}}/>
    123/4 Suanphlu Rd, Sathorn, Bangkok, 10120.
    </ContactItem>

    <ContactItem><Phone style={{marginRight:"10px"}}/>
    +66917893971
    </ContactItem>

    <ContactItem><MailOutline style={{marginRight:"10px"}}/>
    contact@aunnystore.com
    </ContactItem>

    <Payment src="https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png"/>
    
    </Right>


    </Container>
  )
}

export default Footer
