import React from 'react'
// import Container from 'react-bootstrap/esm/Container';
import { Container, HomeHeaderContainer } from '../components/Styles/Container/Container.style'
import { HeaderH1, HeaderP } from '../components/Styles/Font/Font.style';
import TabElements from '../components/Tab/TabElements';

const HomeScreen = () => {
    return (
        <Container>
            <HomeHeaderContainer>

                <HeaderH1>Welcome to CZ-PUNK</HeaderH1>
                <HeaderP>Check out the latest posts below</HeaderP>

            </HomeHeaderContainer>
            
            <TabElements />
            
        </Container>
    )
}

export default HomeScreen;