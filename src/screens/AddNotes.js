import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../component/Header'

function AddNotes({ navigation }) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDescription, setNoteDescription] = useState('')

    function onSaveNote() {
        navigation.state.params.addNote({ noteTitle, noteDescription })
        navigation.goBack()
    }

    return (
        <>
            <Header titleText='New Note' />
            
            <View style={styles.container}>
                <TextInput
                    label="Add Note Title"
                    value={noteTitle}
                    mode='flat'
                    onChangeText={setNoteTitle}
                    style={styles.title}
                />
                <TextInput
                    label="Add Note Description"
                    value={noteDescription}
                    onChangeText={setNoteDescription}
                    mode="flat"
                    multiline={true}
                    style={styles.text}
                    scrollEnabled={true}
                    returnKeyLabel='done'
                    blurOnSubmit={true}
                />
                <FAB
                    style={styles.fab}
                    small
                    icon="check"
                    disabled={noteTitle == '' ? true : false}
                    onPress={() => onSaveNote()}
                />
            </View>
            <IconButton
                icon="close"
                size={25}
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
            />
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    iconButton: {
        // backgroundColor: '#219653',
        position: 'absolute',
        
        top: 0,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 25,
    },
    text: {
        height: 350,
        fontSize: 16
    },

    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor: '#219653'
    }

})

export default AddNotes