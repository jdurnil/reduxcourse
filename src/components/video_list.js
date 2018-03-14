import React from 'react';
import VideoListItem from './video_list_item'


const VideoList = (props) => {
  //Video list is getting props from App including videos and onVideoSelect
  //we are setting our own props on VideoListItem of onVideoSelect,key, and video to be passed down to VideoListItem
  //we are mapping an array I think, I don't know what to call it at this point, but on each video item of videos we are providing
  //onVideoSelect which is calling the function onVideoSelect or maybe just setting that function equal to the function form onVideoSelect
  //in index.js, this confuses me here
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect = {props.onVideoSelect}
            key={video.etag}
            video={video}/>
    });


    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;