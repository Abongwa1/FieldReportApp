import React from "react";
import { View, Text } from "react-native";

export default function AboutScreen() {
  return (
    <View className="flex-1 bg-gray-50 p-6 justify-center items-center">

      <Text className="text-2xl font-bold text-blue-600 mb-4">
        Field Report App
      </Text>

      <Text className="text-center text-gray-600">
        This application allows field workers to record and manage
        reports directly from their mobile devices. Users can create,
        edit, and store reports locally, attach images, and access
        their data even without an internet connection.
      </Text>

    </View>
  );
}