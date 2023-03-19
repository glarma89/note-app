import React from 'react';
import { Text, View } from 'react-native';
import Video from 'react-native-video';
import styles from './styles'

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Video
        // source={{
        //   uri: 'https://media.istockphoto.com/id/1389532697/video/choosing-the-right-shade-from-color-palette-collection-closeup.mp4?s=mp4-640x640-is&k=20&c=2ZJHKhw1tu7x_uu75Ab0gI9InHHfS-wqYCOPhdNb9i0='
        // }}
        source={require('../../videofile/dogvideo.mp4')}
        style={styles.backgroundVideo}
      />
    </View>
  )
}

export default VideoScreen;