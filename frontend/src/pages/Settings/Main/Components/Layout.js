import * as React from 'react';
import { Divider, Text } from 'react-native-paper';
import { Button, Title, Paragraph, Avatar, List  } from 'react-native-paper';
import { View } from 'react-native';
import { ContentProfile, ContentCursos, ContentPagamentos, ContentConta } from '../Components/Content';

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: "Perfil", subtitle: "", content: "esse é o conteúdo padrão", }
        this.changeTitle = this.changeTitle.bind(this)
    }

    changeTitle = (titleMenu, subtitleMenu) => {

        if (titleMenu == "Perfil" && subtitleMenu == "Editar")
            subtitleMenu = <ContentProfile />
        else if (titleMenu == "Cursos" && subtitleMenu == "First item")
            subtitleMenu = <ContentCursos />
        else if (titleMenu == "Pagamentos" && subtitleMenu == "Editar")
            subtitleMenu = <ContentPagamentos />
        else if (titleMenu == "Conta" && (subtitleMenu == "First item" || subtitleMenu == "Excluir"))
            subtitleMenu = <ContentConta />

        this.setState({
            title: titleMenu,
            subtitle: subtitleMenu,
            content: subtitleMenu,
        });
    }

    render() {
        return (
            <View style={{ width: '60%', height: '90%', marginTop: '2px', alignSelf: 'center' }} >
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', flexWrap: 'wrap' }}>

                    <View style={{
                        width: '25%', height: '100%', borderRightWidth: 0.5, borderTopWidth: 0.5
                        , borderLeftWidth: 0.5, borderBottomWidth: 0.5, backgroundColor: 'white'
                    }} >
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Avatar.Image style={{ marginLeft:'15%', marginTop:'10%', marginBottom:'8%', cursor:'pointer' }} size={64} source={require('../../../../assets/images/photoProfile.png')} />
                            </View>

                            <View style={{ marginTop:'10%', marginLeft:'8%'}}>
                                <Text>Vinícius Andrade</Text>
                            </View>

                        </View>
                        <Divider/>
                        <List.Accordion
                            title="Perfil"
                            left={props => <List.Icon {...props} icon={require('../../../../assets/images/account-box.png')} />}>
                            <List.Item title="Editar" subtitle="Perfil" onPress={() => this.changeTitle("Perfil", "Editar")} style={{ cursor: 'pointer' }} />
                        </List.Accordion>
                        <Divider />

                        <List.Accordion
                            title="Cursos"
                            left={props => <List.Icon {...props} icon={require('../../../../assets/images/book-open-page-variant.png')} />}>
                            <List.Item title="First item" subtitle="Cursos" onPress={() => this.changeTitle("Cursos", "First item")} style={{ cursor: 'pointer' }} />
                        </List.Accordion>
                        <Divider />

                        <List.Accordion
                            title="Pagamentos"
                            left={props => <List.Icon {...props} icon={require('../../../../assets/images/cash-usd-outline.png')} />}>
                            <List.Item title="Editar" subtitle="Pagamentos" onPress={() => this.changeTitle("Pagamentos", "Editar")} style={{ cursor: 'pointer' }} />
                        </List.Accordion>
                        <Divider />

                        <List.Accordion
                            title="Conta"
                            left={props => <List.Icon {...props} icon={require('../../../../assets/images/key-variant.png')} />}>
                            <List.Item title="First item" subtitle="Conta" onPress={() => this.changeTitle("Conta", "First item")} style={{ cursor: 'pointer' }} />
                            <List.Item title="Excluir" subtitle="Conta" onPress={() => this.changeTitle("Conta", "Excluir")} vstyle={{ cursor: 'pointer' }} />
                        </List.Accordion>
                        <Divider />
                    </View>

                    {/* Título na div superior */}
                    <View style={{ width: '75%', height: '100%', alignSelf: 'stretch' }}>
                        <View style={{
                            height: '10%', backgroundColor: 'white', borderRightWidth: 0.5, borderTopWidth: 0.5,
                            borderLeftWidth: 0.5, borderBottomWidth: 0.5
                        }} >
                            <Title style={{ textAlign: 'center' }}>
                                {this.state.title}
                            </Title>
                        </View>

                        {/* Título na div inferior - conteúdo */}
                        <View style={{
                            height: '91%', backgroundColor: 'white', borderRightWidth: 1, borderTopWidth: 1,
                            borderLeftWidth: 1, borderBottomWidth: 1
                        }} >
                            <Paragraph>
                                {this.state.content}
                            </Paragraph>
                        </View>
                    </View>

                </View>

                <Button icon={require('../../../../assets/images/subdirectory-arrow-left.png')}>
                    Voltar
      </Button>
            </View>
        );
    };
}

export default Layout;