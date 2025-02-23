
// app/login.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Sign up or Login to your Account</Text>
      
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.activeButton}>
          <Text style={styles.activeButtonText}>Login</Text>
        </TouchableOpacity>
        <Link href="/signup" asChild>
          <TouchableOpacity style={styles.inactiveButton}>
            <Text style={styles.inactiveButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your Email"
          placeholderTextColor="#A0A0A0"
        />
        
        <Text style={styles.label}>Password</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.divider}>Or Login Using:</Text>
      
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

      <TouchableOpacity style={styles.submitButton}>         
                <Link href="/education">
                   <Text style={styles.submitButton}>Log In</Text>
                </Link>
            </TouchableOpacity>
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
  forgotPassword: {
    color: '#666',
    textAlign: 'right',
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
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});
