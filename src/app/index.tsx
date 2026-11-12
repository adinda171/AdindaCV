
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import profileData from '../data/profile.json';

// =====================================
// KOMPONEN IDENTITAS PROFIL
// =====================================

type ProfileHeaderProps = {
  name: string;
  nim: string;
};

function ProfileHeader({ name, nim }: ProfileHeaderProps) {
  return (
    <View style={styles.profileSection}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarOuter}>
          <Image
            source={require('../../assets/foto-profil.jpg')}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.onlineDot} />
        <View style={styles.avatarSparkle}>
          <Text style={styles.sparkleText}>✦</Text>
        </View>
      </View>

      <Text style={styles.profileGreeting}>HELLO, NICE TO MEET YOU!</Text>

      <Text style={styles.name}>{name}</Text>

      <View style={styles.nimBadge}>
        <Text style={styles.nimLabel}>NIM</Text>
        <Text style={styles.nim}>{nim}</Text>
      </View>

      <View style={styles.studentBadge}>
        <View style={styles.studentDot} />
        <Text style={styles.studentText}>INFORMATION SYSTEM STUDENT</Text>
      </View>
    </View>
  );
}

// =====================================
// KOMPONEN PANDUAN MENU
// =====================================

function MenuCard({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <View style={styles.menuCard}>
      <View style={styles.menuIcon}>
        <Text style={styles.menuIconText}>{icon}</Text>
      </View>

      <View style={styles.menuTextContainer}>
        <Text style={styles.menuNumber}>{number}</Text>
        <Text style={styles.menuTitle}>{title}</Text>
        <Text style={styles.menuDescription}>{description}</Text>
      </View>

      <Text style={styles.menuArrow}>›</Text>
    </View>
  );
}

// =====================================
// HALAMAN HOME
// =====================================

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.mainCard}>

          {/* HERO HEADER */}
          <View style={styles.topHeader}>
            <View style={styles.decorCircleOne} />
            <View style={styles.decorCircleTwo} />
            <View style={styles.decorCircleThree} />

            <View style={styles.headerTopRow}>
              <Text style={styles.brand}>MY PERSONAL SPACE</Text>
              <View style={styles.headerStar}>
                <Text style={styles.headerStarText}>✦</Text>
              </View>
            </View>

            <View style={styles.headerContent}>
              <Text style={styles.headerSmall}>WELCOME TO</Text>
              <Text style={styles.headerTitle}>My Personal CV</Text>
              <Text style={styles.headerSubtitle}>
                A little space to share my story,
                skills, and journey.
              </Text>
            </View>

            <View style={styles.headerBottom}>
              <View style={styles.headerLine} />
              <Text style={styles.headerCaption}>GET TO KNOW ME BETTER</Text>
            </View>
          </View>

          <View style={styles.content}>

            {/* IDENTITAS PROFIL */}
            <ProfileHeader
              name={profileData.name}
              nim={profileData.nim}
            />

            {/* SAMBUTAN */}
            <View style={styles.welcomeSection}>
              <View style={styles.sectionHeading}>
                <View>
                  <Text style={styles.sectionEyebrow}>A LITTLE INTRODUCTION</Text>
                  <Text style={styles.sectionTitle}>About This App</Text>
                </View>
                <Text style={styles.sectionDecoration}>✧</Text>
              </View>

              <View style={styles.welcomeCard}>
                <View style={styles.welcomeIconBox}>
                  <Text style={styles.welcomeIcon}>✦</Text>
                </View>

                <Text style={styles.welcomeTitle}>
                  Welcome to My World!
                </Text>

                <Text style={styles.welcomeDescription}>
                  Halo! Senang bisa berbagi sedikit cerita tentang diri saya.
                  Aplikasi ini dibuat sebagai personal CV untuk memperkenalkan
                  profil, keterampilan, pengalaman proyek, dan perjalanan
                  akademik saya.
                </Text>

                <View style={styles.welcomeBottom}>
                  <Text style={styles.welcomeBottomText}>
                    THANK YOU FOR VISITING
                  </Text>
                  <Text style={styles.heartIcon}>♡</Text>
                </View>
              </View>
            </View>

            {/* PANDUAN MENU */}
            <View style={styles.exploreSection}>
              <View style={styles.sectionHeading}>
                <View>
                  <Text style={styles.sectionEyebrow}>EXPLORE MY PROFILE</Text>
                  <Text style={styles.sectionTitle}>Get to Know Me</Text>
                </View>
                <Text style={styles.sectionDecoration}>✧</Text>
              </View>

              <Text style={styles.exploreDescription}>
                Jelajahi beberapa bagian untuk mengenal saya lebih dekat.
              </Text>

              <View style={styles.menuList}>
                <MenuCard
                  number="01"
                  icon="👩🏻"
                  title="About Me"
                  description="Kenali profil dan latar belakang saya."
                />

                <MenuCard
                  number="02"
                  icon="✏️"
                  title="My Skills"
                  description="Lihat keterampilan dan kemampuan saya."
                />

                <MenuCard
                  number="03"
                  icon="💼"
                  title="Portfolio"
                  description="Lihat proyek dan hasil pekerjaan saya."
                />

                <MenuCard
                  number="04"
                  icon="🎓"
                  title="My Score"
                  description="Informasi nilai dan pencapaian akademik."
                />

                <MenuCard
                  number="05"
                  icon="💌"
                  title="Contact"
                  description="Hubungi saya melalui halaman kontak."
                />
              </View>
            </View>

            {/* FOOTER */}
            <View style={styles.footer}>
              <View style={styles.footerLine} />

              <Text style={styles.footerTitle}>
                {profileData.program}
              </Text>

              <Text style={styles.university}>
                {profileData.university}
              </Text>

              <View style={styles.footerMottoContainer}>
                <Text style={styles.footerMotto}>
                  CREATIVITY
                </Text>
                <Text style={styles.footerMottoDot}>•</Text>
                <Text style={styles.footerMotto}>
                  PASSION
                </Text>
                <Text style={styles.footerMottoDot}>•</Text>
                <Text style={styles.footerMotto}>
                  GROWTH
                </Text>
              </View>

              <Text style={styles.footerCopyright}>
                Made with ♡ by {profileData.name}
              </Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// =====================================
