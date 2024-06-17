import React from 'react'
import AudioListItem from './AudioListItem'

function AudioList({listAudio}) {
    return (
        <>
            {
                listAudio.map(audio=>(
                    <AudioListItem audio={audio} />
                ))
            }
        </>
    )
}

export default AudioList