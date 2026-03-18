import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function EditReportScreen() {

  const [title, setTitle] = useState("Site Inspection");
  const [description, setDescription] = useState("Inspection of construction site.");

  return (
    <View className="flex-1 bg-gray-50 p-4">

      <Text className="text-2xl font-bold mb-4 text-blue-600">
        Edit Report
      </Text>

      <TextInput
        value={title}
        onChangeText={setTitle}
        className="bg-white p-3 rounded-lg mb-3 border border-gray-200"
      />

      <TextInput
        value={description}
        onChangeText={setDescription}
        multiline
        className="bg-white p-3 rounded-lg mb-3 border border-gray-200 h-32"
      />

      <TouchableOpacity className="bg-blue-600 p-4 rounded-xl mb-3">
        <Text className="text-white text-center font-semibold">
          Update Report
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-red-500 p-4 rounded-xl">
        <Text className="text-white text-center font-semibold">
          Delete Report
        </Text>
      </TouchableOpacity>

    </View>
  );
}