import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';
import Title from './comps/Title';
//import VideoScreen from './comps/VideoScreen/index';
//import Dog from './videofile/dogvideo'
import Constants from 'expo-constants';
//import VideoPlayer from 'react-native-video-player';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      {/* <Video
        source={
          require('./videofile/dogvideo.mp4')
        }
      /> */}
      {/* <VideoPlayer 
        video={require('./videofile/dogvideo.mp4')}
      /> */}
      <Video 
        source={require('./videofile/dogvideo.mp4')}   // Can be a URL or a local file.
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
