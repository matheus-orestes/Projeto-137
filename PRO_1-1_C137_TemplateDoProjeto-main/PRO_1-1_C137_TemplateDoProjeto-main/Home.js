import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      imagePath: "",
      url: "https://dc45-103-109-110-102.ngrok.io",
    };
  };

  getData = async () => {
    const { url } = this.state;
    axios
      .get(url)
      .then(response => {
        this.setState({listData: response.data.data
        });
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  }

  getStarDetails = (name) => {
    var color = ["#fbffd5", "#ffefff", "#ede5ff", "#eafff4"];
    var num = index % 4;
    return color[num];
  };


};
    