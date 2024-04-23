/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import { Homestyles, check } from '../../styles';
import { useCurrentUserContext } from '../../hooks/CurrentUserContext';
import CheckBox from '@react-native-community/checkbox';
import style from '../../assets/style';
import { addToFirebaseStorage } from '../../functions';
import RNPickerSelect from 'react-native-picker-select';


export default function UserPrefScreen() {
  const [isSelectedM, setSelectionM] = useState(false);
  const [isSelectedT, setSelectionT] = useState(false);
  const [isSelectedW, setSelectionW] = useState(false);
  const [isSelectedTh, setSelectionTh] = useState(false);
  const [isSelectedF, setSelectionF] = useState(false);
  const [isSelectedSa, setSelectionSa] = useState(false);
  const [isSelectedSu, setSelectionSu] = useState(false);
  const [isSelectedKitch, setSelectionKitch] = useState(false);
  const [isSelectedBath, setSelectionBath] = useState(false);
  const [isSelectedLive, setSelectionLive] = useState(false);
  const [isSelectedAll, setSelectionAll] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTasks, setSeletedTasks] = useState([]);
  const { uid, profilePicURL, userName, currentHive, hiveName, hiveMembers } = useCurrentUserContext().values;
  
  const [selectedMinTime, setMinTime] = useState(null);
  const [selectedMaxTime, setMaxTime] = useState(null);
  var maxNum = hiveMembers.length;
    const placeHolderMin = {
      label: 'Select minimum avaliable time',
      value: null,
  };
  const placeHolderMax = {
    label: 'Select maximum avaliable time',
    value: null,
  };
  
    const dropdownMin = [
      { label: "06:30", value: 1 },
      { label: "07:00", value: 2 },
      { label: "07:30", value: 3 },
      { label: "08:00", value: 4 },
      { label: "08:30", value: 5 },
      { label: "09:00", value: 6 },
      { label: "9:30", value: 7 },
      { label: "10:00", value: 8 },
      { label: "10:30", value: 9 },
      { label: "11:00", value: 10 },
      { label: "11:30", value: 11 },
      { label: "12:00", value: 12 },
      { label: "12:30", value: 13 },
      { label: "13:00", value: 14 },
      { label: "13:30", value: 15 },
      { label: "14:00", value: 16 },
      { label: "14:30", value: 17 },
      { label: "15:00", value: 18 },
      { label: "15:30", value: 19 },
      { label: "16:00", value: 20 },
      { label: "16:30", value: 21 },
      { label: "17:00", value: 22 },
      { label: "17:30", value: 23 },
      { label: "18:00", value: 24 },
      { label: "18:30", value: 25 },
      { label: "19:00", value: 26 },
      { label: "19:30", value: 27 },
      { label: "20:00", value: 28 },
      { label: "20:30", value: 29 },
      { label: "21:00", value: 30 },
      { label: "21:30", value: 31 },
      { label: "22:00", value: 32 }
  ];

  const dropdownMax = [
    { label: "06:30", value: 1 },
    { label: "07:00", value: 2 },
    { label: "07:30", value: 3 },
    { label: "08:00", value: 4 },
    { label: "08:30", value: 5 },
    { label: "09:00", value: 6 },
    { label: "9:30", value: 7 },
    { label: "10:00", value: 8 },
    { label: "10:30", value: 9 },
    { label: "11:00", value: 10 },
    { label: "11:30", value: 11 },
    { label: "12:00", value: 12 },
    { label: "12:30", value: 13 },
    { label: "13:00", value: 14 },
    { label: "13:30", value: 15 },
    { label: "14:00", value: 16 },
    { label: "14:30", value: 17 },
    { label: "15:00", value: 18 },
    { label: "15:30", value: 19 },
    { label: "16:00", value: 20 },
    { label: "16:30", value: 21 },
    { label: "17:00", value: 22 },
    { label: "17:30", value: 23 },
    { label: "18:00", value: 24 },
    { label: "18:30", value: 25 },
    { label: "19:00", value: 26 },
    { label: "19:30", value: 27 },
    { label: "20:00", value: 28 },
    { label: "20:30", value: 29 },
    { label: "21:00", value: 30 },
    { label: "21:30", value: 31 },
    { label: "22:00", value: 32 }
];
 
  
  
  const checkBoxChange = (value) => {
    if (selectedDays.includes(value)) {
      setSelectedDays(selectedDays.filter(item => item !== value));
      console.log(selectedDays);

    } else {
      setSelectedDays([...selectedDays, value]);
      console.log(selectedDays);
    }
  };
  const taskPrefer = (value) => {
    if (selectedTasks.includes(value)) {
      setSeletedTasks(selectedTasks.filter(item => item !== value));
      console.log(selectedTasks);

    } else {
      setSeletedTasks([...selectedTasks, value]);
      console.log(selectedTasks);
    }
  };
  return (
   
    <View style={Homestyles.home.page}>

        <Text style={styles.label}>Select Minimum Avaliable Time</Text>
      <RNPickerSelect
        
            placeholder={placeHolderMin}
            items={dropdownMin}
            onValueChange={(value) => setMinTime(value)}
            value={selectedMinTime}
        /> 
      <Text style={styles.label}>Select Maximum Avaliable Time</Text>
        <RNPickerSelect
          placeHolder={placeHolderMax}
          items={dropdownMax}
          onValueChange={(value) => setMaxTime(value)}
          value={selectedMaxTime}
        />
        <View style={styles.container}>
          <View style={styles.checkBoxConatiner}>

            <CheckBox
                value={isSelectedM}
                tintColors={{ true: 'orange' , false:'white'}}
                onValueChange={() => {
                  console.log('Checkbox clicked');
                  checkBoxChange(1);
                  setSelectionM(() => {
                    return !isSelectedM;
                  });
                }}
            />
            <Text style={styles.label}>Monday</Text>
              <CheckBox
                value={isSelectedT}
                tintColors={{ true: 'orange' , false:'white'}}
                onValueChange={() => {
                  console.log('Checkbox clicked');
                  checkBoxChange(2);
                  setSelectionT(() => {
                    return !isSelectedT;
                  });
                }}
              
            />
            <Text style={styles.label}>Tuesday</Text>
            <CheckBox
                value={isSelectedW}
                tintColors={{ true: 'orange' , false:'white'}}
                onValueChange={() => {
                  console.log('Checkbox clicked');
                  checkBoxChange(3);
                  setSelectionW(() => {
                    return !isSelectedW;
                  });
                }}
            />
            <Text style={styles.label}>Wednesday</Text>
            <CheckBox
                value={isSelectedTh}
                tintColors={{ true: 'orange' , false:'white'}}
                onValueChange={() => {
                  console.log('Checkbox clicked');
                  checkBoxChange(4);
                  setSelectionTh(() => {
                    return !isSelectedTh;
                  });
                }}
            />
            <Text style={styles.label}>Thursday</Text>
            <CheckBox
                value={isSelectedF}
                tintColors={{ true: 'orange' , false:'white'}}
                onValueChange={() => {
                  console.log('Checkbox clicked');
                  checkBoxChange(5);
                  setSelectionF(() => {
                    return !isSelectedF;
                  });
                }}
            />
            <Text style={styles.label}>Friday</Text>
            <CheckBox
                value={isSelectedSa}
                tintColors={{ true: 'orange' , false:'white'}}
                onValueChange={() => {
                  console.log('Checkbox clicked');
                  checkBoxChange(6);
                  setSelectionSa(() => {
                    return !isSelectedSa;
                  });
                }}
            />
            <Text style={styles.label}>Saturday</Text>
            <CheckBox
                value={isSelectedSu}
                tintColors={{ true: 'orange' , false:'white'}}
                onValueChange={() => {
                  console.log('Checkbox clicked');
                  checkBoxChange(7);
                  setSelectionSu(() => {
                    return !isSelectedSu;
                  });
                }}
            />
            <Text style={styles.label}>Sunday</Text>

          </View>
          <View style={styles.checkBoxConatiner}>
            <CheckBox
                value={isSelectedKitch}
                tintColors={{ true: 'orange' , false:'white'}}
                onValueChange={() => {
                  console.log('Checkbox clicked');
                  taskPrefer('Kitchen');
                  setSelectionKitch(() => {
                    return !isSelectedKitch;
                  });
                }}
            />
            <Text style={styles.label}>Kitchen Tasks</Text>
            <CheckBox
                value={isSelectedLive}
                tintColors={{ true: 'orange' , false:'white'}}
                onValueChange={() => {
                  console.log('Checkbox clicked');
                  taskPrefer('Living Room');
                  setSelectionLive(() => {
                    return !isSelectedLive;
                  });
                }}
              
            />
            <Text style={styles.label}>Living Room Tasks</Text>
            <CheckBox
                onChange={() => taskPrefer('Bathroom')}
                value={isSelectedBath}
                tintColors={{ true: 'orange' , false:'white'}}
                onValueChange={() => {
                  console.log('Checkbox clicked');
                  taskPrefer('Bathroom');
                  setSelectionBath(() => {
                    return !isSelectedBath;
                  });
                }}
            />
            <Text style={styles.label}>Bathroom Tasks</Text>
            <CheckBox
                value={isSelectedAll}
                tintColors={{ true: 'orange' , false:'white'}}
                onValueChange={() => {
                  console.log('Checkbox clicked');
                  taskPrefer('All');
                  setSelectionAll(() => {
                    return !isSelectedAll;
                  });
                }}
            />
            <Text style={styles.label}>All Tasks</Text>
        <Button
              // Calls the function to add the current prefrences and users values to the storage location, to trigger the defined workflow
          onPress={() => addToFirebaseStorage(uid, userName, currentHive, selectedDays,selectedTasks,selectedMinTime,selectedMaxTime, maxNum)}
          title="update prefrences"
        />
          </View>

        </View>

      </View>
      

  );
}

//https://www.geeksforgeeks.org/how-to-create-a-custom-checkbox-component-in-react-native/
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center", 
    flexDirection: "row", 
    width: 150, 
    marginTop: 5, 
    marginHorizontal: 5,

  },
  checkboxContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  checkbox: {
    flexDirection:'row',
  },
  label: {
    margin: 8,
    color: "black",
  },
  timeValues: {
    width: 50,
    height:50,
  }
});
