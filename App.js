import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
//import Video from 'react-native-video';
import Title from './comps/Title';
//import VideoScreen from './comps/VideoScreen/index';
//import Dog from './videofile/dogvideo'
import Constants from 'expo-constants';
//import VideoPlayer from 'react-native-video-player';
import { Platform } from 'react-native';
import { Video } from 'expo-av';
import React from 'react';
//import { useState } from 'react';


export default function App() {
  const video = React.useRef(null)
  const [statusVideo, setStatusVideo] = React.useState({})


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
      {/* <Video 
        source={{
          uri:
          'https://media.istockphoto.com/id/1389532697/video/choosing-the-right-shade-from-color-palette-collection-closeup.mp4?s=mp4-640x640-is&k=20&c=2ZJHKhw1tu7x_uu75Ab0gI9InHHfS-wqYCOPhdNb9i0='
        }}   // Can be a URL or a local file.
      /> */}
      {/* <VideoScreen/> */}
      <Video
        ref={video}
        style={styles.video}
        source={require("./videofile/dogvideo.mp4")}
        useNativeControls
        resizeMode='contain'
        isLooping
        onPlaybackStatusUpdate={setStatusVideo}
      />
      <View style={styles.buttons}>
        <Button title='play from 5s' onPress={() => video.current.playFromPositionAsync(5000)}/>
        <Button title={statusVideo.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!statusVideo.isLooping)}/>
      </View>
      <StatusBar style='auto'/>
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
  video: {
    flex:1,
    alignSelf: 'stretch'
  },
  buttons: {
    margin: 16
  }
});
