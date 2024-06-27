import React, { useState } from 'react'
import VideoListItem from './VideoListItem'
import { Video } from '../models/Document';

function VideoList(props) {
    const [listVideo, setListVideo]=useState(props.listVideo!==null?
        props.listVideo:
        Video.getAll()
    );

    return (
        <>
            {
                listVideo.map(video=>(
                    <VideoListItem video={video} />
                ))
            }
        </>
    )
}

export default VideoList