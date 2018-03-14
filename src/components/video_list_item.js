import React from 'react';


//video list item is receiving the video and onVideoSelect from VideoList(why are we not referring to props?
//the onClick event with a callback function to onVideoSelect which passes the video object passed down from VideoList
//I think
const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (

        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>

        </li>
    );
};

export default VideoListItem