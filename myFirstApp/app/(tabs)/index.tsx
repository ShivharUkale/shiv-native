import { View, Text, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { resumeStyles } from '../../styles/resumeStyles';

export default function AboutPage() {
  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/shivhar-ukale-a67285298/');
  };

  const handleGitHubPress = () => {
    Linking.openURL('https://github.com/ShivharUkale');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:shivharukale143@gmail.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+919860186720');
  };
  
  return (
    <ScrollView style={resumeStyles.container}>
      {/* Header */}
      <View style={resumeStyles.headerCard}>
        <View style={resumeStyles.profileContainer}>
          <Image 
            source={require('../../assets/images/shiv11.png')} 
            style={resumeStyles.profileImage}
          />
        </View>
        <Text style={resumeStyles.name}>Shivhar Ukale</Text>
        <Text style={resumeStyles.title}>Full-Stack Developer</Text>
        <View style={resumeStyles.contactRow}>
          <TouchableOpacity onPress={handleEmailPress}>
            <Text style={resumeStyles.linkText}>shivharukale143@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePhonePress}>
            <Text style={resumeStyles.linkText}>+919860186720</Text>
          </TouchableOpacity>
        </View>
        <View style={resumeStyles.contactRow}>
          <Text style={resumeStyles.contactText}>Pune, India</Text>
          <TouchableOpacity onPress={handleLinkedInPress}>
            <Text style={resumeStyles.linkText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGitHubPress}>
            <Text style={resumeStyles.linkText}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Professional Summary */}
      <View style={resumeStyles.sectionCard}>
        <Text style={resumeStyles.section}>PROFESSIONAL SUMMARY</Text>
        <Text style={resumeStyles.text}>
          Results-driven Full-Stack Developer with hands-on experience building scalable web applications using Python (Flask/Django) and React.js. Proven track record delivering 20+ REST APIs, role-based access systems, and multi-tenant platforms that reduced operational overhead by up to 60%. Skilled across the full stack — from database optimization and backend architecture to responsive UI — and experienced collaborating in agile, cross-functional teams.
        </Text>
      </View>

      {/* Education */}
      <View style={resumeStyles.sectionCard}>
        <Text style={resumeStyles.section}>EDUCATION</Text>
        
        <View style={resumeStyles.educationCard}>
          <Text style={resumeStyles.degree}>Bachelor of Engineering — Mechanical</Text>
          <Text style={resumeStyles.institution}>Shrimati Kashibai Navale College of Engineering</Text>
          <Text style={resumeStyles.date}>Jun 2020– Jun 2023</Text>
        </View>
      </View>

      {/* Certifications */}
      <View style={resumeStyles.sectionCard}>
        <Text style={resumeStyles.section}>CERTIFICATIONS</Text>
        
        <Text style={resumeStyles.bulletPoint}>• IBM—Python for Web Development</Text>
        <Text style={resumeStyles.bulletPoint}>• IT Vedant — Master's in Data Software and Engineering</Text>
        <Text style={resumeStyles.bulletPoint}>• IT Vedant — Python Essentials</Text>
        <Text style={resumeStyles.bulletPoint}>• IT Vedant — Web Design Essentials</Text>
        <Text style={resumeStyles.bulletPoint}>• IT Vedant — Foundation with SQL</Text>
      </View>
    </ScrollView>
  );
}
