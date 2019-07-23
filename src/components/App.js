import React,{useState,useEffect} from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


const App = () => {

	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(()=>{
		onTermSubmit('buildings')
	},[])

	const onTermSubmit = async term => {
		const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA-Qwedfkt5FNBmIjY9XQ1jBU6223L7kYk&maxResults=6&q=${term}`);

		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0])
	}

	const onVideoSelect = video => {
		setSelectedVideo(video)
	}

	const style={
		margin:'2rem 3rem'
	}

	return(
		<div className="ui">
			{<SearchBar onFormSumbit={onTermSubmit}/>}
			<div style={style}>
				<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo}/>
					</div>
					<div className="five wide column">
						<VideoList videos={videos} onVideoSelect={onVideoSelect}/>
					</div>
				</div>
			</div>
			</div> 
		</div>
	);
}

export default App;