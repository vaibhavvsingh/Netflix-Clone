import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import './watch.scss'
import video from './video.mp4'

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined /> Home
        </div>
        <video src={video} className="video" autoPlay controls ></video>
    </div>
  )
}
