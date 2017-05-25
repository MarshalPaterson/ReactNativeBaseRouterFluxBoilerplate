import React, { Component } from 'react';
import { AppRegistry, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Button, Content, Grid, Row, Text } from 'native-base';

export default class PageTwo extends Component {
    render() {
        return (
           <Container>
                <Content justifyContent="center" alignItems="center" style={{ padding: 4, }}>
                    <Grid style={{ alignItems: 'center' }}>
                        <Row>
                            <Button onPress={Actions.pageOne}>
                                <Text>
                                    Button go to one
                                </Text>
                            </Button>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}
