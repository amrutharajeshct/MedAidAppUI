// import { Link } from "expo-router/build/link/Link";
// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// export default function SymptomResult({ navigation }: { navigation: any }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Symptom Result</Text>
//       <View style={styles.resultBox}>
//         <Text style={styles.resultText}>Your symptom analysis result will be shown here.</Text>
//       </View>
//       <TouchableOpacity style={styles.appointmentButton}>         
//           <Link href="/doctorlist">
//              <Text style={styles.appointmentButton}>Take Appointment</Text>
//           </Link>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
//   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
//   resultBox: {
//     width: "100%",
//     padding: 20,
//     borderRadius: 10,
//     backgroundColor: "#f0f0f0",
//     marginBottom: 20,
//   },
//   resultText: { fontSize: 16, color: "#555", textAlign: "center" },
//   appointmentButton: {
//     backgroundColor: "#f76e6e",
//     padding: 15,
//     borderRadius: 10,
//     width: "100%",
//     alignItems: "center",
//   },
//   appointmentText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// });
import { SearchParams, useLocalSearchParams, Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SymptomResult() {
  const { risk } = useLocalSearchParams(); // Retrieve risk level from params

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Risk Assessment Result</Text>
      <Text style={styles.resultText}>
        Your risk level is: <Text style={styles.risk}>{risk}</Text>
      </Text>
      <Text style={styles.note}>
        If you are at Medium or High Risk, we recommend consulting a healthcare provider for further evaluation.
      </Text>
      <TouchableOpacity style={styles.appointmentButton}>         
           <Link href="/doctorlist">
              <Text style={styles.appointmentButton}>Take Appointment</Text>
           </Link>
       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  resultText: { fontSize: 18, marginBottom: 20 },
  risk: { fontWeight: "bold", color: "#f76e6e" },
  note: { fontSize: 14, textAlign: "center", color: "#666" },
  appointmentButton: {
        backgroundColor: "#f76e6e",
        padding: 15,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
      },
});
