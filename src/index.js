import React, {Component} from 'react';
import SearchBar from './components/search_bar';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY ='AIzaSyDGlYKjUjpsStM-57bz-fk3cAwDI8DfbmY';
//create new component to produce html


class App extends Component  {
    //calls constructor with props, Component parent constructor gets called also with props
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        //sets state with 'videos' returned from api call, and sets intial 'selectedVideo' to first video in list all done in the constructor
        //so everything is initialized
        YTSearch({key: API_KEY, term : 'surfboards'}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    //needed render funcion for  app
    //VideoDetail gets this.state.selectedVideo set initially to first result
    //VideoList gets videos, all the data from the returned api call
    //also onVideoSelect, I think this is creating the function onVideoSelct and passing it selectedVideo(I don't know where this is coming
    //from exactly, are we allowed to do this because 'selectedVideo' is a property of state) I do see that within the funtion that this creates is sets state to with selectedVideo
    //I am a bit confused by the ES6 here, if you could please break down this statement and what it is doing
    render() {
        return(
        <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}
            />
        </div>
        );
    }
}

//take this components htnl anf put it in dom


ReactDOM.render(<App />, document.querySelector('.container'));
