import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function CreateReportScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const images = [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  ];

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">

      <Text className="text-xl font-bold mb-4">Create Report</Text>

      <View className="bg-white rounded-xl p-4 mb-4">

        <Text className="text-gray-400 font-semibold mb-2">REPORT DETAILS</Text>

        <Text className="text-sm mb-1">Title</Text>
        <TextInput
          placeholder="Enter report title"
          value={title}
          onChangeText={setTitle}
          className="border border-gray-200 rounded-lg p-3 mb-3"
        />

        <Text className="text-sm mb-1">Description</Text>
        <TextInput
          placeholder="Enter report description"
          value={description}
          onChangeText={setDescription}
          multiline
          className="border border-gray-200 rounded-lg p-3 h-24 mb-3"
        />

        <Text className="text-sm mb-1">Status</Text>
        <View className="border border-gray-200 rounded-lg p-3">
          <Text>Pending</Text>
        </View>

      </View>

      <View className="bg-white rounded-xl p-4 mb-6">

        <View className="flex-row justify-between mb-3">
          <Text className="text-gray-400 font-semibold">ATTACHMENTS</Text>
          <Text className="text-gray-400 text-xs">3 of 9 slots used</Text>
        </View>

        <View className="flex-row flex-wrap">

          {images.map((img, index) => (
            <View key={index} className="mr-3 mb-3">
              <Image
                source={{ uri: img }}
                className="w-24 h-24 rounded-lg"
              />
            </View>
          ))}

          <TouchableOpacity className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg items-center justify-center">
            <Text className="text-gray-400 text-xs">Add Image</Text>
          </TouchableOpacity>

        </View>

      </View>

      <TouchableOpacity className="bg-blue-600 rounded-xl p-4 mb-6">
        <Text className="text-white text-center font-semibold">
          Save Report
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}