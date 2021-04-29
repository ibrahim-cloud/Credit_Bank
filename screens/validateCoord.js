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




  const [value, setvalue] = useState('');
  const [value1, setvalue1] = useState('');
  const [value2, setvalue2] = useState('');  
  const [value3, setvalue3] = useState('');
  const [value4, setvalue4] = useState('');
  const [value5, setvalue5] = useState('');
  const [value6, setvalue6] = useState('');


  useEffect(( ) => { 

    AsyncStorage.getItem('firstName')
 .then((value)=>{
     setvalue(value);
      });
      AsyncStorage.getItem('lastName')
      .then((value1)=>{
         setvalue1(value1);
          });
 
          AsyncStorage.getItem('phone')
          .then((value2)=>{
             setvalue2(value2);
         
         
              });

              AsyncStorage.getItem('email')
              .then((value3)=>{
                setvalue3(value3);
            
            
                 });

                 AsyncStorage.getItem('Montant')
                 .then((value4)=>{
                     setvalue4(value4);
                      });

                      AsyncStorage.getItem('DureeParMois')
                      .then((value5)=>{
                         setvalue5(value5);
                          });
                          AsyncStorage.getItem('mensualite')
                          .then((value6)=>{
                             setvalue6(value6);
                         
                         
                              });


 
     },[]);

     function AddDATA(){
  db.collection("Reservation").add({
        firstName:value ,
        lastName:value1 ,
        phone: value2,
        email:value3,
        Montant:value4,
        DureeParMois:value5,
        mensualite:value6,


      });
     }




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
        value={value}
        onChangeText={ value => {setvalue(value) }}
      />
      <TextInput
        style={styles.input}
        placeholder={"Prénom ..."}
        value={value1}
        onChangeText={ value1 => {setvalue1(value1) }}

      />
      <TextInput
        style={styles.input}
        placeholder={"Tél ..."}
        value={value2}
        onChangeText={ value2 => {setvalue2(value2) }}

      />
      <TextInput
        style={styles.input}
        placeholder={"Email..."}
        value={value3}
        onChangeText={ value3 => {setvalue3(value3) }}

      />
      <ButtonShared
        text="ALONS-Y!"
        onPress={() => {
          AddDATA();
        }}
      />
    </ScrollView>
  );
}

export default SignUpScreen;
