import React from 'react'
import AudioList from './AudioList';
import BookList from './BookList';
import VideoList from './VideoList';
import { WorkType } from '../config/Constants';

function WorkList({listWorks}) {
    let listAudio=[], listVideo=[], listBooks=[];
    listWorks.map((work)=>{
        if(work.work_type==WorkType.WORK_BOOK)
            listBooks.push(work);
        else if(work.work_type==WorkType.WORK_AUDIO)
            listAudio.push(work)
        else if(work.work_type==WorkType.WORK_VIDEO)
            listVideo.push(work)
    });

    return (
        <>
            {
                listAudio.length>0?<AudioList listAudio={listAudio} />:null
            }
            {
                listBooks.length>0?<BookList listBooks={listBooks} />:null
            }
            {
                listVideo.length>0?<VideoList listVideo={listVideo} />:null
            }
        </>
    )
}

export default WorkList