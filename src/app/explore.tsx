
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import profileData from '../data/profile.json';

// =====================================
// KOMPONEN INFORMASI AKADEMIK
// =====================================

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.infoItem}>
      <View style={styles.infoIcon}>
        <Text style={styles.infoIconText}>{icon}</Text>
      </View>

      <View style={styles.infoContent}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>

      <Text style={styles.infoDecoration}>✦</Text>
    </View>
  );
}

// =====================================
// HALAMAN ABOUT ME
// =====================================

export default function AboutScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.decorCircleOne} />
        <View style={styles.decorCircleTwo} />
        <View style={styles.decorCircleThree} />

        <View style={styles.headerTop}>
          <Text style={styles.headerLabel}>GET TO KNOW ME</Text>
          <View style={styles.headerStar}>
            <Text style={styles.headerStarText}>✦</Text>
          </View>
        </View>

        <Text style={styles.headerTitle}>About Me</Text>

        <Text style={styles.headerSubtitle}>
          A little story about who I am
          {'\n'}and what I love to do.
        </Text>

        <View style={styles.headerBottom}>
          <View style={styles.headerLine} />
          <Text style={styles.headerCaption}>MY PERSONAL PROFILE</Text>
        </View>
      </View>

      {/* PROFILE CARD */}
      <View style={styles.profileCard}>
        <View style={styles.profileIconWrapper}>
          <View style={styles.profileIconCircle}>
            <Text style={styles.profileIcon}>👩🏻‍💻</Text>
          </View>

          <View style={styles.profileSparkle}>
            <Text style={styles.sparkleText}>✦</Text>
          </View>
        </View>

        <Text style={styles.profileGreeting}>HELLO, I'M</Text>

        <Text style={styles.name}>{profileData.name}</Text>

        <Text style={styles.program}>{profileData.program}</Text>

        <View style={styles.profileBadge}>
          <View style={styles.badgeDot} />
          <Text style={styles.profileBadgeText}>
            UNIVERSITY STUDENT
          </Text>
        </View>
      </View>

      {/* ABOUT DESCRIPTION */}
      <View style={styles.section}>
        <View style={styles.sectionHeading}>
          <View>
            <Text style={styles.sectionEyebrow}>MY INTRODUCTION</Text>
            <Text style={styles.sectionTitle}>Tentang Saya</Text>
          </View>

          <Text style={styles.sectionDecoration}>✧</Text>
        </View>

        <View style={styles.aboutCard}>
          <View style={styles.quoteIcon}>
            <Text style={styles.quoteText}>“</Text>
          </View>

          <Text style={styles.description}>
            {profileData.description}
          </Text>

          <View style={styles.aboutBottom}>
            <View style={styles.aboutLine} />
            <Text style={styles.aboutCaption}>A LITTLE BIT ABOUT ME</Text>
          </View>
        </View>
      </View>

      {/* ACADEMIC INFORMATION */}
      <View style={styles.section}>
        <View style={styles.sectionHeading}>
          <View>
            <Text style={styles.sectionEyebrow}>MY EDUCATION</Text>
            <Text style={styles.sectionTitle}>Informasi Akademik</Text>
          </View>

          <Text style={styles.sectionDecoration}>✧</Text>
        </View>

        <View style={styles.academicCard}>
          <InfoItem
            icon="🪪"
            label="Nomor Induk Mahasiswa"
            value={profileData.nim}
          />

          <View style={styles.itemDivider} />

          <InfoItem
            icon="📚"
            label="Program Studi"
            value={profileData.program}
          />

          <View style={styles.itemDivider} />

          <InfoItem
            icon="🏛️"
            label="Perguruan Tinggi"
            value={profileData.university}
          />
        </View>
      </View>

      {/* PERSONAL NOTE */}
      <View style={styles.noteCard}>
        <Text style={styles.noteIcon}>🌷</Text>

        <Text style={styles.noteTitle}>
          Keep Growing, Keep Learning!
        </Text>

        <Text style={styles.noteDescription}>
          Setiap pengalaman adalah kesempatan untuk belajar,
          berkembang, dan menjadi pribadi yang lebih baik.
        </Text>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.footerLine} />

        <Text style={styles.footerTitle}>
          {profileData.program}
        </Text>

        <Text style={styles.footerUniversity}>
          {profileData.university}
        </Text>

        <View style={styles.footerMotto}>
          <Text style={styles.mottoText}>CREATIVITY</Text>
          <Text style={styles.mottoDot}>•</Text>
          <Text style={styles.mottoText}>PASSION</Text>
          <Text style={styles.mottoDot}>•</Text>
          <Text style={styles.mottoText}>GROWTH</Text>
        </View>

        <Text style={styles.copyright}>
          Made with ♡ by {profileData.name}
        </Text>
      </View>
    </ScrollView>
  );
}

