import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, KeyboardAvoidingView, Platform,} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Loja = () => {
  const navigation = useNavigation();

  function handleNavigationToCart() {
    navigation.navigate("Cart");
  }

  function handleNavigationToProfile() {
    navigation.navigate("Profile");
  }
  
  function handleNavigationToItens() {
    navigation.navigate("Itens");
  }

  function handleNavigationToNotification() {
    navigation.navigate("Notification");
  }

  function handleNavigationToCompras() {
    navigation.navigate("Compras");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container} >
        <View style={styles.header}>
          <View style={styles.foto}>
            <Icon name="user" color="#FFF" size={24} />
          </View>
          <View style={styles.pesquisa}>
            
          <Icon name="search" color="#000" size={24} />
          </View>
          <RectButton style={styles.carrinho} onPress={handleNavigationToCart} >
            <View style={styles.carrinho}>
              <Text>
                <Icon name="settings" color="#FFF" size={24} />
              </Text>
            </View>
          </RectButton>
         </View>
          
        <View style={styles.main}> 
          <View style={styles.retangulo}>

            <Text style={styles.title}>
              Últimos Lançamentos
            </Text>
          
          </View>
          
          <View style={styles.all}> 
            <RectButton style={styles.cartaz2} >
              <View style={styles.escrita}>
                <Text style={styles.descricao}>Recolhidos:</Text>
                <Text style={styles.descricao}>Dia: 10/12/2019 Valor; 203,00</Text>
                <Text style={styles.descricao}>Dia: 10/12/2019 Valor; 203,00</Text>
                <Text style={styles.descricao}>Dia: 10/12/2019 Valor; 203,00</Text>
                <Text style={styles.descricao}>Dia: 10/12/2019 Valor; 203,00</Text>
                <Text style={styles.descricao}>Dia: 10/12/2019 Valor; 203,00</Text>
                <Text style={styles.descricao}>Dia: 10/12/2019 Valor; 203,00</Text>
              </View>
              </RectButton>
            <RectButton style={styles.cartaz2} >
            <View style={styles.escrita}>
            <Text style={styles.descricao}>Gastos:</Text>
                <Text style={styles.descricao}>Dia: 10/12/2019 Valor; 203,00</Text>
                <Text style={styles.descricao}>Dia: 10/12/2019 Valor; 203,00</Text>
                <Text style={styles.descricao}>Dia: 10/12/2019 Valor; 203,00</Text>
                <Text style={styles.descricao}>Dia: 10/12/2019 Valor; 203,00</Text>
                <Text style={styles.descricao}>Dia: 10/12/2019 Valor; 203,00</Text>
                <Text style={styles.descricao}>Dia: 10/12/2019 Valor; 203,00</Text>
            </View>
            </RectButton>
          </View>          
        </View>

        <View style={styles.footer}> 
        <RectButton style={styles.button} onPress={handleNavigationToItens}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="home" color="#FFF" size={24} />
              </Text>
            </View>
          </RectButton>
          <RectButton style={styles.button} onPress={handleNavigationToProfile}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="user" color="#FFF" size={24} />
              </Text>
            </View>
          </RectButton>
          <RectButton style={styles.button} onPress={handleNavigationToCompras}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="shopping-bag" color="#FFF" size={24} />
              </Text>
            </View>
          </RectButton>
          <RectButton style={styles.button} onPress={handleNavigationToNotification}>
            <View style={styles.buttonIcon} >
              <Text>
                <Icon name="bell" color="#FFF" size={24} />
              </Text>
            </View>
          </RectButton>

        </View>
      
      </View>
    </KeyboardAvoidingView>
  );
};

export default Loja;

const styles = StyleSheet.create({

  cartaz2: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    padding: 20,
    height: 170,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    width: 330,
    marginTop: 60,
  },

  escrita: {
    flexDirection: "column",
  },

  descricao: {
    color: "#000",
    fontSize: 19,
    maxWidth: 250,
    margin: 3,
    textAlign: "left",
    marginLeft: 15,
  },

  loja: {
    width: 360,
    height: 200,
  },

  foto: {
      height: 40,
      width: 40,
      borderRadius: 50,
      backgroundColor: "#D9298A",
      justifyContent: "center",
      alignItems: "center",
  },

  pesquisa: {
    width: 230,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#FFF",
    alignItems:"flex-end",
    paddingRight: 10,
  },

  retangulo: {
    height: 40,
    width: 360,
    backgroundColor: "#D9298A",
  },

  carrinho :{
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#D9298A",
    justifyContent: "center",
    alignItems: "center",
},

  container: {
    flex: 1,
    padding: 100,
    backgroundColor: '#420B59',
    flexDirection: "column",
    alignItems: "center",
  },

  main: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
  },

  title: {
    width: 360,
    padding: 5,
    height: 40,
    color: "#FFF",
    fontSize: 24,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 0,
    textAlign: "center",
    alignSelf: "center",
  },

  title2: {
    color: "#FFF",
    fontSize: 17,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 5,
    textAlign: "center",
  },

  imagem: {
    alignSelf: "center",
  },

  header: {
    backgroundColor: "#E0BBE4",
    position: "absolute",
    width: 360,
    height: 120,  
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },

  footer: {
    backgroundColor: "#E0BBE4",
    position: "absolute",
    width: 360,
    height: 60,  
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  all: {
    width: 360,
    height: 1000,
    backgroundColor: "#FFF",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#D9298A",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    overflow: "hidden",
    width: 50,
  },

  buttonIcon: {
    height: 50,
    width: 50,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },

 
});
