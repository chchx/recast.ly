import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {},
      videos: [],
      // search: 'default'
    }
    this.renderCurrentVideo = this.renderCurrentVideo.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
  }

  componentDidMount() {
    searchYouTube('React tutorial', (data) => this.setState({ videos: data, currentVideo: data[0] }));
  }

  renderCurrentVideo(video) {
    this.setState({
      currentVideo: video
    })
  }

  renderSearch(searchTerm) {
    //  this.setState({
    //   search: searchTerm
    // })
    searchYouTube(searchTerm, (data) => this.setState({ videos: data, currentVideo: data[0] }));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={this.renderSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <VideoPlayer video={this.state.currentVideo} /> */}
          </div>
          <div className="col-md-5">
            <div className="video-list">
              <VideoList videos={this.state.videos}
                handleVideoListClick={this.renderCurrentVideo} />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
