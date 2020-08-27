import * as React from 'react';
import { Text, TextInput, Button, Title, Paragraph, Modal } from 'react-native-paper';
import { View } from 'react-native';

export class ContentTeacher extends React.Component {

    constructor(props) {
        super(props);
        this.state = { modalVisible: false }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal() {
        this.setState({
            modalVisible: true
        });
    }

    hideModal() {
        this.setState({
            modalVisible: false
        });
    }

    render() {

        return (

            <View>
                <View>
                    <View>
                        <Paragraph>Quais as vantagens?</Paragraph>
                    </View>

                    <View style={{ marginTop: "5%" }}>
                        <Paragraph>Você quer se tornar um instrutor?</Paragraph>
                        <Paragraph>Então clique no botão abaixo:</Paragraph>
                    </View>

                    <View style={{ marginTop: "2%" }}>
                        <Button mode="contained" style={{ cursor: "pointer" }} onPress={this.showModal} >Quero ser um instrutor</Button>
                    </View>
                </View >

                <Modal style={{ width: "900px", height: "900px", marginTop: "60px" }} visible={this.state.modalVisible} onDismiss={this.hideModal}>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>
                    <Text>Example Modal</Text>                  
                </Modal>
            </View>
        );
    }
}