import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TransactionTypePicker from "@/components/transactionTypePicker";

type Inputs = {
  Category_Name: string;
  Description: string;
  Color: string;
  Icon: string;
};

export default function AddCategory() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      Category_Name: "",
      Description: "",
      Color: "",
      Icon: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <TransactionTypePicker OPTIONS={["Income", "Expense", "Transfer"]} />
      <Controller
        control={control}
        name="Category_Name"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Expense Name"
            placeholderTextColor={"#000"}
          />
        )}
      />

      <Controller
        control={control}
        rules={{ required: false }}
        name="Description"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Amount (i.e. 9.99)"
            placeholderTextColor={"#000"}
          />
        )}
      />

      <Controller
        control={control}
        name="Color"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Description (optional)"
            placeholderTextColor={"#000"}
          />
        )}
      />
      <Controller
        control={control}
        name="Icon"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Description (optional)"
            placeholderTextColor={"#000"}
          />
        )}
      />

      {errors.Category_Name && (
        <Text style={{ color: "red" }}>This field is required.</Text>
      )}

      <TransactionTypePicker OPTIONS={["Education", "Food", "Doge"]} />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
