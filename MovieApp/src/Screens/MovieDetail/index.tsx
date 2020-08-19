import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

import BigCatalog from '~/Components/BigCatalog';
import Loading from '~/Screens/Loading';
import CastList from './CastList';
import ScreenShotList from '../ScreenShotList';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #141414;
`;

const LoadingContainer = styled.View`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`;

const ContainerTitle = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  padding: 24px 16px 8px 16px;
`;
const DescriptionContaier = styled.View``;

const Description = styled.Text`
  color: #ffffff;
  padding: 0 16px;
`;

const SubInfoContainer = styled.View``;

const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;

const LabelInfo = styled.Text`
  color: #ffffff;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const MovieDetail = ({navigation}: Props) => {
  const [data, setData] = useState<IMovieDetail>();

  useEffect(() => {
    const id = navigation.getParam('id');
    fetch(
      `https://yts.lt/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.data.movie);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }, []);

  return data ? (
    <Container>
      <BigCatalog
        id={data.id}
        image={data.large_cover_image}
        year={data.year}
        title={data.title}
        genres={data.genres}
      />
      <SubInfoContainer>
        <ContainerTitle>영화 정보</ContainerTitle>
        <InfoContainer>
          <LabelInfo>{data.runtime}분</LabelInfo>
          <LabelInfo>평점: {data.rating}</LabelInfo>
          <LabelInfo>좋아요: {data.like_count}</LabelInfo>
        </InfoContainer>
      </SubInfoContainer>
      <DescriptionContaier>
        <ContainerTitle>줄거리</ContainerTitle>
        <Description>{data.description_full}</Description>
      </DescriptionContaier>
      {data.cast && <CastList cast={data.cast} />}
      <ScreenShotList
        images={[
          data.large_screenshot_image1,
          data.large_screenshot_image2,
          data.large_screenshot_image3,
        ]}
      />
    </Container>
  ) : (
    <Loading />
  );
};

MovieDetail.navigationOptions = {
  title: 'MOVIEAPP',
  headerTintColor: '#E70915',
  headerStyle: {
    backgroundColor: '#141414',
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitle: null,
};

export default MovieDetail;
