
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

const COLORS = {
  purple: '#7C5CE0',
  inactive: '#A99DBB',
  background: '#FFFFFF',
  border: '#EDE5F8',
};

function TextIcon({
  symbol,
  focused,
}: {
  symbol: string;
  focused: boolean;
}) {
  return (
    <Text
      style={{
        fontSize: focused ? 23 : 21,
        opacity: focused ? 1 : 0.65,
      }}
    >
      {symbol}
    </Text>
  );
}

export default function AppTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: COLORS.purple,
        tabBarInactiveTintColor: COLORS.inactive,

        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          height: 70,
          paddingTop: 7,
          paddingBottom: 8,
          elevation: 8,
          shadowColor: '#7C5CE0',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.08,
          shadowRadius: 8,
        },

        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginTop: 2,
        },

        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TextIcon symbol="🏠" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'About',
          tabBarIcon: ({ focused }) => (
            <TextIcon symbol="💜" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="skills"
        options={{
          title: 'Skills',
          tabBarIcon: ({ focused }) => (
            <TextIcon symbol="✨" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ focused }) => (
            <TextIcon symbol="🎨" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="my-score"
        options={{
          title: 'My Score',
          tabBarIcon: ({ focused }) => (
            <TextIcon symbol="🎓" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ focused }) => (
            <TextIcon symbol="💌" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
