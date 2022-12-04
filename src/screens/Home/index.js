import { View, Text, StyleSheet, FlatList } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Actions from "../../components/Actions";
import Transactions from "../../components/Transactions";

import dataList from "../../dataList";

export default function Home() {
    return(
        <View style={styles.container}>
            <Header name="João P. Santos" />

            <Balance deposit="3.860,90" expenses="-687,45" />

            <Actions />

            <Text style={styles.itemTitle}>Últimas movimentações</Text>

            <FlatList 
                style={styles.list}
                data={dataList}
                keyExtractor={ (item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Transactions data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2"
    },
    itemTitle:{
        color: "#1F7A48",
        fontSize: 18, 
        fontWeight: "bold",
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    }
});