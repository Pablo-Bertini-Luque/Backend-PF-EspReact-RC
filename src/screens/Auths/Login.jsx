import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFormik } from "formik";
import * as Yup from "yup";
import { stylesGral } from "../../css/Theme";
import { CustomconInput } from "../../components/CustomImputs";
import { AuthContext } from "../../contexts/AuthContext";
import { CustomModal } from "../../components/CustomModal";
import { CustumErrorInput } from "../../components/CustumErrorInput";

export const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      contraseña: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El formato del email es incorrecto")
        .required("El email es requerido"),
      contraseña: Yup.string()
        .required("Debe ingresar su contraseña")
        .min(6, "La contraseña debe tener minimo de 6 carateres"),
    }),
    onSubmit: (values) => {
      login(formik.values.email, formik.values.contraseña);
    },
  });

  return (
    <>
      <SafeAreaView style={stylesGral.safeAreaView}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.logo}
              source={require("../../../assets/splash.png")}
            />
            <Text style={styles.text}>Padel per Tutti</Text>
          </View>
          <View style={{ flex: 1, marginTop: 50 }}>
            <TextInput
              style={stylesGral.input}
              placeholder="Email"
              placeholderTextColor="grey"
              autoComplete="email"
              name="email"
              onChangeText={(value) =>
                formik.setFieldValue("email", value.toLowerCase())
              }
            />
            {formik.errors.email && (
              <CustumErrorInput message={formik.errors.email} />
            )}

            <CustomconInput name={"contraseña"} formik={formik} />
          </View>
          <View style={styles.button}>
            <View>
              <Button title="Ingresar" onPress={formik.handleSubmit} />
            </View>
            <View style={{ marginTop: 40 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={{ color: "white", textAlign: "center" }}>
                  REGISTRARSE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
  button: {
    flex: 1,
    alignSelf: "center",
    width: 150,
  },
});
