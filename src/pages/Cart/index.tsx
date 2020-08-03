import React, { useState } from "react";
import axios from "axios";
import { View, StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, Platform,} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
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

  function handleNavigationToPagamento() {
    navigation.navigate("Pagamento");
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
              Dúvidas e Configurações
            </Text>
          
          </View>
          
          <ScrollView>
          <View style={styles.all}> 

              <RectButton style={styles.cartaz2} >
              <View style={styles.escrita}>
                <Text style={styles.descricao}> - Configurações de Contato</Text>
                <Text style={styles.descricao}> - Está atuando em outro nicho?</Text>
                <Text style={styles.descricao}> - Conectar com outra conta</Text>
              </View>
              </RectButton>
              <RectButton style={styles.cartaz2} >
              <View style={styles.escrita}>
                <Text style={styles.descricao}>Você sabia o que é a taxa selic?</Text>
                <Text style={styles.descricao}>No Brasil, a taxa Selic é a taxa média ajustada dos financiamentos diários apurados no Sistema Especial de Liquidação e de Custódia para títulos federais</Text>
              </View>
              </RectButton>
              <RectButton style={styles.cartaz2} >
              <View style={styles.escrita}>
              <Text style={styles.descricao}>Você sabia o que é a taxa selic?</Text>
                <Text style={styles.descricao}>No Brasil, a taxa Selic é a taxa média ajustada dos financiamentos diários apurados no Sistema Especial de Liquidação e de Custódia para títulos federais</Text>
              </View>
              </RectButton>
              <RectButton style={styles.cartaz2} >
              <View style={styles.escrita}>
              <Text style={styles.descricao}>Você sabia o que é a taxa selic?</Text>
                <Text style={styles.descricao}>No Brasil, a taxa Selic é a taxa média ajustada dos financiamentos diários apurados no Sistema Especial de Liquidação e de Custódia para títulos federais</Text>
              </View>
              </RectButton>
              <RectButton style={styles.cartaz2} >
              <View style={styles.escrita}>
              <Text style={styles.descricao}>Você sabia o que é a taxa selic?</Text>
                <Text style={styles.descricao}>No Brasil, a taxa Selic é a taxa média ajustada dos financiamentos diários apurados no Sistema Especial de Liquidação e de Custódia para títulos federais</Text>
              </View>
              </RectButton>
              <RectButton style={styles.cartaz2} >
              <View style={styles.escrita}>
              <Text style={styles.descricao}>Você sabia o que é a taxa selic?</Text>
                <Text style={styles.descricao}>No Brasil, a taxa Selic é a taxa média ajustada dos financiamentos diários apurados no Sistema Especial de Liquidação e de Custódia para títulos federais</Text>
             </View>
              </RectButton>
          </View>          
          </ScrollView>
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

export default Cart;

const styles = StyleSheet.create({

  cartaz2: {
    backgroundColor: "#420B59",
    flexDirection: "row",
    padding: 20,
    height: 170,
    borderRadius: 10,
    alignItems: "center",
    width: 330,
    marginTop: 13,
  },

  escrita: {
    flexDirection: "column",
  },

  descricao: {
    color: "#FFF",
    fontSize: 15,
    maxWidth: 200,
    margin: 3,
    textAlign: "left",
    marginLeft: 15,
  },
 
  descricao2: {
    color: "#FFF",
    fontSize: 15,
    maxWidth: 200,
    marginTop: 15,
    textAlign: "center",
    marginLeft: 0,
    fontWeight: "bold",
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
    paddingTop: 100,
    backgroundColor: 'rgba(1,1,1,0.0)',
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
    fontSize: 20,
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
    height: 1500,
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

  button2: {
    backgroundColor: "#D9298A",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    overflow: "hidden",
    width: 150,
    textAlign: "center",
    position: "absolute",
    bottom: 70,
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
