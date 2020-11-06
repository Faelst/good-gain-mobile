import React from 'react'
import { ImageSourcePropType } from 'react-native'

import {
  CardContainer,
  ProfileImage,
  ProfileContent,
  TextName,
  AcademicText,
  LocationText,
  DetailIconContent,
  IconMapPin,
  IconChevronRight
} from './styles'

import { Card } from '../Card'

interface ProfileCardProps {
  image: ImageSourcePropType
  name: string
  academic: string
  location: string
  detailsIcon?: boolean
  enable?: boolean
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  image, name, academic, location, detailsIcon, enable
}) => {
  return (
    <Card enabled={enable}>
      <CardContainer>
        <ProfileImage
          resizeMode="contain"
          source={image}
        />

        <ProfileContent>
          <TextName>{name}</TextName>
          <AcademicText>{academic}</AcademicText>
          <LocationText>
            <IconMapPin />
            {` ${location}`}
          </LocationText>
        </ProfileContent>

        <DetailIconContent detailsIcon={detailsIcon}>
          <IconChevronRight />
        </DetailIconContent>
      </CardContainer>
    </Card>
  )
}

export default ProfileCard