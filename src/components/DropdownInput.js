import React from 'react';
import { StyleSheet} from 'react-native';
import {windowHeight} from '../utils/Dimentions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';

// using: https://github.com/AdelRedaa97/react-native-select-dropdown#dropdownStyle

export default function DropdownInput({
    data
  }) {

  return(
    <SelectDropdown
    data={data}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    defaultButtonText={'  '}
    buttonTextAfterSelection={(selectedItem, index) => {
      return selectedItem;
    }}
    rowTextForSelection={(item, index) => {
      return item;
    }}
    buttonStyle={styles.dropdown1BtnStyle}
    buttonTextStyle={styles.dropdown1BtnTxtStyle}
    renderDropdownIcon={isOpened => {
      return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
    }}
    dropdownIconPosition={'right'}
    dropdownStyle={styles.dropdown1DropdownStyle}
    rowStyle={styles.dropdown1RowStyle}
    rowTextStyle={styles.dropdown1RowTxtStyle}
    //dropdownBackgroundColor= {styles.dropdown1OverlayColor}
    //dropdownOverlayColor={styles.dropdown1OverlayColor}
  />
  )

};

const styles = StyleSheet.create({
    dropdown1BtnStyle: {
      marginTop: 6, 
      marginBottom: 15, 
      width: '85%',
      height: windowHeight / 20,
      borderColor: '#ccc',
      backgroundColor: '#FFF',
      borderRadius: 8,
      borderWidth: 1,
      alignItems: 'center',
    },
    dropdown1BtnTxtStyle: {
        color: '#444', 
        textAlign: 'left', 
        fontFamily: 'Nunito_400Regular',
        fontSize: 16,
    },
    dropdown1DropdownStyle: {backgroundColor: '#FFF', borderRadius: 8},
    dropdown1RowStyle: {
        backgroundColor: '#FFF',
         borderBottomColor: '#ccc',
          borderRadius: 5},
    dropdown1RowTxtStyle: {
        color: '#444',
         textAlign: 'left',
         fontFamily: 'Nunito_400Regular',
         fontSize: 16,
        },
    //dropdown1OverlayColor: {color: '#FF0000'}

  });

  