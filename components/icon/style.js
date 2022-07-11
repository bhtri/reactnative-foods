import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../contains'
const width = Dimensions.get('window').width - 30

export default styles = StyleSheet.create({
    container : {
        marginRight : 5,
        flexDirection : 'row',
        alignItems : 'center',
    },
    iconText : {
        fontSize : 16,
        fontWeight : 'bold',
        marginLeft : 10
    }
})
