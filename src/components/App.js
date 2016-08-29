
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentVideo: {},
      playList: []
    };
  }
  componentDidMount() {
    searchYouTube({query: "javascript"}, this.updateYouTube.bind(this));
  }
  render() {
    return (
      <div>
        <Nav handler={this.liveUpdate.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.playList} handler={this.onVideoEntryClick.bind(this)} />
        </div>
      </div>
    );
  }
  onVideoEntryClick(video) {
    console.log('hi')
    this.setState({
      currentVideo: video
    });
  }
  liveUpdate(query) {
    searchYouTube({query: query}, function(data) {
      this.setState({
        currentVideo: this.state.currentVideo,
        playList: data.items
      })
    }.bind(this));
  }
  updateYouTube(data) {
    this.setState({
      currentVideo: data.items[0],
      playList: data.items
    });
  }
}

window.App = App;