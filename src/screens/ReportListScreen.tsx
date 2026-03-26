import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { getDBConnection } from "../database/connection";
import { getReports } from "../repositories/reportRepository";

export default function ReportListScreen({ navigation }: any) {

  const [reports, setReports] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const db = await getDBConnection();
      const data = await getReports(db);
      setReports(data);
    };

    loadData();
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        elevation: 3,
      }}
      onPress={() => navigation.navigate("EditReport")}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {item.title}
        </Text>

        <Text
          style={{
            color: "white",
            backgroundColor:
              item.status === "Pending" ? "orange" : "green",
            paddingHorizontal: 8,
            paddingVertical: 2,
            borderRadius: 6,
          }}
        >
          {item.status}
        </Text>
      </View>

      <Text style={{ color: "gray", marginTop: 4 }}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f1f5f9", padding: 16 }}>

      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Field Reports
      </Text>

      <TextInput
        placeholder="Search reports"
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 8,
          marginBottom: 12,
        }}
      />

      <FlatList
        data={reports}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={renderItem}
      />

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: "#2563EB",
          width: 56,
          height: 56,
          borderRadius: 28,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Create")}
      >
        <Text style={{ color: "white", fontSize: 24 }}>+</Text>
      </TouchableOpacity>

    </View>
  );
}