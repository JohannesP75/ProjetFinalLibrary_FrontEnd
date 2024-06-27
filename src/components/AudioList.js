import React, { useState } from 'react'
import AudioListItem from './AudioListItem'
import { Audio } from '../models/Document'

function AudioList(props) {
    const [listAudio, setListAudio]=useState(props.listAudio!==null?
        props.listAudio:
        Audio.getAll()
    )

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