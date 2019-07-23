import React from 'react';

const VideoDetail = ({video}) => {
	if (!video){
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	return(
		<div>
			<div className="ui embed">
				<iframe title='video player'  src={videoSrc} frameBorder="0"></iframe>
			</div>
			<div className="ui segment">
				<h3 className="detail-title">{video.snippet.title}</h3>
				<p className="detail-description">{video.snippet.description}</p>
			</div>
		</div>
	) 

}
export default VideoDetail;