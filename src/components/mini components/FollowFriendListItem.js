import React from 'react'
import './FollowFriendListItem.css'
export default function FollowFriendListItem(props) {
    return (
        <div className='FollowFriendListItem'>
             <div className="image">
                 <img src={props.user.image} alt="" srcset=""/>
             </div>       
             <div className="detail">
                 <p className="name">{props.user.name}</p>
                 <p className="recommend">Gợi ý cho bạn</p>
             </div>
             <p className="follow">Theo dõi</p>
        </div>
    )
}
