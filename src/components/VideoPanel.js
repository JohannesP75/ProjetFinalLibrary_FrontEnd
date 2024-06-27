import React, { useState } from 'react'

function VideoPanel(props) {
    const [video, setVideo]=useState(props.video);
    
    return (
        <div>
            <p>Vidéo.</p>
        </div>
    )
}

export default VideoPanel