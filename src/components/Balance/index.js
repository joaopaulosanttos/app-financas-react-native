import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import { MotiView, MotiText } from 'moti';

export default function Balance({ deposit, expenses }) {
    return(
        <MotiView 
            style={styles.container}
            from={{
                rotateX: "-100deg",
                opacity: 0
            }}
            animate={{
                rotateX: "0deg",
                opacity: 1
            }}
            transition={{
                type: "timing",
                delay: 300,
                duration: 900
            }}
        > 

            {/* Left: conteúdo sobre o saldo bancario */}
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>
                        {deposit}
                    </Text>
                </View>
            </View>

             {/* Right: conteúdo sobre o gastos mensais */}
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>
                        {expenses}
                    </Text>
                </View>
            </View>

        </MotiView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -28,
        marginStart: 14,
        marginEnd: 14, 
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22, 
        zIndex: 99
    },
    item: {

    },
    itemTitle: {
        fontSize: 20,
        color: "#1F7A48"
    },
    content: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    currencySymbol: {
        color: "#1F7A48",
        marginRight: 5,
        fontWeight: "bold"
    },
    balance: {
        color: "#0CF07A",
        fontSize: 22,
    },
    expenses: {
        color: "#F00",
        fontSize: 22,
    }
});