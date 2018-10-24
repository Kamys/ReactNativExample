import React from 'react'
import {
    Header,
    Button,
    Icon,
    Title,
    Left,
    Body,
    Right,
} from 'native-base'
import {withNavigation} from "react-navigation";

class THeader extends React.Component {
    render() {

        const { goBack } = this.props.navigation;
        const { title } = this.props;

        return (
            <Header>
                <Left>
                    <Button onPress={() => goBack()} transparent>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu'/>
                    </Button>
                </Right>
            </Header>
        )
    }
}

export default withNavigation(THeader);