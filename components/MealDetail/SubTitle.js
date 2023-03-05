import { View,Text,StyleSheet } from "react-native";

function SubTitle({children}){
    return           <View style={styles.subTitleContainer}>
    <Text style={styles.subTitle}>{children}</Text>
 </View>
}

export default SubTitle;

const styles = StyleSheet.create({
    subTitle:{
        color:'white',
        fontSize: 18,
        fontWeight:'bold',
        margin:8,
       
    },
    subTitleContainer:{
        borderBottomColor:'white',
        borderBottomWidth:2,
        margin:8,marginHorizontal:24
    }
})