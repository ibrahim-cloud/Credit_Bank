import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Alert,
} from "react-native";
import ButtonShared from "../components/shared/ButtonShared";
import firebase from "../firebase";
const db = firebase.firestore();
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 0,
  },
  input: {
    borderRadius: 30,
    borderWidth: 1,
    marginTop: 20,
    minWidth: 360,
    minHeight: 30,
    padding: 10,
    paddingLeft: 15,
    borderWidth: 0.5,
    borderColor: "#FFF",
  },
  Heading: {
    color: "#ed3b45",
    fontWeight: "bold",
    fontSize: 20,
    
  },
  row: {
    flexDirection: "row",
  },
  topText: {
    marginLeft: 20,
    marginTop: 16,
  },
  image: {

    width:70,
    height: 140,

  }
});



function SignUpScreen(props) {

  const [firstName, onChangefirstName] = React.useState("");
  const [lastName, onChangelastName] = React.useState("");
  const [phone, onChangePhone] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [isSelected, setSelection] = React.useState(false);


  const [value, setValue] = useState("");
  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('validation')
      const data1 = JSON.parse(data);
      setValue(data1)
      if(value){
        console.log('data is exists')
      }
      console.log(value)
      if(value !== null) {
        console.log('====================================');
        console.log("data is added");
        console.log('====================================');
      }
    } catch(e) {
      // error reading value
    }
  }


  console.log(value);

  useEffect( () => {
     getData()
  }, [])
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.image} source={require("../assets/coordonnee.jpg")} />
        <View style={styles.topText}>
          <Text style={styles.Heading}>VALIDATION DE MES COORDONNÉES</Text>
          <Text>
           vérifier, puis valider vos informations
          </Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder={"Nom ..."}
        onChangeText={onChangefirstName}
        value={value.firstName}
      />
      <TextInput
        style={styles.input}
        placeholder={"Prénom ..."}
        onChangeText={onChangelastName}
        value={value.lastName}
      />
      <TextInput
        style={styles.input}
        placeholder={"Tél ..."}
        onChangeText={onChangePhone}
        value={value.phone}
      />
      <TextInput
        style={styles.input}
        placeholder={"Email..."}
        onChangeText={onChangeEmail}
        value={value.email}
      />
      <ButtonShared
        text="ALONS-Y!"
        onPress={() => {
          signUp();
        }}
      />
    </ScrollView>
  );
}

export default SignUpScreen;
