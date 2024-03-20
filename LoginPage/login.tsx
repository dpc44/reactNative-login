import React, { Component } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { style } from './style/style';


class App extends Component {

    render() {
        return <View style={style.container}>
            <View style={style.container2}>
                <Text style={style.heading1}>Đăng Nhập</Text>
                <TextInput
                    placeholder='Tên Đăng Nhập'
                    style={style.marginx}
                />
                <TextInput
                    placeholder='Mật Khẩu'
                    style={style.marginx}
                />
                <TouchableOpacity

                    style={style.button2}
                >
                <Text>Đăng Nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}


export default App;


