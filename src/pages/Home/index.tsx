import React from 'react'
import { View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  HeaderContent,
  HeaderText,
  ProfileImage,
  MainContent,
  Padding,
  Banner,
  Gradient,
  BannerContent,
  Background,
  BannerTitle,
  BannerTag,
  IconChevronRight,
  SectionHeader,
  SectionTitle,
  ButtonSeeAll,
  TextSeeAll,
  LessonsCard,
  LessonsImage,
  LessonsTitle,
  LessonsDescription,
  TeacherCard,
  TeacherImage,
  TeacherName,
  TeacherExercise,
} from './styles'

import GoalCard from '../../components/GoalCard'
import CardMedia from '../../components/CardMedia'

import profileImage from '../../images/profile-avatar.png'
import yogaImage from '../../images/yoga.png'
import cardioImage from '../../images/cardio.png'
import banner2 from '../../images/banner2.png'
import banner3 from '../../images/banner3.png'
import teacherAline from '../../images/professor-avatar.png'
import teacherLeticia from '../../images/profile-avatar.png'

const dataLessons = [
  {
    name: "Yoga",
    lessons: 15,
    image: yogaImage
  },
  {
    name: "Cardio",
    lessons: 25,
    image: cardioImage
  },
  {
    name: "Pilates",
    lessons: 20,
    image: yogaImage
  }
]
const dataArticles = [
  {
    image: banner2,
    title: "Como manter o foco em época de home office.",
    tag: "Blog",
  },
  {
    image: banner3,
    title: "10 dicas para um treino em grupo ser incrível.",
    tag: "Blog",
  }
]
const dataTeachers = [
  {
    name: "Aline Figueiredo",
    exercise: "Artes marciais",
    image: teacherLeticia
  },
  {
    name: "Letícia Guimarães",
    exercise: "Funcional",
    image: teacherLeticia
  },
  {
    name: "Ricardo",
    exercise: "Funcional",
    image: teacherAline
  }
]

const Home: React.FC = () => {
  const navigation = useNavigation();

  const sectionHeader = ( title: string, onPress?: () => void ) => (
    <SectionHeader>
      <SectionTitle>{title}</SectionTitle>
        <ButtonSeeAll onPress={onPress}>
          <TextSeeAll>Ver todos</TextSeeAll>
        </ButtonSeeAll>
    </SectionHeader>
  )

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <HeaderContent>
            <HeaderText>
              Olá {"\n"}
              Fernanda Amaral
            </HeaderText>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <ProfileImage source={profileImage}/>
            </TouchableOpacity>
          </HeaderContent>
        </Header>

        <MainContent>
          <Padding>
            <GoalCard />

            <Banner>
              <TouchableOpacity>
                <Background>
                  <Gradient />
                  <BannerContent>
                    <View>
                      <BannerTitle>Aulão inaugural</BannerTitle>
                      <BannerTag>Funcional</BannerTag>

                    </View>
                    <IconChevronRight />
                  </BannerContent>
                </Background>
              </TouchableOpacity>
            </Banner>
          
            {sectionHeader("Aulas mais curtidas")}
          </Padding>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataLessons}
            keyExtractor={item => item.name}
            renderItem={item => (
              <LessonsCard fistChild={item.index}>
                <LessonsImage source={item.item.image} />
                <LessonsTitle>{item.item.name}</LessonsTitle>
                <LessonsDescription>{item.item.lessons} Aulas</LessonsDescription>
              </LessonsCard>
            )}
          />

          <Padding>
            {sectionHeader("Nossos artigos")}

            {dataArticles.map((item, index) => (
              <CardMedia
                key={index}
                marginTop={index >= 1 ? true : false}
                image={item.image}
                title={item.title}
                tag={item.tag}
              />
            ))}

            {sectionHeader(
              "Professores em destaque",
              () => navigation.navigate("Teachers")
            )}
          </Padding>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataTeachers}
            keyExtractor={item => item.name}
            renderItem={item => (
              <TouchableOpacity>
                <TeacherCard fistChild={item.index}>
                  <TeacherImage source={item.item.image} />  
                  <TeacherName>{item.item.name}</TeacherName>
                  <TeacherExercise>{item.item.exercise}</TeacherExercise>
                </TeacherCard>
              </TouchableOpacity>
            )}
          />
        </MainContent>
      </Container>
    </SafeAreaView>
  )
}

export default Home;