
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type AcademicDashboardProps = {
  data: {
    academic: {
      name: string;
      nim: string;
      course: string;
      lecturer: string;
    };
    currentScore: {
      score: number;
      grade: string;
    };
    learningPoints: {
      total: number;
    };
    learningProgress: {
      id: string;
      name: string;
      percentage: number;
    }[];
  };
};

export default function AcademicDashboard({
  data,
}: AcademicDashboardProps) {
  const score = data.currentScore.score;

  const progressColors = [
    '#8B65CF',
    '#D18ACB',
    '#A58AE0',
    '#DCA5C9',
    '#9272CE',
  ];

  return (
    <View style={styles.container}>

      {/* ACADEMIC IDENTITY */}
      <View style={styles.identityCard}>
        <View style={styles.identityHeader}>
          <View style={styles.identityIcon}>
            <Text style={styles.identityEmoji}>🎓</Text>
          </View>

          <View style={styles.identityHeading}>
            <Text style={styles.eyebrow}>STUDENT INFORMATION</Text>
            <Text style={styles.identityTitle}>
              Academic Identity
            </Text>
          </View>

          <View style={styles.identityBadge}>
            <Text style={styles.identityBadgeText}>01</Text>
          </View>
        </View>

        <View style={styles.identityDivider} />

        <View style={styles.nameContainer}>
          <Text style={styles.nameLabel}>FULL NAME</Text>
          <Text style={styles.studentName}>
            {data.academic.name}
          </Text>
        </View>

        <View style={styles.identityGrid}>
          <View style={styles.identityInfo}>
            <Text style={styles.infoLabel}>STUDENT ID</Text>
            <Text style={styles.infoValue}>
              {data.academic.nim}
            </Text>
          </View>

          <View style={styles.identityInfo}>
            <Text style={styles.infoLabel}>COURSE</Text>
            <Text style={styles.infoValue}>
              {data.academic.course}
            </Text>
          </View>
        </View>

        <View style={styles.lecturerBox}>
          <Text style={styles.lecturerIcon}>✦</Text>
          <View style={styles.lecturerContent}>
            <Text style={styles.infoLabel}>LECTURER</Text>
            <Text style={styles.lecturerName}>
              {data.academic.lecturer}
            </Text>
          </View>
        </View>
      </View>

      {/* SCORE HIGHLIGHT */}
      <View style={styles.scoreCard}>
        <View style={styles.scoreDecorationOne} />
        <View style={styles.scoreDecorationTwo} />

        <View style={styles.scoreTop}>
          <View>
            <Text style={styles.scoreEyebrow}>
              YOUR PERFORMANCE
            </Text>
            <Text style={styles.scoreHeading}>
              Current Score
            </Text>
          </View>

          <View style={styles.scoreIcon}>
            <Text style={styles.scoreIconText}>🏆</Text>
          </View>
        </View>

        <View style={styles.scoreMain}>
          <View>
            <Text style={styles.scoreNumber}>
              {score}
            </Text>
            <Text style={styles.scoreDescription}>
              Academic Score
            </Text>
          </View>

          <View style={styles.gradeContainer}>
            <Text style={styles.gradeLabel}>GRADE</Text>
            <Text style={styles.gradeValue}>
              {data.currentScore.grade}
            </Text>
          </View>
        </View>

        <View style={styles.scoreDivider} />

        <View style={styles.scoreBottom}>
          <Text style={styles.scoreBottomText}>
            ✦ Keep learning, keep improving.
          </Text>
          <Text style={styles.scoreBottomText}>
            ACADEMIC
          </Text>
        </View>
      </View>

      {/* LEARNING POINTS */}
      <View style={styles.pointsCard}>
        <View style={styles.pointsIcon}>
          <Text style={styles.pointsEmoji}>💎</Text>
        </View>

        <View style={styles.pointsContent}>
          <Text style={styles.pointsLabel}>
            TOTAL LEARNING POINTS
          </Text>
          <Text style={styles.pointsValue}>
            {data.learningPoints.total.toLocaleString('id-ID')}
          </Text>
          <Text style={styles.pointsDescription}>
            Accumulated Learning Points
          </Text>
        </View>

        <View style={styles.pointsDecoration}>
          <Text style={styles.pointsStar}>✦</Text>
        </View>
      </View>

      {/* LEARNING PROGRESS */}
      <View style={styles.progressCard}>
        <View style={styles.progressTop}>
          <View>
            <Text style={styles.progressEyebrow}>
              KEEP MOVING FORWARD
            </Text>
            <Text style={styles.progressTitle}>
              Learning Progress
            </Text>
            <Text style={styles.progressSubtitle}>
              Perkembangan proses pembelajaran
            </Text>
          </View>

          <View style={styles.progressIcon}>
            <Text style={styles.progressIconText}>📈</Text>
          </View>
        </View>

        <View style={styles.progressDivider} />

        {data.learningProgress.map((item, index) => {
          const percentage = Math.max(
            0,
            Math.min(100, item.percentage)
          );

          return (
            <View key={item.id} style={styles.progressItem}>
              <View style={styles.progressHeader}>
                <View style={styles.progressNameContainer}>
                  <View
                    style={[
                      styles.progressDot,
                      {
                        backgroundColor:
                          progressColors[index % progressColors.length],
                      },
                    ]}
                  />
                  <Text style={styles.progressName}>
                    {item.name}
                  </Text>
                </View>

                <Text style={styles.percentage}>
                  {item.percentage}%
                </Text>
              </View>

              <View style={styles.progressBackground}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${percentage}%`,
                      backgroundColor:
                        progressColors[index % progressColors.length],
                    },
                  ]}
                />
              </View>
            </View>
          );
        })}

        {data.learningProgress.length === 0 && (
          <View style={styles.emptyProgress}>
            <Text style={styles.emptyProgressText}>
              Belum ada data learning progress.
            </Text>
          </View>
        )}

        <View style={styles.progressFooter}>
          <Text style={styles.progressFooterIcon}>✦</Text>
          <Text style={styles.progressFooterText}>
            Progress is a journey, not a competition.
          </Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 17,
  },

  // IDENTITY CARD
  identityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 23,
    padding: 19,
    borderWidth: 1,
    borderColor: '#EAE0F5',
    elevation: 4,
    shadowColor: '#50347F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
  },

  identityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  identityIcon: {
    width: 47,
    height: 47,
    borderRadius: 16,
    backgroundColor: '#F0E7FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  identityEmoji: {
    fontSize: 23,
  },

  identityHeading: {
    flex: 1,
  },

  eyebrow: {
    fontSize: 8,
    color: '#A18ABF',
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },

  identityTitle: {
    color: '#3A2A78',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },

  identityBadge: {
    width: 31,
    height: 31,
    borderRadius: 11,
    backgroundColor: '#F4EFFB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  identityBadgeText: {
    color: '#8B65CF',
    fontWeight: 'bold',
    fontSize: 11,
  },

  identityDivider: {
    height: 1,
    backgroundColor: '#F0EAF6',
    marginVertical: 18,
  },

  nameContainer: {
    backgroundColor: '#F8F4FC',
    borderRadius: 15,
    padding: 14,
    marginBottom: 12,
  },

  nameLabel: {
    fontSize: 8,
    color: '#A18ABF',
    fontWeight: 'bold',
    letterSpacing: 1.2,
    marginBottom: 7,
  },

  studentName: {
    color: '#493273',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
  },

  identityGrid: {
    flexDirection: 'row',
    gap: 10,
  },

  identityInfo: {
    flex: 1,
    backgroundColor: '#FBF9FD',
    borderRadius: 14,
    padding: 12,
    minHeight: 68,
  },

  infoLabel: {
    color: '#A18ABF',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 7,
  },

  infoValue: {
    color: '#594675',
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 17,
  },

  lecturerBox: {
    backgroundColor: '#F4EFFB',
    borderRadius: 14,
    padding: 13,
    marginTop: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },

  lecturerIcon: {
    color: '#8B65CF',
    fontSize: 22,
    marginRight: 12,
  },

  lecturerContent: {
    flex: 1,
  },

  lecturerName: {
    color: '#594675',
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 17,
  },

  // SCORE CARD
  scoreCard: {
    backgroundColor: '#493078',
    borderRadius: 24,
    padding: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#493078',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },

  scoreDecorationOne: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#60478E',
    top: -70,
    right: -35,
    opacity: 0.7,
  },

  scoreDecorationTwo: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#9279C4',
    bottom: -45,
    left: 100,
    opacity: 0.5,
  },

  scoreTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  scoreEyebrow: {
    color: '#C9B9E8',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },

  scoreHeading: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
  },

  scoreIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: '#654A96',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scoreIconText: {
    fontSize: 23,
  },

  scoreMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 23,
  },

  scoreNumber: {
    color: '#FFFFFF',
    fontSize: 49,
    fontWeight: '900',
    letterSpacing: -1,
  },

  scoreDescription: {
    color: '#D3C8EB',
    fontSize: 10,
    marginTop: 2,
  },

  gradeContainer: {
    backgroundColor: '#F0D8EF',
    width: 76,
    height: 76,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '5deg' }],
  },

  gradeLabel: {
    color: '#87639B',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  gradeValue: {
    color: '#493078',
    fontSize: 29,
    fontWeight: '900',
    marginTop: 2,
  },

  scoreDivider: {
    height: 1,
    backgroundColor: '#725B9B',
    marginVertical: 19,
  },

  scoreBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  scoreBottomText: {
    color: '#E2D7F5',
    fontSize: 9,
    fontWeight: '600',
  },

  // LEARNING POINTS
  pointsCard: {
    backgroundColor: '#F0E7FB',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5D8F4',
  },

  pointsIcon: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  pointsEmoji: {
    fontSize: 27,
  },

  pointsContent: {
    flex: 1,
  },

  pointsLabel: {
    color: '#9175B4',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },

  pointsValue: {
    color: '#493078',
    fontSize: 27,
    fontWeight: '900',
    marginTop: 4,
  },

  pointsDescription: {
    color: '#907DA8',
    fontSize: 9,
    marginTop: 3,
  },

  pointsDecoration: {
    position: 'absolute',
    right: 12,
    top: 8,
  },

  pointsStar: {
    color: '#B49AD8',
    fontSize: 21,
  },

  // PROGRESS
  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 23,
    padding: 19,
    borderWidth: 1,
    borderColor: '#EAE0F5',
    elevation: 4,
    shadowColor: '#50347F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
  },

  progressTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  progressEyebrow: {
    color: '#A18ABF',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1.4,
  },

  progressTitle: {
    color: '#3A2A78',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },

  progressSubtitle: {
    color: '#9A8EAB',
    fontSize: 10,
    marginTop: 5,
  },

  progressIcon: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: '#F1E8FB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  progressIconText: {
    fontSize: 22,
  },

  progressDivider: {
    height: 1,
    backgroundColor: '#F0EAF6',
    marginVertical: 19,
  },

  progressItem: {
    marginBottom: 19,
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 9,
  },

  progressNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },

  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9,
  },

  progressName: {
    fontSize: 11,
    color: '#594675',
    fontWeight: '600',
    flexShrink: 1,
  },

  percentage: {
    fontSize: 11,
    color: '#7655AA',
    fontWeight: 'bold',
  },

  progressBackground: {
    height: 10,
    backgroundColor: '#F0EAF6',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressFill: {
    height: 10,
    borderRadius: 10,
  },

  emptyProgress: {
    paddingVertical: 18,
    alignItems: 'center',
  },

  emptyProgressText: {
    color: '#9A8EAB',
    fontSize: 11,
  },

  progressFooter: {
    backgroundColor: '#F8F4FC',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  progressFooterIcon: {
    color: '#A17BCF',
    fontSize: 15,
    marginRight: 9,
  },

  progressFooterText: {
    color: '#89779F',
    fontSize: 9,
    fontStyle: 'italic',
    flex: 1,
  },
});
