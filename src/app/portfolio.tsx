
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ProjectCard from '../components/ProjectCard';
import projects from '../data/portfolio.json';
import profileData from '../data/profile.json';

// =====================================
// KOMPONEN STATISTIK PORTOFOLIO
// =====================================

function PortfolioStat({
  number,
  label,
  icon,
}: {
  number: string;
  label: string;
  icon: string;
}) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statIcon}>
        <Text style={styles.statIconText}>{icon}</Text>
      </View>

      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

// =====================================
// HALAMAN PORTFOLIO
// =====================================

export default function PortfolioScreen() {
  const categories = new Set(
    projects.map((project) => project.category)
  );

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
          <Text style={styles.headerLabel}>MY CREATIVE WORK</Text>

          <View style={styles.headerStar}>
            <Text style={styles.headerStarText}>✦</Text>
          </View>
        </View>

        <Text style={styles.headerTitle}>My Portfolio</Text>

        <Text style={styles.headerSubtitle}>
          Ideas, creativity, and experiences
          {'\n'}collected through every project.
        </Text>

        <View style={styles.headerBottom}>
          <View style={styles.headerLine} />
          <Text style={styles.headerCaption}>
            MY PROJECT COLLECTION
          </Text>
        </View>
      </View>

      {/* INTRODUCTION */}
      <View style={styles.introCard}>
        <View style={styles.introTop}>
          <View style={styles.introIcon}>
            <Text style={styles.introIconText}>✧</Text>
          </View>

          <View style={styles.introBadge}>
            <Text style={styles.introBadgeText}>MY WORKSPACE</Text>
          </View>
        </View>

        <Text style={styles.introTitle}>
          Turning Ideas Into Projects
        </Text>

        <Text style={styles.introDescription}>
          Setiap proyek menjadi kesempatan untuk belajar,
          mengeksplorasi ide, dan mengembangkan kemampuan
          di bidang teknologi informasi serta desain.
        </Text>
      </View>

      {/* PORTFOLIO STATISTICS */}
      <View style={styles.statsContainer}>
        <PortfolioStat
          number={String(projects.length).padStart(2, '0')}
          label="Total Projects"
          icon="📁"
        />

        <PortfolioStat
          number={String(categories.size).padStart(2, '0')}
          label="Project Fields"
          icon="✦"
        />
      </View>

      {/* PROJECT LIST */}
      <View style={styles.section}>
        <View style={styles.sectionHeading}>
          <View>
            <Text style={styles.sectionEyebrow}>
              MY SELECTED WORK
            </Text>

            <Text style={styles.sectionTitle}>
              Selected Projects
            </Text>
          </View>

          <Text style={styles.sectionDecoration}>✧</Text>
        </View>

        <Text style={styles.sectionDescription}>
          Beberapa hasil proyek dan eksplorasi yang berkaitan
          dengan proses pembelajaran saya.
        </Text>

        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📁</Text>

            <Text style={styles.emptyTitle}>
              Belum Ada Proyek
            </Text>

            <Text style={styles.emptyDescription}>
              Data proyek belum tersedia saat ini.
            </Text>
          </View>
        )}
      </View>

      {/* CREATIVE JOURNEY */}
      <View style={styles.journeyCard}>
        <View style={styles.journeyIcon}>
          <Text style={styles.journeyIconText}>🌷</Text>
        </View>

        <Text style={styles.journeyTitle}>
          My Creative Journey
        </Text>

        <Text style={styles.journeyDescription}>
          Saya senang mempelajari hal baru, mencoba berbagai
          teknologi, dan mengembangkan ide menjadi sebuah
          karya yang bermanfaat.
        </Text>

        <View style={styles.journeyDivider} />

        <Text style={styles.journeyQuote}>
          "Small steps lead to great things."
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
    letterSpacing: 1.5,
  },

  // INTRODUCTION

  introCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 21,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#EEE5F8',
    elevation: 4,
    shadowColor: '#5B3FA8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.09,
    shadowRadius: 10,
  },

  introTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  introIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: '#F0E5FC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  introIconText: {
    fontSize: 25,
    color: '#A879D2',
  },

  introBadge: {
    backgroundColor: '#FCEEF5',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 15,
  },

  introBadgeText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#C478A2',
    letterSpacing: 1,
  },

  introTitle: {
    fontSize: 19,
    fontWeight: '900',
    color: '#30215F',
    marginBottom: 9,
  },

  introDescription: {
    fontSize: 13,
    color: '#75698D',
    lineHeight: 23,
  },

  // STATISTICS

  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 17,
    gap: 12,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    padding: 15,
    borderWidth: 1,
    borderColor: '#EEE5F8',
    alignItems: 'center',
  },

  statIcon: {
    width: 39,
    height: 39,
    borderRadius: 13,
    backgroundColor: '#F5EEFC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 9,
  },

  statIconText: {
    fontSize: 20,
  },

  statNumber: {
    fontSize: 23,
    fontWeight: '900',
    color: '#5B3FA8',
  },

  statLabel: {
    fontSize: 10,
    color: '#9688AA',
    fontWeight: '700',
    marginTop: 4,
  },

  // PROJECT SECTION

  section: {
    marginHorizontal: 21,
    marginTop: 30,
  },

  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 13,
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

  sectionDescription: {
    fontSize: 12,
    color: '#887B9E',
    lineHeight: 20,
    marginBottom: 17,
  },

  // EMPTY STATE

  emptyContainer: {
    backgroundColor: '#FFFFFF',
    padding: 27,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEE5F8',
  },

  emptyIcon: {
    fontSize: 38,
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#39276D',
  },

  emptyDescription: {
    fontSize: 12,
    color: '#887B9E',
    marginTop: 7,
    textAlign: 'center',
  },

  // JOURNEY

  journeyCard: {
    backgroundColor: '#FCEFF6',
    marginHorizontal: 21,
    marginTop: 20,
    padding: 21,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#F5DDEB',
    alignItems: 'center',
  },

  journeyIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  journeyIconText: {
    fontSize: 25,
  },

  journeyTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#8E4778',
    textAlign: 'center',
  },

  journeyDescription: {
    fontSize: 12,
    lineHeight: 21,
    color: '#986F8B',
    textAlign: 'center',
    marginTop: 9,
  },

  journeyDivider: {
    width: 40,
    height: 3,
    borderRadius: 5,
    backgroundColor: '#E9B5D0',
    marginTop: 17,
    marginBottom: 13,
  },

  journeyQuote: {
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#B56D99',
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
