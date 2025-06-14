import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { SplashS, Logo } from '../../images' // Pastikan path gambar ini sudah benar

const Splashscreen = ({ navigation }) => {
  // LOGIKA INI SUDAH SEMPURNA DAN SAMA SEPERTI CONTOH SAYA
  useEffect(() => {
    // Atur timer untuk pindah ke halaman Login
    const timer = setTimeout(() => {
      // Menggunakan replace untuk mengganti halaman, bukan menumpuk. INI SUDAH BENAR.
      navigation.replace('Login')
    }, 3000) // Durasi splash screen (3 detik). Anda bisa ganti ke 5000 jika lebih suka.

    // Membersihkan timer untuk mencegah error
    return () => clearTimeout(timer)
  }, [navigation])

  // TAMPILAN VISUAL INI DIAMBIL PENUH DARI KODE ANDA YANG SUDAH BAGUS
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f2f5" />

      {/* Bagian Logo, Nama App, dan Tagline */}
      <View style={styles.topSection}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.appName}>SiaPotik</Text>
        <Text style={styles.tagline}>Cepat, Tepat, dan Aman</Text>
      </View>

      {/* Gambar Ilustrasi di Tengah */}
      <View style={styles.middleSection}>
        <Image source={SplashS} style={styles.illustration} />
      </View>
    </View>
  )
}

export default Splashscreen

// STYLING INI JUGA DIAMBIL PENUH DARI KODE ANDA
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#006241',
    // Jika Anda belum setup custom font, baris ini bisa menyebabkan error. Hapus jika perlu.
    // fontFamily: 'Montserrat_Bold',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 18,
    fontStyle: 'normal',
    color: '#333',
    textAlign: 'center',
  },
  middleSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  illustration: {
    width: '90%',
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
})
