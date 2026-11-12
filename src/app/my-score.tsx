
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AcademicDashboard from '../components/AcademicDashboard';
import academicData from '../data/academic.json';

export default function MyScoreScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="light-content" />

      {/* PREMIUM HERO HEADER */}
      <View style={styles.hero}>
        <View style={styles.circleOne} />
        <View style={styles.circleTwo} />
        <View style={styles.circleThree} />

        <View style={styles.topBar}>
          <View>
            <Text style={styles.topLabel}>PERSONAL CV APP</Text>
            <Text style={styles.topCaption}>MY ACADEMIC JOURNEY</Text>
          </View>

          <View style={styles.topIcon}>
            <Text style={styles.topIconText}>✦</Text>
          </View>
        </View>

        <View style={styles.heroContent}>
          <View style={styles.heroText}>
            <View style={styles.tag}>
              <View style={styles.tagDot} />
              <Text style={styles.tagText}>ACADEMIC RECORD</Text>
            </View>

            <Text style={styles.heroTitle}>
              My{'\n'}Academic{'\n'}
              <Text style={styles.heroHighlight}>Score.</Text>
            </Text>

            <Text style={styles.heroDescription}>
              Setiap nilai adalah bagian dari perjalanan
              menuju pencapaian yang lebih baik.
            </Text>
          </View>

          <View style={styles.trophyContainer}>
            <View style={styles.trophyCircle}>
              <Text style={styles.trophy}>🎓</Text>
            </View>
            <View style={styles.sparkleOne}>
              <Text style={styles.sparkleText}>✦</Text>
            </View>
            <View style={styles.sparkleTwo}>
              <Text style={styles.sparkleText}>✧</Text>
            </View>
          </View>
        </View>

        <View style={styles.heroBottom}>
          <View>
            <Text style={styles.heroBottomTitle}>LEARN</Text>
            <Text style={styles.heroBottomSub}>Keep growing</Text>
          </View>

          <View style={styles.heroLine} />

          <View>
            <Text style={styles.heroBottomTitle}>IMPROVE</Text>
            <Text style={styles.heroBottomSub}>Be better</Text>
          </View>

          <View style={styles.heroLine} />

          <View>
            <Text style={styles.heroBottomTitle}>ACHIEVE</Text>
            <Text style={styles.heroBottomSub}>Reach goals</Text>
          </View>
        </View>
      </View>

      {/* DASHBOARD CONTENT */}
      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>YOUR PROGRESS</Text>
            <Text style={styles.sectionTitle}>
              Academic Overview
            </Text>
            <Text style={styles.sectionSubtitle}>
              Ringkasan informasi akademik kamu
            </Text>
          </View>

          <View style={styles.sectionIcon}>
            <Text style={styles.sectionIconText}>📊</Text>
          </View>
        </View>

        <View style={styles.dashboardCard}>
          <View style={styles.dashboardTop}>
            <View>
              <Text style={styles.dashboardLabel}>
                STUDENT PERFORMANCE
              </Text>
              <Text style={styles.dashboardTitle}>
                My Dashboard
              </Text>
            </View>

            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>RECORD</Text>
            </View>
          </View>

          <View style={styles.accentLine} />

          <AcademicDashboard data={academicData} />
        </View>

        {/* MOTIVATION CARD */}
        <View style={styles.motivationCard}>
          <View style={styles.motivationIcon}>
            <Text style={styles.motivationEmoji}>✨</Text>
          </View>

          <View style={styles.motivationContent}>
            <Text style={styles.motivationTitle}>
              Small Progress, Big Dreams
            </Text>
            <Text style={styles.motivationDescription}>
              Terus tingkatkan kemampuan dan jangan berhenti
              belajar. Setiap proses punya hasilnya sendiri.
            </Text>
          </View>

          <Text style={styles.motivationStar}>✦</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            MADE WITH LOVE
          </Text>
          <Text style={styles.footerHeart}>💜</Text>
          <Text style={styles.footerText}>
            MY ACADEMIC JOURNEY
          </Text>
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

  hero: {
    backgroundColor: '#352267',
    paddingTop: 58,
    paddingHorizontal: 24,
    paddingBottom: 25,
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
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 1,
    borderColor: '#8068B5',
    top: 120,
    right: -75,
    opacity: 0.5,
  },

  circleThree: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#60469A',
    bottom: 35,
    left: -65,
    opacity: 0.5,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topLabel: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  topCaption: {
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
    color: '#F9DFA0',
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

  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#57418A',
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 18,
  },

  tagDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EFCB91',
    marginRight: 7,
  },

  tagText: {
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

  trophyContainer: {
    width: 112,
    height: 145,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },

  trophyCircle: {
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

  trophy: {
    fontSize: 49,
    transform: [{ rotate: '-8deg' }],
  },

  sparkleOne: {
    position: 'absolute',
    top: 5,
    right: 4,
  },

  sparkleTwo: {
    position: 'absolute',
    bottom: 14,
    left: 0,
  },

  sparkleText: {
    color: '#F5DDA4',
    fontSize: 25,
  },

  heroBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#604B8C',
    paddingTop: 20,
  },

  heroBottomTitle: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  heroBottomSub: {
    color: '#BFB0E5',
    fontSize: 9,
    marginTop: 5,
  },

  heroLine: {
    width: 1,
    height: 28,
    backgroundColor: '#76639F',
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 28,
    paddingBottom: 25,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
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
    fontSize: 21,
    fontWeight: '900',
  },

  sectionSubtitle: {
    color: '#8F83A6',
    fontSize: 11,
    marginTop: 5,
  },

  sectionIcon: {
    width: 47,
    height: 47,
    borderRadius: 16,
    backgroundColor: '#E9DDF8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionIconText: {
    fontSize: 22,
  },

  dashboardCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 17,
    borderWidth: 1,
    borderColor: '#E9DFF5',
    elevation: 5,
    shadowColor: '#5C4387',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.09,
    shadowRadius: 12,
  },

  dashboardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  dashboardLabel: {
    color: '#A18ABF',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },

  dashboardTitle: {
    color: '#3A2A78',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
  },

  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1EAFB',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
  },

  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#8B65CF',
    marginRight: 6,
  },

  liveText: {
    color: '#7655AA',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  accentLine: {
    height: 2,
    backgroundColor: '#EDE5F7',
    borderRadius: 2,
    marginBottom: 18,
  },

  motivationCard: {
    backgroundColor: '#E9DDF8',
    borderRadius: 22,
    padding: 17,
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },

  motivationIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  motivationEmoji: {
    fontSize: 23,
  },

  motivationContent: {
    flex: 1,
  },

  motivationTitle: {
    color: '#493273',
    fontSize: 12,
    fontWeight: 'bold',
  },

  motivationDescription: {
    color: '#796791',
    fontSize: 10,
    lineHeight: 16,
    marginTop: 5,
  },

  motivationStar: {
    position: 'absolute',
    right: 12,
    top: 8,
    color: '#B49AD8',
    fontSize: 19,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 27,
  },

  footerText: {
    color: '#A292B9',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  footerHeart: {
    fontSize: 11,
    marginHorizontal: 8,
  },
});
