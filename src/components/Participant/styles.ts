import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',        
        backgroundColor: '#1F1E25',    
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',  
        marginBottom: 10      
        // justifyContent: 'center',    
    },
    name: {
        color: '#6B6B6B',
        flex: 1,
        marginLeft: 16,
        fontSize: 16,
    },
    buttonText:{
        fontSize: 42,
        color: '#FFF',
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center'
    },
})