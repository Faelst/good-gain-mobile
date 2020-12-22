import React, { useContext } from 'react';
import { Container, Header, Title, Label, Text, TabControls } from './styles';
import {
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabButton from './components/TabButton'
import BackButton from '../../components/BackButton';
import { separatorHorizontal } from '../../utils/separator'

import Octaves from '../../pages/Switching/views/Octaves';
import Quarterfinals from '../../pages/Switching/views/Quarterfinals';
import Semi from '../../pages/Switching/views/Semi';

const initialLayout = { width: Dimensions.get('window').width };
import { useNavigation } from '@react-navigation/native';

const Switching: React.FC = (props: any) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'octaves', title: 'Oitavas' },
    { key: 'quarterfinals', title: 'Quartas' },
    { key: 'semi', title: 'Semi' }
  ]);

  const renderScene = SceneMap({
    octaves: Octaves,
    quarterfinals: Quarterfinals,
    semi: Semi
  });

  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{ flexGrow: 1}}
    >
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Container>
          <StatusBar barStyle="light-content" backgroundColor="transparent" />
          <Header>
            <Title>{`Chaveamento\ndo Campeonato`}</Title>
            <BackButton name="x" onPress={navigation.goBack} />
          </Header>
          <TabControls>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{alignItems: "center"}}
            >
              {routes.map((route, $index, array) => (
                  <TabButton
                    key={route.key}
                    onPress={() => setIndex($index)}
                    selected={$index === index}
                    style={separatorHorizontal($index, array, 24, 8, 24)}
                  >
                    {route.title}
                  </TabButton>
              ))}
            </ScrollView>
          </TabControls>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={() => null}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Switching;
