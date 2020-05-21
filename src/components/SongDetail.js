import React from 'react'
import { connect } from 'react-redux';

const SongDetail=(props)=>{
    return(
        <div>SongDetail</div>
    )
}

const mstp=state=>{
    return{
        selectdedSong:state.selectdedSong
    }
}

export default connect(mstp)(SongDetail)