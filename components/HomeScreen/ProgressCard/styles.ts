import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: '6%',
        marginTop: '10%',
        borderRadius: '8%',
        shadowOpacity: 0.08,
        shadowRadius: 6
    },
    main_text: {
        fontSize: 20
    },
    sub_text: {
        fontSize: 13,
        color: '#7F7F7F'
    },
    progress_bar_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    progress_bar_background: {
        flex: 1,
        height: 10,
        backgroundColor: '#00000014',
        borderRadius: 4,
        overflow: 'hidden',
        marginRight: 10
    },
    progress_bar: {
        width: '70%',
        height: '100%',
        backgroundColor: '#D4AF37',
        borderRadius: 4
    },
    progress_percentage_text: {
        fontSize: 16
    }
})