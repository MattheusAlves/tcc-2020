
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Divider, Text } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import { List } from 'react-native-paper';
import { Button, Title, Paragraph, StyleSheet } from 'react-native-paper';
import { Dimensions, View } from 'react-native'
import Layout from '../Main/Components/Layout';

export default class Settings extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <Layout/>
    );
  };
}

