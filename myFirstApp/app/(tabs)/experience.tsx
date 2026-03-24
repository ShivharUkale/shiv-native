import { View, Text, ScrollView } from 'react-native';
import { resumeStyles } from '../../styles/resumeStyles';

export default function ExperiencePage() {
  return (
    <ScrollView style={resumeStyles.container}>
      {/* Professional Experience */}
      <View style={resumeStyles.sectionCard}>
        <Text style={resumeStyles.section}>PROFESSIONAL EXPERIENCE</Text>
        
        <View style={resumeStyles.experienceCard}>
          <Text style={resumeStyles.subTitle}>Full-Stack Developer</Text>
          <Text style={resumeStyles.company}>Zerlak Technology Pvt Ltd · Pune, India</Text>
          <Text style={resumeStyles.date}>Dec 2024– Present</Text>
          
          <Text style={resumeStyles.bulletPoint}>• Built and maintained full-stack applications using Python and React.js, ensuring high performance and scalability.</Text>
          <Text style={resumeStyles.bulletPoint}>• Designed and integrated RESTful APIs; managed relational databases and optimized backend queries to measurably reduce API response times.</Text>
          <Text style={resumeStyles.bulletPoint}>• Implemented authentication and Role-Based Access Control (RBAC), enforcing secure, structured user access across all system roles.</Text>
          <Text style={resumeStyles.bulletPoint}>• Engineered reusable, responsive UI components using modern React patterns and state management techniques.</Text>
          <Text style={resumeStyles.bulletPoint}>• Optimized database schemas, indexing strategies, and query plans, improving overall backend throughput.</Text>
          <Text style={resumeStyles.bulletPoint}>• Contributed to system design discussions, improving architecture modularity and long-term maintainability.</Text>
          <Text style={resumeStyles.bulletPoint}>• Collaborated with designers, QA engineers, and product managers to consistently deliver features on schedule.</Text>
          <Text style={resumeStyles.bulletPoint}>• Managed version control via Git/GitHub; conducted code reviews and enforced clean-code best practices.</Text>
          <Text style={resumeStyles.bulletPoint}>• Performed debugging, performance profiling, and testing to enhance application stability and reliability.</Text>
          <Text style={resumeStyles.bulletPoint}>• Assisted in deployment pipelines, monitoring, and production support for smooth application releases.</Text>
        </View>
      </View>
    </ScrollView>
  );
}
