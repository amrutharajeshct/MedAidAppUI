
// app/signup.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Sign up or Login to your Account</Text>
      
      <View style={styles.toggleContainer}>
        <Link href="/login" asChild>
          <TouchableOpacity style={styles.inactiveButton}>
            <Text style={styles.inactiveButtonText}>Login</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.activeButton}>
          <Text style={styles.activeButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your Name"
          placeholderTextColor="#A0A0A0"
        />
        
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneInput}>
          <Text style={styles.countryCode}>+1</Text>
          <TextInput 
            style={styles.phoneNumber}
            placeholder="000 000 0000"
            placeholderTextColor="#A0A0A0"
            keyboardType="phone-pad"
          />
        </View>
        
        <Text style={styles.label}>Create Password</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
        />
      </View>

      <Text style={styles.divider}>Or Sign Up Using:</Text>
      
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text>A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text>f</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.button}>         
          <Link href="/login">
             <Text style={styles.button}>Sign Up</Text>
          </Link>
      </TouchableOpacity>
      


      {/* <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Signup</Text>
            </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 5,
  },
  activeButton: {
    backgroundColor: '#FF7B7B',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  inactiveButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  activeButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  inactiveButtonText: {
    color: '#666',
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  phoneInput: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    paddingLeft: 15,
  },
  countryCode: {
    color: '#666',
    marginRight: 10,
  },
  phoneNumber: {
    flex: 1,
    padding: 15,
  },
  divider: {
    color: '#666',
    textAlign: 'center',
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#FF7B7B',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF7B7B',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});
