import React from 'react'
import {
    Container,
    Text,
} from 'native-base'

import THeader from "./THeader";

export default class Successes extends React.Component {
    render() {

        return (
            <Container>
                <THeader title={'Successes'}/>
                <Text>Successes!!</Text>
            </Container>
        )
    }
}