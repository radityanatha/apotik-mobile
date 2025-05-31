import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import React from 'react'
import { Background, SplashS, Logo } from '../../images'

const Splashscreen = ({ navigation }) => {
  return (
    <ImageBackground source={Background} style={styles.container}>
      {/* Logo dan Nama App */}
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        <View>
          <Text style={styles.appName}>SiaPotik</Text>
        </View>
      </View>
      <Text style={styles.tagline}>“Cepat, Tepat, dan Aman”</Text>

      {/* Gambar Tengah */}
      <Image source={SplashS} style={styles.illustration} />

      {/* Tombol */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('MainApp')}
      >
        <Text style={styles.buttonText}>Lanjutkan</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flexDirection: 'row', //logo sejajar teks jadi horizontal
    alignItems: 'center', //posisi tengah vertkal
    alignSelf: 'flex-start', //peleteakan dari sisi kiri layar
    marginTop: 120,
    marginLeft: 75, //jarak dari sisi kiri
  },
  logo: {
    height: 90,
    width: 90,
    resizeMode: 'contain',
    marginRight: 20,
  },
  appName: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#1F3C88',
    fontStyle: 'monsterat',
  },
  tagline: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
    textShadowColor: '#999',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 4,
  },
  illustration: {
    width: 350,
    height: 400,
    resizeMode: 'contain',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#163172',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
})
