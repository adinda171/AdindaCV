
import { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ContactScreen() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');

  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState<
    'success' | 'error' | ''
  >('');

  const clearFeedback = () => {
    setFeedback('');
    setFeedbackType('');
  };

  const handleSubmit = () => {
    if (!nama.trim() || !email.trim() || !pesan.trim()) {
      setFeedbackType('error');
      setFeedback('Silakan isi nama, email, dan pesan terlebih dahulu.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFeedbackType('error');
      setFeedback('Email tidak valid. Silakan periksa kembali.');
      return;
    }

    setFeedbackType('success');
    setFeedback(`Terima kasih, ${nama}! Pesan kamu berhasil diproses.`);

    setNama('');
    setEmail('');
    setPesan('');
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <StatusBar barStyle="light-content" />

      {/* HERO HEADER */}
      <View style={styles.hero}>
        <View style={styles.circleOne} />
        <View style={styles.circleTwo} />
        <View style={styles.circleThree} />

        <View style={styles.topBar}>
          <View>
            <Text style={styles.brand}>PERSONAL PORTFOLIO</Text>
            <Text style={styles.brandSubtitle}>LET'S MAKE CONNECTION</Text>
          </View>

          <View style={styles.topIcon}>
            <Text style={styles.topIconText}>✦</Text>
          </View>
        </View>

        <View style={styles.heroContent}>
          <View style={styles.heroText}>
            <View style={styles.heroBadge}>
              <View style={styles.badgeDot} />
              <Text style={styles.badgeText}>GET IN TOUCH</Text>
            </View>

            <Text style={styles.heroTitle}>
              Let's{'\n'}Talk &{'\n'}
              <Text style={styles.heroHighlight}>Connect.</Text>
            </Text>

            <Text style={styles.heroDescription}>
              Setiap ide berawal dari percakapan.
              Mari mulai diskusi bersama!
            </Text>
          </View>

          <View style={styles.mailIllustration}>
            <View style={styles.mailCircle}>
              <Text style={styles.mailEmoji}>💌</Text>
            </View>
            <Text style={styles.mailSparkle}>✦</Text>
            <Text style={styles.mailSparkleTwo}>✧</Text>
          </View>
        </View>

        <View style={styles.heroBottom}>
          <Text style={styles.heroBottomText}>
            OPEN FOR DISCUSSION
          </Text>
          <View style={styles.heroBottomLine} />
          <Text style={styles.heroBottomText}>✦ 2026</Text>
        </View>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.content}>
        {/* INTRO CARD */}
        <View style={styles.introCard}>
          <View style={styles.introIcon}>
            <Text style={styles.introEmoji}>👋</Text>
          </View>

          <View style={styles.introContent}>
            <Text style={styles.introTitle}>
              Hello, Nice to Meet You!
            </Text>
            <Text style={styles.introDescription}>
              Punya pertanyaan, ide menarik, atau ingin
              berdiskusi mengenai teknologi dan desain?
              Aku senang bisa terhubung denganmu.
            </Text>
          </View>

          <Text style={styles.introDecoration}>✧</Text>
        </View>

        {/* FORM HEADER */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>SEND A MESSAGE</Text>
            <Text style={styles.sectionTitle}>Let's Connect!</Text>
            <Text style={styles.sectionSubtitle}>
              Isi formulir berikut untuk mengirim pesan.
            </Text>
          </View>

          <View style={styles.sectionIcon}>
            <Text style={styles.sectionIconText}>✉</Text>
          </View>
        </View>

        {/* FORM CARD */}
        <View style={styles.formCard}>
          <View style={styles.formTop}>
            <View>
              <Text style={styles.formTitle}>Your Message</Text>
              <Text style={styles.formSubtitle}>
                Ceritakan apa yang ingin kamu sampaikan.
              </Text>
            </View>

            <View style={styles.formNumber}>
              <Text style={styles.formNumberText}>01</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* NAME */}
          <Text style={styles.label}>Nama Lengkap</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>👤</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan nama kamu"
              placeholderTextColor="#A99CB9"
              value={nama}
              onChangeText={(value) => {
                setNama(value);
                clearFeedback();
              }}
              accessibilityLabel="Nama lengkap"
              accessibilityHint="Masukkan nama lengkap kamu"
            />
          </View>

          {/* EMAIL */}
          <Text style={styles.label}>Alamat Email</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>✉️</Text>
            <TextInput
              style={styles.input}
              placeholder="nama@email.com"
              placeholderTextColor="#A99CB9"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(value) => {
                setEmail(value);
                clearFeedback();
              }}
              accessibilityLabel="Alamat email"
              accessibilityHint="Masukkan alamat email yang aktif"
            />
          </View>

          {/* MESSAGE */}
          <Text style={styles.label}>Pesan</Text>
          <View style={[styles.inputWrapper, styles.messageWrapper]}>
            <Text style={styles.inputIcon}>💬</Text>
            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Tuliskan pesan kamu di sini..."
              placeholderTextColor="#A99CB9"
              multiline
              textAlignVertical="top"
              value={pesan}
              onChangeText={(value) => {
                setPesan(value);
                clearFeedback();
              }}
              accessibilityLabel="Pesan"
              accessibilityHint="Tuliskan pesan yang ingin disampaikan"
            />
          </View>

          <Text style={styles.helperText}>
            ✦ Pastikan informasi yang kamu masukkan sudah benar.
          </Text>

          {/* SUBMIT BUTTON */}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            accessibilityRole="button"
            accessibilityLabel="Kirim pesan"
            accessibilityHint="Tekan untuk mengirim pesan"
            activeOpacity={0.85}
          >
            <Text style={styles.submitText}>Kirim Pesan</Text>
            <View style={styles.submitArrow}>
              <Text style={styles.submitArrowText}>→</Text>
            </View>
          </TouchableOpacity>

          {/* FEEDBACK */}
          {feedback !== '' && (
            <View
              style={[
                styles.feedbackBox,
                feedbackType === 'success'
                  ? styles.successBox
                  : styles.errorBox,
              ]}
            >
              <Text style={styles.feedbackIcon}>
                {feedbackType === 'success' ? '✓' : '!'}
              </Text>

              <Text
                style={[
                  styles.feedbackText,
                  feedbackType === 'success'
                    ? styles.successText
                    : styles.errorText,
                ]}
                accessibilityRole="alert"
              >
                {feedback}
              </Text>
            </View>
          )}
        </View>

        {/* BOTTOM CARD */}
        <View style={styles.bottomCard}>
          <View style={styles.bottomDecoration}>
            <Text style={styles.bottomStar}>✦</Text>
          </View>

          <Text style={styles.bottomTitle}>
            Thank You for Visiting!
          </Text>

          <Text style={styles.bottomDescription}>
            Terima kasih sudah meluangkan waktu untuk
            mengunjungi personal portfolio saya.
          </Text>

          <View style={styles.bottomDivider} />

          <Text style={styles.bottomQuote}>
            "Every connection starts with a hello."
          </Text>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>DESIGNED WITH</Text>
          <Text style={styles.footerHeart}>♥</Text>
          <Text style={styles.footerText}>BY ADINDA</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0FC',
  },

  // HERO
  hero: {
    backgroundColor: '#352267',
    paddingTop: 58,
    paddingHorizontal: 24,
    paddingBottom: 23,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    overflow: 'hidden',
  },

  circleOne: {
    position: 'absolute',
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: '#50388B',
    top: -100,
    right: -75,
    opacity: 0.65,
  },

  circleTwo: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#8068B5',
    top: 130,
    right: -65,
    opacity: 0.5,
  },

  circleThree: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#60469A',
    bottom: 25,
    left: -70,
    opacity: 0.5,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  brand: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  brandSubtitle: {
    color: '#BFB0E5',
    fontSize: 9,
    letterSpacing: 1.5,
    marginTop: 5,
  },

  topIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#5A438F',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#806AB3',
  },

  topIconText: {
    color: '#F5DDA4',
    fontSize: 25,
  },

  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 38,
    marginBottom: 32,
  },

  heroText: {
    flex: 1,
    zIndex: 2,
  },

  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#57418A',
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 18,
  },

  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EFCB91',
    marginRight: 7,
  },

  badgeText: {
    color: '#F2E9FF',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  heroTitle: {
    fontSize: 37,
    lineHeight: 43,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: -1,
  },

  heroHighlight: {
    color: '#E9C6F5',
  },

  heroDescription: {
    color: '#D3C8EB',
    fontSize: 11,
    lineHeight: 18,
    marginTop: 14,
    maxWidth: 205,
  },

  mailIllustration: {
    width: 112,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
  },

  mailCircle: {
    width: 96,
    height: 96,
    borderRadius: 34,
    backgroundColor: '#604991',
    borderWidth: 1,
    borderColor: '#9279C4',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '8deg' }],
  },

  mailEmoji: {
    fontSize: 49,
    transform: [{ rotate: '-8deg' }],
  },

  mailSparkle: {
    position: 'absolute',
    top: 5,
    right: 2,
    color: '#F5DDA4',
    fontSize: 25,
  },

  mailSparkleTwo: {
    position: 'absolute',
    bottom: 12,
    left: 0,
    color: '#F5DDA4',
    fontSize: 23,
  },

  heroBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#604B8C',
    paddingTop: 19,
  },

  heroBottomText: {
    color: '#D3C8EB',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },

  heroBottomLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#76639F',
    marginHorizontal: 15,
  },

  // CONTENT
  content: {
    paddingHorizontal: 18,
    paddingTop: 25,
    paddingBottom: 25,
  },

  // INTRO
  introCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 23,
    padding: 19,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBE1F7',
    elevation: 4,
    shadowColor: '#5C4387',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    overflow: 'hidden',
  },

  introIcon: {
    width: 53,
    height: 53,
    borderRadius: 18,
    backgroundColor: '#F1E8FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  introEmoji: {
    fontSize: 27,
  },

  introContent: {
    flex: 1,
  },

  introTitle: {
    color: '#493273',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  introDescription: {
    color: '#887B9F',
    fontSize: 10,
    lineHeight: 17,
  },

  introDecoration: {
    position: 'absolute',
    right: 9,
    top: 5,
    color: '#C5B0E3',
    fontSize: 20,
  },

  // SECTION
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 17,
  },

  sectionEyebrow: {
    color: '#9A82C3',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 6,
  },

  sectionTitle: {
    color: '#352267',
    fontSize: 23,
    fontWeight: '900',
  },

  sectionSubtitle: {
    color: '#8F83A6',
    fontSize: 11,
    marginTop: 5,
  },

  sectionIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#E9DDF8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionIconText: {
    fontSize: 25,
    color: '#65449A',
  },

  // FORM
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E9DFF5',
    elevation: 5,
    shadowColor: '#5C4387',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.09,
    shadowRadius: 12,
  },

  formTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  formTitle: {
    color: '#3A2A78',
    fontSize: 18,
    fontWeight: 'bold',
  },

  formSubtitle: {
    color: '#A092B2',
    fontSize: 10,
    marginTop: 5,
  },

  formNumber: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#F1E8FB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formNumberText: {
    color: '#7955AC',
    fontWeight: 'bold',
    fontSize: 13,
  },

  divider: {
    height: 1,
    backgroundColor: '#F0EAF6',
    marginVertical: 19,
  },

  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#594675',
    marginBottom: 9,
    marginTop: 15,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAF8FD',
    borderWidth: 1,
    borderColor: '#E9E1F2',
    borderRadius: 14,
    paddingHorizontal: 13,
    minHeight: 52,
  },

  inputIcon: {
    fontSize: 17,
    marginRight: 11,
  },

  input: {
    flex: 1,
    fontSize: 12,
    color: '#493273',
    paddingVertical: 13,
  },

  messageWrapper: {
    alignItems: 'flex-start',
    paddingTop: 12,
    minHeight: 125,
  },

  messageInput: {
    height: 100,
    paddingTop: 2,
  },

  helperText: {
    color: '#A294B5',
    fontSize: 9,
    marginTop: 12,
    lineHeight: 15,
  },

  submitButton: {
    backgroundColor: '#50347F',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 18,
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#50347F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  submitArrow: {
    width: 25,
    height: 25,
    borderRadius: 9,
    backgroundColor: '#7656A7',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  submitArrowText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  // FEEDBACK
  feedbackBox: {
    padding: 13,
    borderRadius: 13,
    marginTop: 16,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  successBox: {
    backgroundColor: '#ECFDF3',
    borderColor: '#A6F4C5',
  },

  errorBox: {
    backgroundColor: '#FEF3F2',
    borderColor: '#FECDCA',
  },

  feedbackIcon: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#493273',
  },

  feedbackText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 18,
    fontWeight: '500',
  },

  successText: {
    color: '#027A48',
  },

  errorText: {
    color: '#B42318',
  },

  // BOTTOM CARD
  bottomCard: {
    backgroundColor: '#3A2A78',
    borderRadius: 23,
    padding: 22,
    marginTop: 23,
    alignItems: 'center',
    overflow: 'hidden',
  },

  bottomDecoration: {
    width: 47,
    height: 47,
    borderRadius: 16,
    backgroundColor: '#604991',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },

  bottomStar: {
    color: '#F5DDA4',
    fontSize: 27,
  },

  bottomTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  bottomDescription: {
    color: '#D3C8EB',
    fontSize: 10,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 9,
    maxWidth: 250,
  },

  bottomDivider: {
    width: 45,
    height: 2,
    backgroundColor: '#9279C4',
    marginVertical: 16,
    borderRadius: 2,
  },

  bottomQuote: {
    color: '#E9C6F5',
    fontSize: 11,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  // FOOTER
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  footerText: {
    color: '#A292B9',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },

  footerHeart: {
    color: '#B57ACD',
    fontSize: 12,
    marginHorizontal: 8,
  },
});
