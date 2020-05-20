const songsReducer=()=>{
    return [
        {title: 'No Scrubs', duration:'4:06'},
        {title: 'Macarena', duration:'3:06'},
        {title: 'All Star', duration:'4:20'},
        {title: 'I Want it That Way', duration:'1:06'}
    ]
}

const selectedSongReducer=(selectedSong=null,action)=>{
    if (action.type==='SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}