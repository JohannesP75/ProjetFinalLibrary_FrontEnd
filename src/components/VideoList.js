import React from 'react'
import VideoListItem from './VideoListItem'

function VideoList({listVideo}) {
    return (
        <>
            {
                listVideo.map(video=>(
                    <VideoListItem audio={video} />
                ))
            }
        </>
    )
}

export default VideoList