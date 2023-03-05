import { Text,View,StyleSheet } from "react-native";

function List({data}){
   return   data.map((dataPoint)=>{
    return<View key={dataPoint} style={styles.listIrem}>
             <Text style={styles.itemText} >{dataPoint}</Text>
          </View>
})}

export default List;

const styles = StyleSheet.create({
  listIrem:{
    borderRadius:8,
    paddingHorizontal:8,
    paddingVertical:4,
    marginHorizontal:12,
    marginVertical:4,
    backgroundColor:'#e2b497'
  },
  itemText:{
    color:'#351401',
    textAlign:'center'
  }
})