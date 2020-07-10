import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";

function DialogComponent(props) {
  
  return (
      
    <View>
      <View>
        <Portal>
          <Dialog visible={props.dialogState} onDismiss={props.onDismiss}>
            <Dialog.Title>{props.title}</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{props.message}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={props.onDismiss}>Fechar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
}

export default DialogComponent;
