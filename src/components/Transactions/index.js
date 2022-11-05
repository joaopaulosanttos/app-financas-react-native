import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { MotiView, AnimatePresence, MotiText } from 'moti';

export default function Transactions({data}) {
    const [showValue, setShowValue] = useState(false);

    const handleClickValue = () => {
        setShowValue(!showValue);
    }

    return(
        <TouchableOpacity style={styles.container} onPress={handleClickValue}>
            <Text style={styles.date}>{data.date}</Text>

            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>

                {showValue ? (
                    <AnimatePresence exitBeforeEnter>
                        <MotiText 
                            style={data.type === 1 ? styles.value : styles.espenses}
                            from={{
                                translateX: 100

                            }}
                            animate={{
                                translateX: 0
                            }}
                            transition={{
                                type: "spring",
                                duration: 500
                            }}
                        >

                            R$ {data.type === 1 ? `${data.value}` : ` - ${data.value}` }
                        </MotiText>
                    </AnimatePresence>
                    ) : (
                    <AnimatePresence exitBeforeEnter>
                        <MotiView 
                            style={styles.hidevalue}
                            from={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                type: "timing"
                            }}
                        >
                        </MotiView>
                    </AnimatePresence>
                    )
                }

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: "#1F7A48"
    },
    date: {
        color: "#89FABC",
        fontWeight: "bold"
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 2,
        marginBottom: 8
    },
    label: {
        fontWeight: "bold",
        fontSize: 16
    },
    value: {
        fontSize: 16,
        color: "#0CF07A",
        fontWeight: "bold"
    },
    espenses: {
        fontSize: 16,
        color: "#F00",
        fontWeight: "bold"
    },
    hidevalue: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: "#0CF07A",
        borderRadius: 5
    }
});