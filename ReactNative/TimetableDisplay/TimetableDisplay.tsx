/* eslint-disable prettier/prettier */

import React, {useCallback, useRef,useContext, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import {useCurrentUserContext} from '../../hooks/CurrentUserContext';
// import firestore from '@react-native-firebase/firestore';
import {Homestyles} from '../../styles';
import {ButtonFullWidth, H2} from '../../views';
import { agendaTasks, getMarkedDates } from '../types/agendaTasks';
import AgendaReactItems from '../types/AgendaReactItems';

import {ExpandableCalendar, WeekCalendar, CalendarProvider,AgendaList} from 'react-native-calendars';
import CalendarStruct from '../types/CalendarStruct';
import { addToFirebaseStorage } from '../../functions/addVals';

//The current issue is that the way that the modal is called and the way that its used is not compatiable with the
//way that the react hook needs to be called

const ITEMS: any[] = agendaTasks;

console.log(ITEMS[1]);
interface Props{
    weekView?: boolean;
}

type User ={
    children?: React.ReactNode

}
const UserComponent = () => {
    const currentUser = useCurrentUserContext() as { values: User };
    console.log(currentUser);
};

export default function TimetableDisplay({ setModalVisible = () => { }, duid }, props: Props) {

    const { weekView } = props;
    const marked = useRef(getMarkedDates());
    const renderItem = useCallback(({ item }: any) => {
        return <AgendaReactItems item={item} />;
    }, []);

    const onDateChanged = useCallback((date, UpdateSource) => {
        console.log('ExpendableCalenderScreen onDateChanged: ', date, UpdateSource);
    }, []);
    return (
    
        <View style={Homestyles.home.page}>
                <View style={Homestyles.home.sectionContainer}>
                    <CalendarProvider
                        date={ITEMS[1]?.title}
                        onDateChanged={onDateChanged}
                        showTodayButton
                    >
                        {weekView ? (
                            <WeekCalendar testID={CalendarStruct.weekCalendar.CONTAINER} firstDay={1} markedDates={marked.current} />
                        ) : (
                            <ExpandableCalendar
                                testID={CalendarStruct.expandableCalendar.CONTAINER}
                                firstDay={1}
                                markedDates={marked.current}
                                initialPosition={ExpandableCalendar.positions.OPEN}
                            />
                        )}
                        <AgendaList
                            sections={ITEMS}
                            renderItem={renderItem}
                            sectionStyle={styles.section}
                        />
                </CalendarProvider>
            </View>
            <ButtonFullWidth title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
    );
}
const styles = StyleSheet.create({
    section: {
        backgroundColor: '#FFDD41',
        color: 'grey',
        textTransform: 'capitalize',
    },
});