// STYLING APLIKASI
// =====================================

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4EFFB',
  },

  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 18,
    paddingVertical: 24,
  },

  mainCard: {
    width: '100%',
    maxWidth: 430,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#5B3FA8',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
  },

  // HEADER

  topHeader: {
    backgroundColor: '#3A2A78',
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 85,
    overflow: 'hidden',
  },

  decorCircleOne: {
    position: 'absolute',
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: '#7C5CE0',
    opacity: 0.35,
    top: -115,
    right: -65,
  },

  decorCircleTwo: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#F28DBB',
    opacity: 0.22,
    bottom: -100,
    left: -50,
  },

  decorCircleThree: {
    position: 'absolute',
    width: 75,
    height: 75,
    borderRadius: 38,
    borderWidth: 1,
    borderColor: '#BBA6F3',
    opacity: 0.35,
    top: 95,
    right: 25,
  },

  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  brand: {
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerStarText: {
    color: '#FFD2E7',
    fontSize: 19,
  },

  headerContent: {
    marginTop: 42,
  },

  headerSmall: {
    color: '#D9C8FF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 9,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 0.3,
  },

  headerSubtitle: {
    color: '#E2D9F8',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 10,
    maxWidth: 260,
  },

  headerBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    gap: 12,
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
    letterSpacing: 2,
  },

  // CONTENT

  content: {
    paddingHorizontal: 22,
    paddingBottom: 28,
  },

  // PROFILE

  profileSection: {
    alignItems: 'center',
    marginTop: -62,
    marginBottom: 38,
  },

  avatarContainer: {
    position: 'relative',
    marginBottom: 18,
  },

  avatarOuter: {
    padding: 6,
    borderRadius: 80,
    backgroundColor: '#FFFFFF',
    elevation: 8,
    shadowColor: '#5B3FA8',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
  },

  profileImage: {
    width: 116,
    height: 116,
    borderRadius: 58,
    borderWidth: 4,
    borderColor: '#E9DDFB',
  },

  onlineDot: {
    position: 'absolute',
    width: 23,
    height: 23,
    borderRadius: 12,
    backgroundColor: '#48D6A0',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    right: 8,
    bottom: 9,
  },

  avatarSparkle: {
    position: 'absolute',
    left: -9,
    top: 12,
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#FFE4F0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sparkleText: {
    color: '#E0709F',
    fontSize: 18,
  },

  profileGreeting: {
    fontSize: 10,
    fontWeight: '800',
    color: '#D875A5',
    letterSpacing: 2.5,
    marginBottom: 8,
  },

  name: {
    fontSize: 23,
    fontWeight: '900',
    color: '#30215F',
    textAlign: 'center',
    lineHeight: 32,
  },

  nimBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2ECFC',
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderRadius: 22,
    marginTop: 13,
    gap: 10,
    borderWidth: 1,
    borderColor: '#E5D9F8',
  },

  nimLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: '#D875A5',
    letterSpacing: 1,
  },

  nim: {
    fontSize: 13,
    fontWeight: '800',
    color: '#5B3FA8',
    letterSpacing: 1.3,
  },

  studentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBF8FF',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 12,
    gap: 7,
  },

  studentDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#8A6BD1',
  },

  studentText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#8A78AF',
    letterSpacing: 1.2,
  },

  // SECTION HEADING

  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: 21,
    fontWeight: '900',
    color: '#30215F',
  },

  sectionDecoration: {
    fontSize: 31,
    color: '#D7B8F3',
  },

  // WELCOME

  welcomeSection: {
    marginBottom: 34,
  },

  welcomeCard: {
    backgroundColor: '#FAF6FF',
    borderRadius: 23,
    padding: 21,
    borderWidth: 1,
    borderColor: '#EADFFB',
  },

  welcomeIconBox: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: '#F0E5FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  welcomeIcon: {
    fontSize: 24,
    color: '#B17AD8',
  },

  welcomeTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#30215F',
    marginBottom: 10,
  },

  welcomeDescription: {
    fontSize: 13,
    lineHeight: 23,
    color: '#716487',
    textAlign: 'left',
  },

  welcomeBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#E9DFF6',
    marginTop: 17,
    paddingTop: 13,
  },

  welcomeBottomText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#A58BBE',
    letterSpacing: 1.5,
  },

  heartIcon: {
    color: '#E58DB5',
    fontSize: 23,
  },

  // EXPLORE MENU

  exploreSection: {
    marginBottom: 30,
  },

  exploreDescription: {
    fontSize: 12,
    color: '#887B9E',
    lineHeight: 20,
    marginTop: -5,
    marginBottom: 17,
  },

  menuList: {
    gap: 11,
  },

  menuCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEE7F8',
    borderRadius: 17,
    padding: 13,
    gap: 13,
  },

  menuIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#F5EEFC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuIconText: {
    fontSize: 21,
  },

  menuTextContainer: {
    flex: 1,
  },

  menuNumber: {
    fontSize: 9,
    fontWeight: '800',
    color: '#C18BCF',
    letterSpacing: 1,
    marginBottom: 3,
  },

  menuTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#39276D',
    marginBottom: 3,
  },

  menuDescription: {
    fontSize: 11,
    color: '#8B819D',
    lineHeight: 17,
  },

  menuArrow: {
    fontSize: 27,
    color: '#B99BD8',
    marginRight: 3,
  },

  // FOOTER

  footer: {
    alignItems: 'center',
    marginTop: 4,
  },

  footerLine: {
    width: 48,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#F0B8D4',
    marginBottom: 18,
  },

  footerTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#3A2A78',
    textAlign: 'center',
  },

  university: {
    fontSize: 12,
    color: '#9285AA',
    marginTop: 6,
    textAlign: 'center',
  },

  footerMottoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },

  footerMotto: {
    fontSize: 9,
    fontWeight: '800',
    color: '#A783C8',
    letterSpacing: 1,
  },

  footerMottoDot: {
    color: '#E4A3C5',
    fontSize: 12,
  },

  footerCopyright: {
    fontSize: 10,
    color: '#B2A7C4',
    marginTop: 15,
  },
});
