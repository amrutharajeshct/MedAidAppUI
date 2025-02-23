import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function SymptomChecker() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // Matches question length

  const handleAnswer = (index: number, answer: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  const calculateRisk = () => {
    let totalScore = 0;

    // Calculate total points based on answers
    answers.forEach((answer, index) => {
      if (answer === "Yes") totalScore += questions[index].points;
    });

    // Determine risk level
    if (totalScore >= 25) return "High Risk";
    if (totalScore >= 15) return "Medium Risk";
    return "Low Risk";
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Symptom Checker for PCOS and Ovarian Cancer</Text>
        {questions.map((question, index) => (
          <View key={index} style={styles.questionBox}>
            <Text style={styles.question}>
              {question.text} {"\n"}
              <Text style={styles.severity}>Severity: {question.severity}</Text>
            </Text>
            <View style={styles.answerButtons}>
              <TouchableOpacity
                style={[
                  styles.answerButton,
                  answers[index] === "Yes" && styles.selectedButton,
                ]}
                onPress={() => handleAnswer(index, "Yes")}
              >
                <Text style={styles.answerText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.answerButton,
                  answers[index] === "No" && styles.selectedButton,
                ]}
                onPress={() => handleAnswer(index, "No")}
              >
                <Text style={styles.answerText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.submitButton}>
          <Link
            href={{
              pathname: "/symptomresult",
              params: { risk: calculateRisk() },
            }}
          >
            <Text style={styles.submitText}>Get Your Risk Level</Text>
          </Link>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const questions = [
  { text: "Do you experience irregular or infrequent periods?", points: 2, severity: "Medium" },
  { text: "Do you have excessive hair growth on your face, chest, or other areas?", points: 3, severity: "Medium" },
  { text: "Do you experience severe acne or oily skin?", points: 1, severity: "Low" },
  { text: "Have you noticed thinning hair or hair loss from your scalp?", points: 2, severity: "Low" },
  { text: "Are you gaining weight, especially around your abdomen?", points: 3, severity: "Medium" },
  { text: "Do you have dark patches of skin (neck, armpits, etc.)?", points: 2, severity: "Low" },
  { text: "Have you been feeling anxious, depressed, or irritable?", points: 1, severity: "Low" },
  { text: "Have you been diagnosed with insulin resistance or diabetes?", points: 4, severity: "High" },
  { text: "Do you experience persistent abdominal pain or bloating?", points: 5, severity: "High" },
  { text: "Do you have difficulty eating or feeling full quickly?", points: 4, severity: "High" },
  { text: "Have you noticed unexplained weight loss or fatigue?", points: 3, severity: "Medium" },
  { text: "Do you have a family history of ovarian cancer?", points: 5, severity: "High" },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  questionBox: { marginBottom: 15 },
  question: { fontSize: 16, marginBottom: 10 },
  severity: { fontSize: 12, color: "#888" },
  answerButtons: { flexDirection: "row" },
  answerButton: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ddd",
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedButton: { backgroundColor: "#f76e6e" },
  answerText: { color: "#fff", fontSize: 16 },
  submitButton: {
    backgroundColor: "#f76e6e",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  submitText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
