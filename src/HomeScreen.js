import React from 'react'
import {
    Container,
    Text,
    Button,
    Content,
    Icon,
} from 'native-base'

import THeader from "./THeader";
import {faculties} from "./Api";

export default class HomeScreen extends React.Component {

    navigateSelectFaculties = () => {
        const {navigate} = this.props.navigation;
        navigate('Steps', {items: faculties})
    }

    render() {

        return (
            <Container>
                <THeader/>
                <Content>
                    <Button style={{margin: 5}} onPress={this.navigateSelectFaculties} iconLeft>
                        <Icon name='home'/>
                        <Text>Select</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}