import React from 'react'
import { MaterialTopTabBarOptions } from '@react-navigation/material-top-tabs';
import { Container, TabButton, TabTextLabel } from './styles'

interface MyTabProps extends MaterialTopTabBarOptions {
  state: any
  descriptors: any
  navigation: any
}

const CustomTabBar: React.FC<MyTabProps> = ({
  state, descriptors, navigation
}) => {
  return (
    <Container>
      { state.routes.map((
          route: {
            key: React.ReactText;
            name: string;
          }, index: number
        ) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabButton
              key={index}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <TabTextLabel isFocused={isFocused}>{label}</TabTextLabel>
            </TabButton>
          )
        })
      }
    </Container>
  )
}

export default CustomTabBar
