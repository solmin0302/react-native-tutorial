import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View``;
const Title = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  padding: 24px 16px 8px 16px;
`;
const CastContaienr = styled.View`
  padding: 0 4px;
`;

const CastImage = styled.Image``;
const LabelName = styled.Text`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 4px 2px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

interface Props {
  cast: Array<ICast>;
}
const CastList = ({cast}: Props) => {
  return (
    <CastContaienr>
      <Container>
        <Title>배우</Title>
        <FlatList
          horizontal={true}
          data={cast}
          keyExtractor={(item, index) => {
            return `castList-${index}`;
          }}
          renderItem={({item, index}) => (
            <CastContaienr>
              <CastImage
                source={{uri: (item as ICast).url_small_image}}
                style={{width: 100, height: 100}}
              />
              <LabelName>{(item as ICast).name}</LabelName>
            </CastContaienr>
          )}
        />
      </Container>
    </CastContaienr>
  );
};

export default CastList;
