// import { Link } from '@react-navigation/native';
// import * as Linking from 'expo-linking';
// import React from 'react';
// import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

// const doctors = [
//   { id: '1', name: 'Dr. Jomol Jose', designation: 'Gynecologist', experience: '7 Years', image: require('../assets/images/jomol.png') },
//   { id: '2', name: 'Dr. Abhirami K S', designation: 'Endocrinologist', experience: '9 Years', image: require('../assets/images/abhirami.jpeg') },
//   { id: '3', name: 'Dr. Amrutha Rajesh', designation: 'Oncologist', experience: '5 Years', image: require('../assets/images/amrutha.png') },
//   { id: '4', name: 'Dr. Anju O T K', designation: 'Dermatologist', experience: '5 Years', image: require('../assets/images/anju.jpeg') },
// ];

// export default function DoctorList() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Find Doctors</Text>
//       <TextInput style={styles.search} placeholder="Search" />
//       <FlatList
//         data={doctors}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image source={item.image} style={styles.image} />
//             <View style={styles.info}>
//               <Text style={styles.name}>{item.name}</Text>
//               <Text style={styles.designation}>{item.designation}</Text>
//               <Text>{item.experience} experience</Text>
//             </View>
//             <TouchableOpacity style={styles.viewButton}>
//               <TouchableOpacity onPress={() => Linking.openURL(`/appointment?id=${item.id}`)}>
//                 <Text style={styles.viewText}>View</Text>
//               </TouchableOpacity>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
//   search: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 10, marginBottom: 20 },
//   card: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, alignItems: 'center' },
//   image: { width: 70, height: 70, borderRadius: 10, marginRight: 15 },
//   info: { flex: 1 },
//   name: { fontSize: 18, fontWeight: 'bold' },
//   designation: { fontSize: 14, color: '#555', marginBottom: 5 },
//   viewButton: { backgroundColor: '#3498db', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10 },
//   viewText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
// });
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const doctors = [
  { id: '1', name: 'Dr. Jomol Jose', designation: 'Cardiologist', experience: '7 Years', rating: '87%', image: require('../assets/images/jomol.png') },
  { id: '2', name: 'Dr. Abhirami K S', designation: 'Neurologist', experience: '9 Years', rating: '74%', image: require('../assets/images/abhirami.jpeg' )},
  { id: '3', name: 'Dr. Amrutha Rajesh', designation: 'Dermatologist', experience: '5 Years', rating: '59%', image: require('../assets/images/amrutha.png') },
  { id: '4', name: 'Dr. Anju O T K', designation: 'Pediatrician', experience: '5 Years', rating: '59%', image: require('../assets/images/anju.jpeg') },
];

export default function doctorlist() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Doctors</Text>
      <TextInput style={styles.search} placeholder="Search" />

      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={typeof item.image === 'string' ? { uri: item.image } : item.image}
              style={styles.image}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.designation}</Text>
              <Text>{item.experience} experience</Text>
            </View>

            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => router.push({ pathname: '/appointment', params: item })}
            >
              <Text style={styles.bookText}>View</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  search: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 10, marginBottom: 20 },
  card: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, alignItems: 'center' },
  image: { width: 70, height: 70, borderRadius: 10, marginRight: 15 },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: 'bold' },
  bookButton: { backgroundColor: '#FF6B6B', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10 },
  bookText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});
