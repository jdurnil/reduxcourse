import React, {Component} from 'react';
import SearchBar from './components/search_bar';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY ='AIzaSyDGlYKjUjpsStM-57bz-fk3cAwDI8DfbmY';
//create new component to produce html


class App extends Component  {

    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term : 'surfboards'}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }
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