// =====================================
// STYLING
// =====================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4EFFB',
  },

  scrollContent: {
    paddingBottom: 20,
  },

  // HEADER

  header: {
    backgroundColor: '#3A2A78',
    paddingTop: 55,
    paddingHorizontal: 25,
    paddingBottom: 45,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
  },

  decorCircleOne: {
    position: 'absolute',
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: '#7C5CE0',
    opacity: 0.35,
    top: -110,
    right: -55,
  },

  decorCircleTwo: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#F28DBB',
    opacity: 0.2,
    bottom: -85,
    left: -45,
  },

  decorCircleThree: {
    position: 'absolute',
    width: 65,
    height: 65,
    borderRadius: 33,
    borderWidth: 1,
    borderColor: '#D8C6FF',
    opacity: 0.4,
    top: 115,
    right: 35,
  },

  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerLabel: {
    color: '#F6C9E3',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 3,
  },

  headerStar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.14)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerStarText: {
    color: '#FFD2E7',
    fontSize: 19,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    marginTop: 30,
  },

  headerSubtitle: {
    color: '#E2D9F8',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 9,
  },

  headerBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    marginTop: 23,
  },

  headerLine: {
    width: 35,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#FFB3D1',
  },

  headerCaption: {
    color: '#E9DFFB',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.7,
  },

  // PROFILE

  profileCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: -1,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEE5F8',
    elevation: 5,
    shadowColor: '#5B3FA8',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },

  profileIconWrapper: {
    position: 'relative',
    marginBottom: 16,
  },

  profileIconCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#F0E6FC',
    borderWidth: 4,
    borderColor: '#E5D5F8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileIcon: {
    fontSize: 42,
  },

  profileSparkle: {
    position: 'absolute',
    right: -7,
    top: 3,
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: '#FFE4F0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sparkleText: {
    fontSize: 17,
    color: '#D875A5',
  },

  profileGreeting: {
    fontSize: 10,
    fontWeight: '800',
    color: '#D875A5',
    letterSpacing: 2.5,
    marginBottom: 8,
  },

  name: {
    fontSize: 20,
    fontWeight: '900',
    color: '#30215F',
    textAlign: 'center',
    lineHeight: 29,
  },

  program: {
    fontSize: 12,
    color: '#88799F',
    textAlign: 'center',
    marginTop: 7,
  },

  profileBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5EEFC',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 15,
    gap: 7,
  },

  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#48C99A',
  },

  profileBadgeText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#8A6BB1',
    letterSpacing: 1.3,
  },

  // SECTION

  section: {
    marginHorizontal: 21,
    marginTop: 30,
  },

  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  sectionEyebrow: {
    fontSize: 9,
    fontWeight: '800',
    color: '#D17DA6',
    letterSpacing: 2,
    marginBottom: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#30215F',
  },

  sectionDecoration: {
    fontSize: 30,
    color: '#D7B8F3',
  },

  // ABOUT

  aboutCard: {
    backgroundColor: '#FAF6FF',
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EADFFB',
  },

  quoteIcon: {
    width: 39,
    height: 39,
    borderRadius: 13,
    backgroundColor: '#F0E5FC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  quoteText: {
    color: '#B17AD8',
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 40,
  },

  description: {
    fontSize: 13,
    lineHeight: 24,
    color: '#6B6088',
    textAlign: 'left',
  },

  aboutBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 19,
  },

  aboutLine: {
    width: 25,
    height: 3,
    borderRadius: 4,
    backgroundColor: '#E7A6C9',
  },

  aboutCaption: {
    fontSize: 9,
    fontWeight: '800',
    color: '#B18BBE',
    letterSpacing: 1.3,
  },

  // ACADEMIC

  academicCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 17,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#EEE5F8',
    elevation: 3,
    shadowColor: '#5B3FA8',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 12,
  },

  infoIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: '#F5EEFC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoIconText: {
    fontSize: 20,
  },

  infoContent: {
    flex: 1,
  },

  label: {
    fontSize: 10,
    color: '#A092B5',
    marginBottom: 5,
    fontWeight: '700',
  },

  value: {
    fontSize: 13,
    color: '#39276D',
    fontWeight: '800',
    lineHeight: 19,
  },

  infoDecoration: {
    fontSize: 13,
    color: '#D9B8EB',
  },

  itemDivider: {
    height: 1,
    backgroundColor: '#F0EAF7',
    marginLeft: 55,
  },

  // PERSONAL NOTE

  noteCard: {
    marginHorizontal: 21,
    marginTop: 25,
    padding: 20,
    borderRadius: 21,
    backgroundColor: '#FCEFF6',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F5DDEB',
  },

  noteIcon: {
    fontSize: 27,
    marginBottom: 8,
  },

  noteTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#8E4778',
    textAlign: 'center',
  },

  noteDescription: {
    fontSize: 12,
    lineHeight: 20,
    color: '#986F8B',
    textAlign: 'center',
    marginTop: 8,
  },

  // FOOTER

  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 25,
  },

  footerLine: {
    width: 45,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#F0B8D4',
    marginBottom: 16,
  },

  footerTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#3A2A78',
    textAlign: 'center',
  },

  footerUniversity: {
    fontSize: 11,
    color: '#9285AA',
    marginTop: 6,
    textAlign: 'center',
  },

  footerMotto: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 15,
  },

  mottoText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#A783C8',
    letterSpacing: 1,
  },

  mottoDot: {
    fontSize: 12,
    color: '#E4A3C5',
  },

  copyright: {
    fontSize: 10,
    color: '#B2A7C4',
    marginTop: 14,
  },
});
