import React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

const reports = [
  {
    id: "1",
    title: "Safety Audit - Zone 3",
    description:
      "Routine weekly safety check for the hazardous materials storage area. Identified minor flooring issue.",
    date: "Today",
    images: 2,
    status: "Pending",
  },
  {
    id: "2",
    title: "Site Inspection - Sector A",
    description:
      "Final inspection before foundation pouring. All reinforcement bars are verified.",
    date: "Yesterday",
    images: 5,
    status: "Completed",
  },
];

export default function ReportListScreen({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      className="bg-white rounded-xl p-4 mb-4 shadow"
      onPress={() => navigation.navigate("EditReport")}
    >
      <View className="flex-row justify-between items-center mb-1">
        <Text className="font-semibold text-base">{item.title}</Text>

        <View
          className={`px-2 py-1 rounded ${
            item.status === "Pending" ? "bg-orange-400" : "bg-green-500"
          }`}
        >
          <Text className="text-white text-xs font-semibold uppercase">
            {item.status}
          </Text>
        </View>
      </View>

      <Text className="text-gray-500 text-sm mb-2">{item.description}</Text>

      <View className="flex-row items-center space-x-4">
        <Text className="text-gray-400 text-xs">📅 {item.date}</Text>
        <Text className="text-gray-400 text-xs">🖼 {item.images} images</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">

      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold">Field Reports</Text>
        <Text className="text-lg">ℹ️</Text>
      </View>

      <TextInput
        placeholder="Search reports"
        className="bg-white p-3 rounded-lg mb-4"
      />

      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-blue-600 w-14 h-14 rounded-full items-center justify-center shadow-lg"
        onPress={() => navigation.navigate("CreateReport")}
      >
        <Text className="text-white text-2xl">+</Text>
      </TouchableOpacity>

    </View>
  );
}