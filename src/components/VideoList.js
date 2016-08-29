var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map(video => <VideoListEntry video={video} handler={props.handler} />)}
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;