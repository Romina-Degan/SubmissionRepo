/* eslint-disable prettier/prettier */
//Code taken from https://github.com/wix/react-native-calendars/tree/master
import React, { useEffect, useState } from 'react';
import { View,StyleSheet } from 'react-native';
import { Homestyles,check } from '../../styles';
import { H2, ModalButton } from '../../views';
import CheckBox from '@react-native-community/checkbox';
import TimetableDisplay from '../views/TimetableDisplay';
import style from '../../assets/style';
import { firebase } from '@react-native-firebase/auth';
import { useCurrentUserContext } from '../../hooks/CurrentUserContext';
import CreateTimetable from '../views/JSTimetable';


export default function TimetableDisplayScreen() {
    const [isSelected, setSelection] = useState(false);
    const [resultText, setResultText] = useState('');
    const { uid, profilePicURL, userName, currentHive, hiveName, hiveMembers } = useCurrentUserContext().values;
    return (
        <View style={Homestyles.home.page}>
                <View style={Homestyles.home.sectionContainer}>
                    <H2>Current Timetable</H2>
                <TimetableDisplay />

            </View>
        </View>
    );
}

