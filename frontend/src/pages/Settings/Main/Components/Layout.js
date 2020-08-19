import * as React from 'react';
import { Divider, Text } from 'react-native-paper';
import { Button, Title, Paragraph, Avatar, List } from 'react-native-paper';
import { View } from 'react-native';
import { ContentProfile } from '../Components/Content/ContentProfile';
import { ContentCursos } from '../Components/Content/ContentCursos';
import { ContentPagamentos } from '../Components/Content/ContentPagamentos';
import { ContentConta } from '../Components/Content/ContentConta';



class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: "Perfil", subtitle: "", contentMenu: "esse é o conteúdo padrão", }
        this.changeTitle = this.changeTitle.bind(this)
    }

    changeTitle = (titleMenu, subtitleMenu, contentMenu) => {

        if (titleMenu == "Perfil")
            contentMenu = <ContentProfile />
        else if (titleMenu == "Cursos" && subtitleMenu == "First item")
            contentMenu = <ContentCursos />
        else if (titleMenu == "Pagamentos" && subtitleMenu == "Editar")
            contentMenu = <ContentPagamentos />
        else if (titleMenu == "Conta")
            contentMenu = <ContentConta />

        this.setState({
            title: titleMenu,
            subtitle: <Paragraph style={{ fontSize: '14px' }}>{subtitleMenu}</Paragraph>,
            content: contentMenu,
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
                                <Avatar.Image style={{ marginLeft: '15%', marginTop: '10%', marginBottom: '8%', cursor: 'pointer' }} size={64} source={require('../../../../assets/images/photoProfile.png')} />
                            </View>

                            <View style={{ marginTop: '10%', marginLeft: '8%' }}>
                                <Text>Vinícius Andrade</Text>
                            </View>

                        </View>
                        <Divider />
                        <List.Item left={props =>
                            <List.Icon {...props} icon={require('../../../../assets/images/account-box.png')} />}
                            title="Perfil" onPress={() => this.changeTitle("Perfil", "Adicione informações sobre você")} style={{ cursor: 'pointer' }} />

                        <Divider />

                        <List.Accordion
                            title="Cursos"
                            left={props => <List.Icon {...props} icon={require('../../../../assets/images/book-open-page-variant.png')} />}>
                            <List.Item title="First item" onPress={() => this.changeTitle("Cursos", "First item")} style={{ cursor: 'pointer' }} />
                        </List.Accordion>
                        <Divider />

                        <List.Item left={props => <List.Icon {...props} icon={require('../../../../assets/images/cash-usd-outline.png')} />}
                            title="Pagamentos" onPress={() => this.changeTitle("Pagamentos", "Edite a sua forma de pagamento")} style={{ cursor: 'pointer' }} />

                        <Divider />


                        <List.Item left={props => <List.Icon {...props} icon={require('../../../../assets/images/key-variant.png')} />}
                            title="Conta" onPress={() => this.changeTitle("Conta", "Edite suas configurações de conta")} style={{ cursor: 'pointer' }} />

                        <Divider />
                    </View>

                    {/* Título na div superior */}
                    <View style={{ width: '75%', height: '100%', alignSelf: 'stretch' }}>
                        <View style={{
                            height: '12%', backgroundColor: 'white', borderRightWidth: 0.5, borderTopWidth: 0.5,
                            borderLeftWidth: 0.5, borderBottomWidth: 0.5
                        }} >
                            <Title style={{ textAlign: 'center' }}>
                                {this.state.title}
                                <br />
                                {this.state.subtitle}
                            </Title>
                        </View>

                        {/* Título na div inferior - conteúdo */}
                        <View style={{
                            height: '88%', backgroundColor: 'white', borderRightWidth: 1, borderTopWidth: 1,
                            borderLeftWidth: 1, borderBottomWidth: 1,  alignItems: 'center',
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