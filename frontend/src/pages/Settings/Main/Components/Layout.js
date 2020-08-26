import * as React from 'react';
import { Button, Title, Paragraph, Avatar, List, Divider, Text } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import { ContentProfile } from '../Components/Content/Profile/ContentProfile';
import { ContentCursos } from '../Components/Content/Courses/ContentCursos';
import { ContentPagamentos } from '../Components/Content/Payments/ContentPagamentos';
import { ContentConta } from '../Components/Content/Account/ContentConta';
import { ContentTeacher } from '../Components/Content/Profile/TeacherProfile';


class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: "Perfil", subtitle: "", content: "esse é o conteúdo padrão", }
        this.changeTitle = this.changeTitle.bind(this)
    }

    changeTitle = (titleMenu, subtitleMenu, contentMenu) => {

        if (titleMenu == "Perfil" && subtitleMenu == "Aluno")
            contentMenu = <ContentProfile />
        else if (titleMenu == "Perfil" && subtitleMenu == "Professor")
            contentMenu = <ContentTeacher />
        else if (titleMenu == "Cursos" && subtitleMenu == "Certificados")
            contentMenu = <ContentCursos />
        else if (titleMenu == "Pagamentos")
            contentMenu = <ContentPagamentos />
        else if (titleMenu == "Conta")
            contentMenu = <ContentConta />
        else
            contentMenu = <ContentProfile />

        this.setState({
            title: titleMenu,
            subtitle: <Paragraph style={{ fontSize: '14px' }}>{subtitleMenu}</Paragraph>,
            content: contentMenu,
        });
    }

    render() {
        return (
            <View style={{ width: '100%', height: '100%', marginTop: '2px', alignSelf: 'center' }} >
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', flexWrap: 'wrap' }}>

                    <View style={{
                        width: '25%', height: '100%', backgroundColor: 'white', borderRightWidth: 0.1, borderColor: "lightgray",
                        borderBottomWidth: 0.1, borderTopWidth: 0.1, borderLeftWidth: 0.1
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

                        <List.Accordion
                            title="Perfil"
                            left={props => <List.Icon {...props} icon={require('../../../../assets/images/account-box.png')} />}>
                            <List.Item left={props =>
                                <List.Icon {...props} />}
                                title="Aluno" onPress={() => this.changeTitle("Perfil", "Aluno")} style={{
                                    cursor: 'pointer',
                                    backgroundColor: `#FFFAFA`
                                }} />
                            <List.Item style={{}} left={props =>
                                <List.Icon {...props} />}
                                title="Professor" onPress={() => this.changeTitle("Perfil", "Professor")} style={{
                                    cursor: 'pointer',
                                    backgroundColor: `#FFFAFA`
                                }} />

                        </List.Accordion>


                        <Divider />

                        <List.Accordion
                            title="Cursos"
                            left={props => <List.Icon {...props} icon={require('../../../../assets/images/book-open-page-variant.png')} />}>
                            <List.Item title="Certifficados" onPress={() => this.changeTitle("Cursos", "Certificados")} style={{ cursor: 'pointer' }} />
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
                            height: '12%', backgroundColor: 'white', borderRightWidth: 0.1, borderColor: "lightgray",
                            borderBottomWidth: 0.1, borderTopWidth: 0.1, borderLeftWidth: 0.1
                        }} >
                            <Title style={{ textAlign: 'center' }}>
                                {this.state.title}
                                <br />
                                {this.state.subtitle}
                            </Title>
                        </View>

                        {/* Título na div inferior - conteúdo */}
                        <View style={{
                            height: '88%', backgroundColor: 'white', alignItems: 'center', borderRightWidth: 0.1, borderColor: "lightgray",
                            borderBottomWidth: 0.1, borderTopWidth: 0.1, borderLeftWidth: 0.1
                        }} >
                            <ScrollView >
                                <View style={{ alignContent: 'right' }}>
                                    <Paragraph>
                                        {this.state.content}
                                    </Paragraph>
                                </View>
                            </ScrollView>
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