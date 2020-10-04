import React, { useRef } from 'react';
import { Avatar } from 'react-native-paper';

const AvatarComponent = (props) => {

    let name = useRef(props.name.split(" ")).current
    if (name.length >= 2) {
        name = name[0].charAt(0).concat(name[1].charAt(0)).toUpperCase()
    } else {
        name = name[0].charAt(0)
    }

    return <Avatar.Text size={props.size} label={name} color={props.color} style={props.style} />


}

export default AvatarComponent;