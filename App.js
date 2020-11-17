
import React from "react";
import Components from "react";
import { StyleSheet, Text, View, AppRegistry, Switch, TouchableHighlight } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import { Album }  from './Album.js';
import Routes from './Routes.js';


//const Home = () => <Text style={styles.header}>Home</Text>;
//
//const About = () => <Text style={styles.header}>About</Text>;
//
//
//const Topic = ({ match }) => (
//  <Text style={styles.topic}>{match.params.topicId}</Text>
//);
//
//const Topics = ({ match }) => (
//  <View>
//
//    <Text style={styles.header}>Topics</Text>
//
//    <View>
//          <Link to={`${match.url}/rendering`} style={styles.subNavItem} underlayColor="#f0f4f7" >
//              <Text>Rendering with React</Text>
//           </Link>
//
//         <Link to={`${match.url}/components`} style={styles.subNavItem} underlayColor="#f0f4f7">
//            <Text>Components</Text>
//         </Link>
//
//       <Link to={`${match.url}/props-v-state`} style={styles.subNavItem} underlayColor="#f0f4f7">
//         <Text>Props v. State</Text>
//        </Link>
//
//    </View>
//
//    <Route path={`${match.path}/:topicId`} component={Topic} />
//
//    <Route  exact path={match.path}
//
//      render={() => (
//
//        <Text style={styles.topic}>Please select a topic.</Text>
//
//      )}
//
//    />
//
//  </View>s
//);
//
//const App = () => (
//  <NativeRouter>
//    <View style={styles.container}>
//      <View style={styles.nav}>
//        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
//          <Text>Home</Text>
//        </Link>
//        <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
//          <Text>About</Text>
//        </Link>
//
//        <Link
//          to="/topics"
//          underlayColor="#f0f4f7"
//          style={styles.navItem}
//        >
//          <Text>Topics</Text>
//        </Link>
//      </View>
//
//      <Route exact path="/" component={Home} />
//      <Route path="/about" component={About} />
//      <Route path="/topics" component={Topics} />
//    </View>
//  </NativeRouter>
//);
//
//const styles = StyleSheet.create({
//  container: {
//    marginTop: 25,
//    padding: 10
//  },
//  header: {
//    fontSize: 20
//  },
//  nav: {
//    flexDirection: "row",
//    justifyContent: "space-around"
//  },
//  navItem: {
//    flex: 1,
//    alignItems: "center",
//    padding: 10
//  },
//  subNavItem: {
//    padding: 5
//  },
//  topic: {
//    textAlign: "center",
//    fontSize: 15
//  }
//});



const Home = () => <Text style={styles.header}>Home</Text>;

class App extends React.Component {

render() {
      return (
         <Routes />
      )
   }
 }


const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  album: {
      textAlign: "center",
      fontSize: 15
    }


});




export default App