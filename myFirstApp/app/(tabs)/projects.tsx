import { View, Text, ScrollView } from 'react-native';
import { resumeStyles } from '../../styles/resumeStyles';

export default function ProjectsPage() {
  return (
    <ScrollView style={resumeStyles.container}>
      {/* Projects */}
      <View style={resumeStyles.sectionCard}>
        <Text style={resumeStyles.section}>PROJECTS</Text>
        
        <View style={resumeStyles.projectCard}>
          <Text style={resumeStyles.projectTitle}>StudyRoom — Multi-Tenant Library Management System</Text>
          <Text style={resumeStyles.techStack}>Python, Flask, React.js, RESTful APIs, MySQL, HTML5, CSS3, JavaScript</Text>
          
          <Text style={resumeStyles.bulletPoint}>• Multi-tenant web platform managing 1,000+ student records, multiple libraries, rooms, and seats with real-time availability tracking.</Text>
          <Text style={resumeStyles.bulletPoint}>• Built 20+ backend APIs with RBAC (Super Admin / Tenant / Admin), subscription & payment management, and automated expiry reminders.</Text>
          <Text style={resumeStyles.bulletPoint}>• Replaced manual record-keeping with a fully digital solution, cutting admin effort by ~60% and improving operational efficiency by ~50%.</Text>
        </View>

        <View style={resumeStyles.projectCard}>
          <Text style={resumeStyles.projectTitle}>BookStore — Online Bookstore Web Application</Text>
          <Text style={resumeStyles.techStack}>HTML5, CSS3, JavaScript, Python (Django), Bootstrap</Text>
          
          <Text style={resumeStyles.bulletPoint}>• Responsive bookstore supporting CRUD operations for books/categories, user sessions, and cart functionality with a dynamic UI.</Text>
          <Text style={resumeStyles.bulletPoint}>• Handles 100+ book entries with search and filter capabilities, improving browsing efficiency by ~40%.</Text>
        </View>
      </View>
    </ScrollView>
  );
}
