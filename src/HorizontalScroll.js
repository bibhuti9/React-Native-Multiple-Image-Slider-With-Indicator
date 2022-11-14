import {View, Text, StyleSheet, Image, FlatList, Animated} from 'react-native';
import React, {useRef} from 'react';

import {images} from './data/dummyData';
import {SIZES, COLORS} from './themes/colors';
import Indicators from './components/Indicators';
export default function HorizontalScroll() {
  const scroll = useRef(new Animated.Value(0)).current;
  const renderItem = ({item}) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{uri: item.iconName}} style={styles.imageStyle} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scroll}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}
        snapToInterval={SIZES.width}
        decelerationRate={'fast'}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Indicators data={images} scroll={scroll} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: SIZES.width,
  },
  imageStyle: {
    width: SIZES.width,
    height: 300,
  },
});
