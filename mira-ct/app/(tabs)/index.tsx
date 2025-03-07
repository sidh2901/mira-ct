import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Card, ProgressBar } from "react-native-paper";

const facilitiesData = [
  {
    location: "Atlanta, US",
    status: "Good",
    color: "#DFF2D8",
    systems: [
      { name: "ASRS System", performance: 90, color: "green" },
      { name: "Wrapping System", performance: 95, color: "green" },
      { name: "Conveyor System", performance: 75, color: "orange" },
    ],
  },
  {
    location: "Novi, US",
    status: "Critical",
    color: "#F8D7DA",
    systems: [
      { name: "ASRS System", performance: 60, color: "red" },
      { name: "Wrapping System", performance: 95, color: "green" },
      { name: "Conveyor System", performance: 75, color: "orange" },
    ],
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MiraCT</Text>
      </View>

      <Card style={styles.card}>
        <Text style={styles.sectionTitle}>Facilities Efficiency</Text>
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Active Facilities</Text>
            <Text style={styles.infoValue}>4/5</Text>
          </View>
          <View style={[styles.infoBox, { backgroundColor: "#E8F5E9" }]}>
            <Text style={styles.infoLabel}>Performance</Text>
            <Text style={[styles.infoValue, { color: "green" }]}>90%</Text>
          </View>
        </View>
      </Card>

      <Text style={styles.sectionTitle}>Facilities</Text>

      {facilitiesData.map((facility, index) => (
        <Card
          key={index}
          style={[styles.facilityCard, { backgroundColor: facility.color }]}>
          <View style={styles.facilityHeader}>
            <Text style={styles.facilityTitle}>{facility.location}</Text>
            <Text
              style={
                facility.status === "Good"
                  ? styles.goodStatus
                  : styles.criticalStatus
              }>
              {facility.status}
            </Text>
          </View>

          {facility.systems.map((system, i) => (
            <View key={i} style={styles.systemRow}>
              <Text style={styles.systemText}>{system.name}</Text>
              <Text style={{ color: system.color }}>{system.performance}%</Text>
              <ProgressBar
                progress={system.performance / 100}
                color={system.color}
                style={styles.progressBar}
              />
            </View>
          ))}
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F6F8", padding: 10 },
  header: { backgroundColor: "#4A90E2", padding: 15, borderRadius: 8 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  infoRow: { flexDirection: "row", justifyContent: "space-between" },
  infoBox: {
    flex: 1,
    backgroundColor: "#E3F2FD",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: "center",
  },
  infoLabel: { fontSize: 14, color: "#333" },
  infoValue: { fontSize: 16, fontWeight: "bold", color: "#1976D2" },
  facilityCard: { padding: 15, borderRadius: 10, marginVertical: 10 },
  facilityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  facilityTitle: { fontSize: 16, fontWeight: "bold" },
  goodStatus: {
    backgroundColor: "#C8E6C9",
    padding: 5,
    borderRadius: 5,
    color: "green",
  },
  criticalStatus: {
    backgroundColor: "#F8D7DA",
    padding: 5,
    borderRadius: 5,
    color: "red",
  },
  systemRow: { marginVertical: 5 },
  systemText: { fontSize: 14, fontWeight: "500", marginBottom: 3 },
  progressBar: { height: 6, borderRadius: 5 },
});
