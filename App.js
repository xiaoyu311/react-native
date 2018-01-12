// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Na
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
import React, { Component } from 'react';
import { Text, Image, View, WebView } from 'react-native';

class Person extends Component {

  state = {
    showText: true
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState(preState => {
        return { showText: !preState.showText };
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    this.inputText = this.state.url;
    let { showText } = this.state;
    let display = showText ? this.props.name : ' ';
    return (
      <View>
        <Text>hello world! {display}</Text>
      </View>
    )
  }
}

export default class App extends Component {
  render() {
    // let pic = {
    //   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // }
    // let data = {
    //   src: require('./images/one.png')
    // }
    return (
      <View style={{ alignItems: 'center' }}>
        <Person name="child" />
        <Person name="children" />
      </View>
    )
  }
}