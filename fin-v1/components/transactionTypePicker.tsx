import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function LiveTransaction(props: { OPTIONS: string[] }) {
  const { control, watch } = useForm({
    defaultValues: { type: "Expense", amount: "" },
  });

  // This variable always holds the current form state
  const formData = watch();

  return (
    <View style={{ padding: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <Text>Selected: {formData.type}</Text>
        <Text>Amount: {formData.amount || "0"}</Text>
      </View>

      <Controller
        control={control}
        name="type"
        render={({ field: { onChange, value } }) => (
          <View style={styles.buttonGroup}>
            {props.OPTIONS.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => onChange(option)}
                style={[
                  styles.button,
                  value === option && styles.selectedButton,
                ]}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginBottom: 10, fontWeight: "bold" },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    marginHorizontal: 2,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  selectedButton: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  text: { color: "#333" },
  selectedText: { color: "#fff", fontWeight: "bold" },
  submit: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
});
