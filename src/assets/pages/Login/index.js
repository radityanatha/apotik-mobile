import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView, // Kita tambahkan ScrollView untuk skenario konten lebih panjang
} from 'react-native'

// Ganti dengan path gambar yang benar
import { Login } from '../../images'

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Username:', username)
    console.log('Password:', password)
    console.log('Fungsi Login belum diimplementasikan!')
    // Contoh navigasi: navigation.navigate('MainApp');
  }

  return (
    // KeyboardAvoidingView membungkus semuanya
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#e6e8ff" />

      {/* ScrollView penting agar konten tidak terpotong saat keyboard muncul di layar kecil */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Bagian atas dengan ilustrasi */}
        <View style={styles.topSection}>
          <Image
            source={Login}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        {/* Bagian bawah dengan form login */}
        <View style={styles.bottomSection}>
          <Text style={styles.loginTitle}>Login</Text>

          {/* Input Username */}
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          {/* Input Password */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Tombol Sign In */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

// Kode StyleSheet FINAL
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e8ff',
  },
  scrollContainer: {
    flexGrow: 1, // Memastikan ScrollView bisa berekspansi
    justifyContent: 'space-between', // Mendorong top & bottom section ke ujung
  },
  topSection: {
    flex: 1,
    justifyContent: 'center', // Agar gambar selalu di tengah
    alignItems: 'center',
    padding: 20,
  },
  illustration: {
    width: '90%',
    height: 220,
  },
  bottomSection: {
    // UKURAN TETAP: Tidak menggunakan flex, ukuran sesuai konten
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 40,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  loginTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    width: '100%',
    backgroundColor: '#6a0dad',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
