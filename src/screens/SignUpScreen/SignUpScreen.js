import {View, Text, ScrollView} from "react-native";
import CustomInput from "../../components/CustomInput";
import {useState} from "react";
import {SIZES} from "../../../constants";
import CustomButton from "../../components/CustomButton";
import styles from './signupscreen.style';

const SignUpScreen = () => {

    const [email, setEmail] = useState('');

    const onRegisterPressed = () => {
        console.warn("Sign up process");
    }

    return(
        <ScrollView>
            <View style={{alignItems: 'center', padding: SIZES.large}}>
                <Text style={styles.title}>Регистрация</Text>
                <CustomInput
                    placeholder={"Почта"}
                    value={email}
                    setValue={setEmail}
                />
                <Text>Уже есть аккаунт? Войти</Text>
                <View style={{width: '100%', margin: 225}}>
                    <CustomButton
                        text={"Продолжить"}
                        onPress={onRegisterPressed}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUpScreen;