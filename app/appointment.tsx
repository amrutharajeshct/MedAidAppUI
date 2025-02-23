// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Modal, Alert } from 'react-native';

// const doctor = {
//   name: 'Dr. Shruti Kedia',
//   clinic: 'Upasana Dental Clinic, Salt Lake',
//   image: 'https://via.placeholder.com/150'
// };

// const dates = [
//   { day: 'Today, 23 Feb', slots: 0 },
//   { day: 'Tomorrow, 24 Feb', slots: 9 },
//   { day: 'Thu, 25 Feb', slots: 10 }
// ];

// const timeSlots = [
//   { time: '1:00 PM' }, { time: '1:30 PM' }, { time: '2:00 PM' }, { time: '2:30 PM' },
//   { time: '3:00 PM' }, { time: '3:30 PM' }, { time: '4:00 PM' }, { time: '5:00 PM' },
//   { time: '5:30 PM' }, { time: '6:00 PM' }, { time: '6:30 PM' }, { time: '7:00 PM' }
// ];

// export default function Appointment() {
//   const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
//   const [selectedDate, setSelectedDate] = useState('Tomorrow, 24 Feb');
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleConfirmAppointment = () => {
//     if (selectedSlot) {
//       setModalVisible(true);
//     } else {
//       Alert.alert('Please select a time slot');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Time</Text>
      
//       {/* Doctor Card */}
//       <View style={styles.card}>
//         <Image source={{ uri: doctor.image }} style={styles.image} />
//         <View>
//           <Text style={styles.name}>{doctor.name}</Text>
//           <Text>{doctor.clinic}</Text>
//         </View>
//       </View>

//       {/* Date Selector */}
//       <View style={styles.dateContainer}>
//         {dates.map((item) => (
//           <TouchableOpacity
//             key={item.day}
//             style={[
//               styles.dateBox,
//               selectedDate === item.day ? styles.selectedDate : styles.unselectedDate
//             ]}
//             onPress={() => setSelectedDate(item.day)}
//           >
//             <Text>{item.day}</Text>
//             <Text>{item.slots} slots available</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <Text style={styles.sectionTitle}>Today, 23 Feb</Text>
//       <Text style={styles.subTitle}>Afternoon 7 slots</Text>

//       {/* Time Slots */}
//       <FlatList
//         data={timeSlots}
//         numColumns={4}
//         keyExtractor={(item) => item.time}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={[
//               styles.slot,
//               selectedSlot === item.time ? styles.slotSelected : styles.slotAvailable
//             ]}
//             onPress={() => setSelectedSlot(item.time)}
//           >
//             <Text>{item.time}</Text>
//           </TouchableOpacity>
//         )}
//       />

//       {/* Confirm Appointment Button */}
//       <TouchableOpacity
//         style={styles.confirmButton}
//         onPress={handleConfirmAppointment}
//       >
//         <Text style={styles.confirmText}>Confirm Appointment</Text>
//       </TouchableOpacity>

//       {/* Modal for Confirmation */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Appointment Confirmed</Text>
//             <Text>{doctor.name} at {selectedSlot} on {selectedDate}</Text>
//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.closeText}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
//   card: { flexDirection: 'row', backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 20 },
//   image: { width: 70, height: 70, borderRadius: 10, marginRight: 20 },
//   name: { fontSize: 18, fontWeight: 'bold' },
//   dateContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
//   dateBox: { padding: 15, borderRadius: 10, alignItems: 'center', flex: 1, margin: 5 },
//   selectedDate: { backgroundColor: '#FF6B6B', color: '#fff' },
//   unselectedDate: { backgroundColor: '#f0f0f0' },
//   sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
//   subTitle: { fontSize: 16, marginVertical: 10 },
//   slot: { margin: 10, padding: 15, borderRadius: 10, width: 70, alignItems: 'center' },
//   slotAvailable: { backgroundColor: '#DFF6E5' },
//   slotSelected: { backgroundColor: '#FF6B6B', color: '#fff' },
//   confirmButton: { marginTop: 30, backgroundColor: '#FF6B6B', padding: 15, borderRadius: 10, alignItems: 'center' },
//   confirmText: { color: '#fff', fontWeight: 'bold' },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)'
//   },
//   modalContent: {
//     width: 300,
//     backgroundColor: 'white',
//     padding: 30,
//     borderRadius: 10,
//     alignItems: 'center'
//   },
//   modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
//   closeButton: { marginTop: 20, padding: 15, backgroundColor: '#FF6B6B', borderRadius: 10, width: '100%', alignItems: 'center' },
//   closeText: { color: 'white', fontWeight: 'bold' }
// });
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Modal, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const dates = [
  { day: 'Today, 23 Feb', slots: 0 },
  { day: 'Tomorrow, 24 Feb', slots: 9 },
  { day: 'Thu, 25 Feb', slots: 10 }
];

const timeSlots = [
  { time: '1:00 PM' }, { time: '1:30 PM' }, { time: '2:00 PM' }, { time: '2:30 PM' },
  { time: '3:00 PM' }, { time: '3:30 PM' }, { time: '4:00 PM' }, { time: '5:00 PM' },
];

export default function Appointment() {
  const { name, designation, image } = useLocalSearchParams() as { name: string; designation: string; image: string };
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 24 Feb');
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirmAppointment = () => {
    if (selectedSlot) {
      setModalVisible(true);
    } else {
      Alert.alert('Please select a time slot');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Time</Text>
      
      {/* Doctor Card */}
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text>{designation}</Text>
        </View>
      </View>

      {/* Date Selector */}
      <View style={styles.dateContainer}>
        {dates.map((item) => (
          <TouchableOpacity
            key={item.day}
            style={[
              styles.dateBox,
              selectedDate === item.day ? styles.selectedDate : styles.unselectedDate
            ]}
            onPress={() => setSelectedDate(item.day)}
          >
            <Text>{item.day}</Text>
            <Text>{item.slots} slots available</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>{selectedDate}</Text>
      <Text style={styles.subTitle}>Available Slots</Text>

      {/* Time Slots */}
      <FlatList
        data={timeSlots}
        numColumns={4}
        keyExtractor={(item) => item.time}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.slot,
              selectedSlot === item.time ? styles.slotSelected : styles.slotAvailable
            ]}
            onPress={() => setSelectedSlot(item.time)}
          >
            <Text>{item.time}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Confirm Appointment Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmAppointment}
      >
        <Text style={styles.confirmText}>Confirm Appointment</Text>
      </TouchableOpacity>

      {/* Modal for Confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Appointment Confirmed</Text>
            <Text>{name} at {selectedSlot} on {selectedDate}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  card: { flexDirection: 'row', backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 20 },
  image: { width: 70, height: 70, borderRadius: 10, marginRight: 20 },
  name: { fontSize: 18, fontWeight: 'bold' },
  dateContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  confirmButton: { marginTop: 30, backgroundColor: '#FF6B6B', padding: 15, borderRadius: 10, alignItems: 'center' },
  subTitle: { fontSize: 16, marginVertical: 10 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
  confirmText: { color: '#fff', fontWeight: 'bold' },
  dateBox: { padding: 15, borderRadius: 10, alignItems: 'center', flex: 1, margin: 5 },
  selectedDate: { backgroundColor: '#FF6B6B', color: '#fff' },
  unselectedDate: { backgroundColor: '#f0f0f0' },
  slot: { margin: 10, padding: 15, borderRadius: 10, width: 70, alignItems: 'center' },
  slotAvailable: { backgroundColor: '#DFF6E5' },
  slotSelected: { backgroundColor: '#FF6B6B', color: '#fff' },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center'
  },
  closeButton: { marginTop: 20, padding: 15, backgroundColor: '#FF6B6B', borderRadius: 10, width: '100%', alignItems: 'center' },
  closeText: { color: 'white', fontWeight: 'bold' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 }
});

