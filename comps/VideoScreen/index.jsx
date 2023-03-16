import React from 'react';
import { Text, View } from 'react-native';
import Video from 'react-native-video';
import styles from './styles'

const VideoScreen = () => {
  return (
    <View>
      <Video
        source={require('../videofile/dogvideo.mp4')}
        //style={styles.backgroundVideo}
      />
    </View>
  )
}

export default VideoScreen;