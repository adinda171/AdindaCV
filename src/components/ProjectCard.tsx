
import { StyleSheet, Text, View } from 'react-native';

type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technology: string;
  icon: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <View style={styles.projectCard}>
      <View style={styles.projectTop}>
        <View style={styles.projectIcon}>
          <Text style={styles.iconText}>{project.icon}</Text>
        </View>

        <Text style={styles.projectNumber}>
          PROJECT {project.number}
        </Text>
      </View>

      <Text style={styles.category}>{project.category}</Text>

      <Text style={styles.projectTitle}>
        {project.title}
      </Text>

      <Text style={styles.description}>
        {project.description}
      </Text>

      <View style={styles.divider} />

      <Text style={styles.techLabel}>TECHNOLOGY</Text>

      <Text style={styles.technology}>
        {project.technology}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  projectCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 18,
    marginTop: 15,
    padding: 19,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E5EAF2',
  },
  projectTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
  },
  projectIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#EAF2F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 25,
  },
  projectNumber: {
    fontSize: 11,
    color: '#3498DB',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  category: {
    fontSize: 11,
    color: '#3498DB',
    fontWeight: '600',
    marginBottom: 7,
  },
  projectTitle: {
    fontSize: 17,
    color: '#0A3D62',
    fontWeight: 'bold',
    marginBottom: 9,
  },
  description: {
    fontSize: 13,
    color: '#718096',
    lineHeight: 21,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5EAF2',
    marginVertical: 15,
  },
  techLabel: {
    fontSize: 10,
    color: '#98A2B3',
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 6,
  },
  technology: {
    fontSize: 12,
    color: '#0A3D62',
    fontWeight: '600',
  },
});
