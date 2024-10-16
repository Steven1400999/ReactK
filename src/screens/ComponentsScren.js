import react from "react";
import { Text,Stylesheet } from "react-native";

const ComponentsScreen = ()=>{
    return(
        <Text style={styles.textStyle}>This is a Component.</Text>
    );
};

const styles = Stylesheet.create({
    textStyle:{
        fontSize:30
    }
});

export default ComponentsScreen;