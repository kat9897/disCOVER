import React from "react";
import { View, Text, StyleSheet } from "react-native";
 
// We use Route in order to define the different routes of our application
import { Route, NativeRouter, Link, Routes } from "react-router-native";
 
// We import all the components we need in our app
// import Navbar from "./components/navbar";
import PostingList from "./components/postingList";
import Edit from "./components/edit";
// import Create from "./components/create";
 
const App = () => {
 return (
   <View style={styles.container}>
     {/* <Navbar /> */}
     <Text style={styles.text}>Hello Griffin!</Text>
     <NativeRouter>
      <Routes>
       {/* <Route exact path="/" component={<PostingList />} /> */}
        <Route path="/edit/:id" component={<Edit />} />
       {/* <Route path="/create" component={<Create />} /> */}
      </Routes>
     </NativeRouter>
   </View>
 );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center", 
    alignContent: "center", 
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 40,
  },
})
 
export default App;