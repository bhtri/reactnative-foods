import { StyleSheet } from 'react-native';

import { COLORS } from '../../contains'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 15,
        paddingTop: 24,
        backgroundColor: COLORS.background
    },
    box: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#deaf89',
        borderRadius: 10,
        marginBottom: 20,
    },
})
