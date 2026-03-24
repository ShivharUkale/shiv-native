import { StyleSheet } from 'react-native';

export const resumeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: '#f0f4f8'
  },
  
  // Header Styles
  headerCard: {
    backgroundColor: '#667eea',
    padding: 25,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 0,
    // Web-compatible shadow
    boxShadow: '0 4px 8px rgba(102, 126, 234, 0.3)',
    alignItems: 'center'
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#ffd700',
    backgroundColor: '#ffffff'
  },
  profileContainer: {
    marginBottom: 15
  },
  profilePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#ffd700',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileInitials: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#667eea'
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
    color: '#ffd700',
    marginBottom: 15,
    fontWeight: '600',
    textAlign: 'center'
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    flexWrap: 'wrap'
  },
  contactText: {
    fontSize: 14,
    color: '#ffffff',
    marginHorizontal: 8,
    marginBottom: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12
  },
  linkText: {
    fontSize: 14,
    color: '#ffd700',
    marginHorizontal: 8,
    textDecorationLine: 'underline',
    marginBottom: 4,
    fontWeight: '600'
  },
  
  // Section Card Styles
  sectionCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 0,
    // Web-compatible shadow
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
  },
  section: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#ffd700',
    paddingBottom: 8,
    backgroundColor: '#f8f9ff',
    paddingHorizontal: 10,
    borderRadius: 8
  },
  
  // Text Styles
  text: {
    fontSize: 15,
    color: '#2d3748',
    lineHeight: 22,
    marginBottom: 10
  },
  bulletPoint: {
    fontSize: 14,
    color: '#4a5568',
    lineHeight: 20,
    marginBottom: 8,
    marginLeft: 8,
    backgroundColor: '#f7fafc',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#667eea'
  },
  
  // Experience Styles
  experienceCard: {
    backgroundColor: '#f8f9ff',
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e6ebff',
    borderLeftWidth: 4,
    borderLeftColor: '#667eea'
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: 5
  },
  company: {
    fontSize: 16,
    color: '#764ba2',
    fontWeight: '600',
    marginBottom: 5
  },
  date: {
    fontSize: 14,
    color: '#ff6b6b',
    fontStyle: 'italic',
    marginBottom: 12,
    backgroundColor: '#ffe0e0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    alignSelf: 'flex-start'
  },
  
  // Project Styles
  projectCard: {
    backgroundColor: '#f0fff4',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#c6f6d5',
    borderLeftWidth: 4,
    borderLeftColor: '#48bb78'
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f855a',
    marginBottom: 5
  },
  techStack: {
    fontSize: 13,
    fontStyle: 'italic',
    marginBottom: 10,
    backgroundColor: '#ffd700',
    padding: 8,
    borderRadius: 8,
    fontWeight: '600',
    color: '#2d3748'
  },
  
  // Skills Grid
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  skillCategory: {
    width: '48%',
    backgroundColor: '#fff5f5',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fed7d7',
    borderLeftWidth: 4,
    borderLeftColor: '#fc8181'
  },
  skillCategoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#c53030',
    marginBottom: 5
  },
  skillItems: {
    fontSize: 12,
    color: '#2d3748',
    lineHeight: 16,
    backgroundColor: '#ffffff',
    padding: 4,
    borderRadius: 6
  },
  
  // Education Styles
  educationCard: {
    backgroundColor: '#e6fffa',
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#b2f5ea',
    borderLeftWidth: 4,
    borderLeftColor: '#38b2ac'
  },
  degree: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#234e52',
    marginBottom: 5
  },
  institution: {
    fontSize: 15,
    color: '#319795',
    marginBottom: 5,
    fontWeight: '600'
  }
});
