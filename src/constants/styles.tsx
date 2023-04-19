"use strict";
import { StyleSheet } from "react-native";
import { Colors } from "./colors";

export const screenStyle = StyleSheet.create({
  default: {
    backgroundColor: Colors.primaryMedium,
  },
  rootContainer: {
    flex: 1,
    padding: 32,
    backgroundColor: Colors.primaryMedium,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  welcomeText: {
    padding: 6,
  },
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primaryDark,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },


});

export const buttonStyles = StyleSheet.create({
  buttons: {
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: Colors.primaryMedium,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: 16
  },
  flatButton: {
    backgroundColor: 'none'
  },
  iconButton: {
    margin: 8,
    borderRadius: 20,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 16,
  },
})

export const inputStyles = StyleSheet.create({
  inputContainer: {
    marginVertical: 0,
  },
  label: {
    color: 'white',
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    backgroundColor: Colors.primaryLight,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});