import { View, Text, ScrollView } from 'react-native';
import { resumeStyles } from '../../styles/resumeStyles';

export default function SkillsPage() {
  return (
    <ScrollView style={resumeStyles.container}>
      {/* Technical Skills */}
      <View style={resumeStyles.sectionCard}>
        <Text style={resumeStyles.section}>TECHNICAL SKILLS</Text>
        
        <View style={resumeStyles.skillsGrid}>
          <View style={resumeStyles.skillCategory}>
            <Text style={resumeStyles.skillCategoryTitle}>Backend</Text>
            <Text style={resumeStyles.skillItems}>Python, Flask, Django</Text>
          </View>
          
          <View style={resumeStyles.skillCategory}>
            <Text style={resumeStyles.skillCategoryTitle}>Frontend</Text>
            <Text style={resumeStyles.skillItems}>HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS</Text>
          </View>
          
          <View style={resumeStyles.skillCategory}>
            <Text style={resumeStyles.skillCategoryTitle}>Databases</Text>
            <Text style={resumeStyles.skillItems}>MySQL, Microsoft SQL Server</Text>
          </View>
          
          {/* <View style={resumeStyles.skillCategory}>
            <Text style={resumeStyles.skillCategoryTitle}>ML / Data</Text>
            <Text style={resumeStyles.skillItems}>TensorFlow, Scikit-learn, OpenCV, XGBoost, Pandas, NumPy, Matplotlib</Text>
          </View> */}
          
          <View style={resumeStyles.skillCategory}>
            <Text style={resumeStyles.skillCategoryTitle}>Tools & IDEs</Text>
            <Text style={resumeStyles.skillItems}>Git, GitHub, GitLab, VS Code, PyCharm, Jupyter Notebook, PyQt5, Windsurf</Text>
          </View>
          
          <View style={resumeStyles.skillCategory}>
            <Text style={resumeStyles.skillCategoryTitle}>AI Platforms</Text>
            <Text style={resumeStyles.skillItems}>OpenAI, ChatGPT, GitHub Copilot, Google Gemini, Claude AI</Text>
          </View>
          
          <View style={resumeStyles.skillCategory}>
            <Text style={resumeStyles.skillCategoryTitle}>Other</Text>
            <Text style={resumeStyles.skillItems}>RESTful APIs, RBAC, OOP, Agile/Scrum collaboration</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
