import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#8b5cf6',
        tabBarStyle: {
          backgroundColor: '#667eea',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#667eea',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          height: 75,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '700',
          marginTop: 2,
          marginBottom: 2,
          color: '#ffffff',
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={28} 
              name="person.fill" 
              color={focused ? '#ffffff' : '#ffd700'} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          title: 'Experience',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={28} 
              name="briefcase.fill" 
              color={focused ? '#ffffff' : '#ffd700'} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={28} 
              name="folder.fill" 
              color={focused ? '#ffffff' : '#ffae00'} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="skills"
        options={{
          title: 'Skills',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={28} 
              name="star.fill" 
              color={focused ? '#ffffff' : '#ffd700'} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
