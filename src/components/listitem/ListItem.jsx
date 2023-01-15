import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './listitem.scss'
import video from "./video.mp4";

export default function ListItem({index}) {
  const [isHovered,setIsHovered] = useState(false);
  return (
    <div 
      className='listItem' 
      style={{left: isHovered && (index * (225 + 2.5) - 50) }}
      onMouseEnter={()=>{setIsHovered(true)}} 
      onMouseLeave={()=>{setIsHovered(false)}}
    >
        <img src="https://occ-0-2368-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTz83euH6Cnl-jAtrsdg0QjysT5hvUj0kW9M08J8IzT42QC8zolj0Y5VBy91dbS6L242LBbnVc-OAuzx8AKFdIVYKzn_2_bPvxk.webp?r=83c" alt="" />
        {isHovered && (
          <>
            <video src={video} loop autoPlay/>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className='icon'/>
                <Add className='icon'/>
                <ThumbUpAltOutlined className='icon'/>
                <ThumbDownOutlined className='icon'/>
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className='limit'>16+</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit suscipit veritatis voluptas dolorum ducimus, blanditiis fuga, hic officiis voluptates id nesciunt est ea enim libero molestias sit repellendus et ut.
              </div>
              <div className="genre">Action</div>
            </div>
          </>)}
    </div>
  )
}
