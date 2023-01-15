import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './featured.scss'

export default function Featured(type) {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === 'movie' ? 'Movies' : 'Series' }</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img width="100%" src="https://images.unsplash.com/photo-1673297251584-97d09e1e6b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="img" />
        <div className="info">
            <img src="https://occ-0-2368-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQfkozVwqwabSbRG1HqomcRwhEIq9J-q6yS9-fEFuXSJ8OH1lf6pzb6ZFmpJeGHeEQXz0n18NfzK4WDapIEedvFlJGzPEjqnvTXdOQ-HzNk.webp?r=4dc" alt="" />
            <span className='desc'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nobis suscipit distinctio quos deserunt porro modi aut sequi nulla quaerat? Ab corporis vero tenetur velit quia animi perferendis laboriosam tempore!
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
