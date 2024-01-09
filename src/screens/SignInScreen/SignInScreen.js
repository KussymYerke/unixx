import {View, Text, ScrollView} from "react-native";
import CustomInput from "../../components/CustomInput";
import {useState} from "react";
import {SIZES} from "../../../constants";
import CustomButton from "../../components/CustomButton";
import styles from "../SignUpScreen/signupscreen.style";

const SignInScreen = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn("Sign in");
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password")
    }

    return(
        <ScrollView>
            <View style={{alignItems: 'center', padding: SIZES.large}}>
                    <Text style={styles.title}>Вход</Text>
                        <CustomInput
                            placeholder={"Телефон или почта"}
                            value={login}
                            setValue={setLogin}
                        />
                        <CustomInput
                            placeholder={"Пароль"}
                            value={password}
                            setValue={setPassword}
                            secureTextEntry
                        />
                    <View style={{width: '100%', marginTop: 125}}>
                        <CustomButton
                            text={"Войти"}
                            onPress={onSignInPressed}
                        />
                        <CustomButton
                            text={"Забыли пароль?"}
                            onPress={onForgotPasswordPressed}
                            type={"TERTIARY"}
                        />
                    </View>
            </View>
        </ScrollView>
    )
}

export default SignInScreen;