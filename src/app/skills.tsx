
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import profileData from '../data/profile.json';

// =====================================
// KOMPONEN KARTU SKILL
// =====================================

function SkillCard({
  skill,
  index,
}: {
  skill: {
    id: string;
    name: string;
    description: string;
    level: number;
  };
  index: number;
}) {
  const skillIcons = ['✦', '✧', '◇', '✿', '☆', '❀'];

  return (
    <View style={styles.skillCard}>
      <View style={styles.skillHeader}>
        <View style={styles.skillIcon}>
          <Text style={styles.iconText}>
            {skillIcons[index % skillIcons.length]}
          </Text>
        </View>

        <View style={styles.skillInfo}>
          <Text style={styles.skillName}>{skill.name}</Text>
          <Text style={styles.skillDescription}>
            {skill.description}
          </Text>
        </View>

        <View style={styles.levelBadge}>
          <Text style={styles.percentage}>{skill.level}%</Text>
        </View>
      </View>

      <View style={styles.progressInfo}>
        <Text style={styles.progressLabel}>Skill Progress</Text>
        <Text style={styles.progressStatus}>
          {skill.level >= 80
            ? 'Very Good'
            : skill.level >= 60
            ? 'Developing'
            : 'Learning'}
        </Text>
      </View>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            { width: `${Math.max(0, Math.min(100, skill.level))}%` },
          ]}
        />
      </View>
    </View>
  );
}

// =====================================
// HALAMAN MY SKILLS
// =====================================

export default function SkillsScreen() {
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
          <Text style={styles.headerLabel}>MY ABILITIES</Text>
          <View style={styles.headerStar}>
            <Text style={styles.headerStarText}>✦</Text>
          </View>
        </View>

        <Text style={styles.headerTitle}>My Skills</Text>

        <Text style={styles.headerSubtitle}>
          Every skill starts with a little
          {'\n'}practice and a willingness to learn.
        </Text>

        <View style={styles.headerBottom}>
          <View style={styles.headerLine} />
          <Text style={styles.headerCaption}>LEARN • PRACTICE • IMPROVE</Text>
        </View>
      </View>

      {/* INTRODUCTION */}
      <View style={styles.introCard}>
        <View style={styles.introTop}>
          <View style={styles.introIcon}>
            <Text style={styles.introIconText}>✧</Text>
          </View>

          <View style={styles.introBadge}>
            <Text style={styles.introBadgeText}>MY EXPERTISE</Text>
          </View>
        </View>

        <Text style={styles.introTitle}>
          Skills & Abilities
        </Text>

        <Text style={styles.introDescription}>
          Berikut adalah beberapa keterampilan yang saya
          kembangkan untuk mendukung kemampuan di bidang
          Sistem Informasi. Setiap kemampuan terus saya
          tingkatkan melalui proses belajar dan praktik.
        </Text>

        <View style={styles.introFooter}>
          <Text style={styles.introFooterText}>
            GROWING EVERY DAY
          </Text>
          <Text style={styles.introHeart}>♡</Text>
        </View>
      </View>

      {/* SKILL LIST */}
      <View style={styles.section}>
        <View style={styles.sectionHeading}>
          <View>
            <Text style={styles.sectionEyebrow}>WHAT I CAN DO</Text>
            <Text style={styles.sectionTitle}>My Capabilities</Text>
          </View>

          <Text style={styles.sectionDecoration}>✧</Text>
        </View>

        <Text style={styles.sectionDescription}>
          Beberapa kemampuan yang sedang saya kembangkan.
        </Text>

        {profileData.skills.map((skill, index) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            index={index}
          />
        ))}
      </View>

      {/* MOTIVATION CARD */}
      <View style={styles.motivationCard}>
        <View style={styles.motivationIcon}>
          <Text style={styles.motivationIconText}>🌷</Text>
        </View>

        <Text style={styles.motivationTitle}>
          Learning Never Stops!
        </Text>

        <Text style={styles.motivationDescription}>
          Saya percaya bahwa kemampuan dapat terus berkembang
          melalui kemauan untuk belajar, mencoba hal baru,
          dan memperbaiki diri.
        </Text>

        <View style={styles.motivationTag}>
          <Text style={styles.motivationTagText}>
            KEEP LEARNING, KEEP GROWING
          </Text>
        </View>
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
    fontSize: 20,
    fontWeight: '900',
    color: '#30215F',
    marginBottom: 9,
  },

  introDescription: {
    fontSize: 13,
    color: '#75698D',
    lineHeight: 23,
  },

  introFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0EAF7',
    marginTop: 17,
    paddingTop: 13,
  },

  introFooterText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#AC91C4',
    letterSpacing: 1.5,
  },

  introHeart: {
    fontSize: 22,
    color: '#E58DB5',
  },

  // SKILL SECTION

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

  // SKILL CARD

  skillCard: {
    backgroundColor: '#FFFFFF',
    marginBottom: 14,
    padding: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EEE5F8',
    elevation: 3,
    shadowColor: '#5B3FA8',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
  },

  skillHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  skillIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#F3EAFB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  iconText: {
    fontSize: 23,
    color: '#9C72C9',
  },

  skillInfo: {
    flex: 1,
  },

  skillName: {
    fontSize: 14,
    fontWeight: '900',
    color: '#39276D',
  },

  skillDescription: {
    fontSize: 11,
    color: '#8B819D',
    marginTop: 5,
    lineHeight: 17,
  },

  levelBadge: {
    backgroundColor: '#FCEEF5',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 12,
    marginLeft: 7,
  },

  percentage: {
    fontSize: 12,
    fontWeight: '900',
    color: '#C477A2',
  },

  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
  },

  progressLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A092B5',
  },

  progressStatus: {
    fontSize: 10,
    fontWeight: '800',
    color: '#A17AC6',
  },

  progressBackground: {
    height: 9,
    backgroundColor: '#F0EAF7',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressFill: {
    height: 9,
    backgroundColor: '#B17AD8',
    borderRadius: 10,
  },

  // MOTIVATION

  motivationCard: {
    backgroundColor: '#FCEFF6',
    marginHorizontal: 21,
    marginTop: 13,
    padding: 21,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#F5DDEB',
    alignItems: 'center',
  },

  motivationIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  motivationIconText: {
    fontSize: 25,
  },

  motivationTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#8E4778',
    textAlign: 'center',
  },

  motivationDescription: {
    fontSize: 12,
    lineHeight: 21,
    color: '#986F8B',
    textAlign: 'center',
    marginTop: 9,
  },

  motivationTag: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 16,
    marginTop: 16,
  },

  motivationTagText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#B56D99',
    letterSpacing: 1.1,
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
