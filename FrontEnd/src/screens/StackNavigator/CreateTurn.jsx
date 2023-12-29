import React, { useContext, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFormik } from "formik";
import * as Yup from "yup";
import { stylesGral } from "../../css/Theme";
import { CustomModalSucces } from "../../components/CustomModalSucces";
import { CustumErrorInput } from "../../components/CustumErrorInput";
import { CustomModal } from "../../components/CustomModal";
import { TurnsContext } from "../../contexts/TurnsContext";

export const CreateTurn = ({ navigation }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const {
    state,
    handleCloseModal,
    handleSuccessCloseModal,
    activeErrorModal,
    textModal,
    newTurn,
    activeModal,
  } = useContext(TurnsContext);

  const formik = useFormik({
    initialValues: {
      lugar: "",
      hora: "",
      categoria: "",
      tipoCancha: "",
    },
    validationSchema: Yup.object({
      lugar: Yup.string()
        .required("El nombre del lugar de juego es obligatorio")
        .min(5, "El nombre debe tener un mínimo de 5 caracteres"),
      hora: Yup.string()
        .required("La hora de juego es obligatoria")
        .min(6, "Debe ser de 00 a 23 hs"),
      categoria: Yup.number()
        .required("La categoria es obligatoria. Ingrese un numero del 1 al 8")
        .min(1, "La categoria mínima es 1")
        .max(8, "La categoria máxima es 8")
        .typeError("Solamente se permiten ingresar numeros"),
      tipoCancha: Yup.string().required("Debe ingresar el tipo de cancha"),
    }),
    onSubmit: (values) => {
      newTurn(
        formik.values.lugar,
        formik.values.hora,
        formik.values.categoria,
        formik.values.tipoCancha
      );
    },
  });

  return (
    <>
      <SafeAreaView style={stylesGral.safeAreaView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Crear nuevo turno</Text>
          </View>
          <View style={styles.containerInputs}>
            <View>
              <Text style={styles.label}>Lugar del turno</Text>
              <TextInput
                style={stylesGral.input}
                name="lugar"
                placeholder="Ingrese el lugar del turno"
                placeholderTextColor="grey"
                autoComplete="name"
                onChangeText={(value) => formik.setFieldValue("lugar", value)}
              />
              {formik.errors.lugar && (
                <CustumErrorInput message={formik.errors.lugar} />
              )}
            </View>
            <View>
              <Text style={styles.label}>Hora del turno</Text>
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text style={stylesGral.input}>{date.toLocaleString()}</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="datetime"
                  is24Hour={true}
                  display="default"
                  onChange={(event, selectedDate) => {
                    setShowDatePicker(Platform.OS === "ios");
                    if (selectedDate) {
                      setDate(selectedDate);
                      formik.setFieldValue("hora", selectedDate.toISOString());
                    }
                  }}
                />
              )}
              {formik.errors.hora && (
                <CustumErrorInput message={formik.errors.hora} />
              )}
            </View>
            <View>
              <Text style={styles.label}>Categoria de los jugadores</Text>
              <TextInput
                style={stylesGral.input}
                name="categoria"
                placeholder="Ingrese la categoria de los jugadores del turno"
                placeholderTextColor="grey"
                onChangeText={(value) =>
                  formik.setFieldValue("categoria", value)
                }
              />
              {formik.errors.categoria && (
                <CustumErrorInput message={formik.errors.categoria} />
              )}
            </View>
            <View>
              <Text style={styles.label}>Ingre el tipo de cancha</Text>
              <TextInput
                style={stylesGral.input}
                name="tipoCancha"
                placeholder="Cesped o Cemento"
                placeholderTextColor="grey"
                onChangeText={(value) =>
                  formik.setFieldValue(
                    "tipoCancha",
                    value
                      .toUpperCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                  )
                }
              />
              {formik.errors.tipoCancha && (
                <CustumErrorInput message={formik.errors.tipoCancha} />
              )}
            </View>
            <View style={styles.button}>
              <Button title="Crear turno" onPress={formik.handleSubmit} />
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  VOLVER A INICIO
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <CustomModalSucces
        activeModal={activeModal}
        text={textModal}
        handleSuccessCloseModal={handleSuccessCloseModal}
      />
      <CustomModal
        activeErrorModal={activeErrorModal}
        handleCloseModal={handleCloseModal}
        text={state.errorMessage}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  containerInputs: {
    flex: 1,
    marginTop: 40,
    marginLeft: 12,
    marginRight: 12,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    margin: 20,
  },
  label: {
    marginLeft: 12,
    color: "white",
  },
  button: {
    width: 150,
    alignSelf: "center",
    margin: 15,
  },
});
