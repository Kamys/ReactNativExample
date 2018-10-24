import React from 'react'
import {
    Container,
    Text,
    ListItem,
    Content,
    List,
    Icon,
    Right,
    Left,
} from 'native-base'

import THeader from "../THeader";

export default class ListItems extends React.Component {

    state = {
        selectedId: null,
    }

    static defaultProps = {
        title: 'Select item',
        items: [],
        onSelectItemId: () => {},
    }

    render() {
        const selectedId = this.state.selectedId;
        const { title, items, onSelectItemId } = this.props;

        return (
            <Container>
                <THeader title={title}/>
                <Content>
                    <List>
                        {
                            items.map(item => (
                                <ListItem
                                    key={item.value}
                                    onPress={onSelectItemId(item.value)}
                                    selected={selectedId === item.value}
                                >
                                    <Left>
                                        <Text>{item.label}</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward"/>
                                    </Right>
                                </ListItem>
                            ))
                        }
                    </List>
                </Content>
            </Container>
        )
    }
}