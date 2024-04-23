/* eslint-disable prettier/prettier */
import { firebase } from '@react-native-firebase/auth';

export function addToFirebaseStorage(uid, userName, currentHive, prefDays,prefTasks,minTime,maxTime,hiveMembers) {
    var storageRef = firebase.storage().ref();
    var fileRef = storageRef.child(currentHive + ":" + userName);
    console.log(uid)
    const userItems = JSON.stringify({
        name: userName, userID: uid, numMember: hiveMembers, hiveID: currentHive,
        preferDays: prefDays, preferTasks: prefTasks,
        minTime: minTime, maxTime: maxTime
    });
    var blob = new Blob([userItems], { type: 'json' });
    fileRef.put(blob).then(function (snapshot) {
        console.log('------');
        console.log('File written to Storage');
    });
    console.log(userItems);
}
