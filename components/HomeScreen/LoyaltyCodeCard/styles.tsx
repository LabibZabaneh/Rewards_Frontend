import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        marginTop: '10%',
        borderRadius: '10%',
        padding: '10%',
        shadowOpacity: 0.08,
        shadowRadius: 6
    },
    header: {
        textAlign: 'center',
        marginBottom: '7%',
        fontSize: 18 ,
        color: '#7F7F7F',
        fontWeight: 'bold'
    },
    sub_text: {
        textAlign: 'center',
        fontSize: 15,
        color: '#7F7F7F'
    },
    digits_container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: '5%'
    }
})