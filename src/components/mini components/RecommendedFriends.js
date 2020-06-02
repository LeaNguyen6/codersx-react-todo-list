import React from 'react'
import './RecommendedFriends.css'
import FollowFriendListItem from './FollowFriendListItem'
export default function RecommendedFriends(props) {

    return (
        <div className='recommended-friends'>
            <div className="top-title">
                <p className="recomend">Gợi ý cho bạn</p>
                <p className="view-all">Xem tất cả</p>
            </div>
            {props.friends.map((x, index) => {
              return  <FollowFriendListItem user={x} key={index} />
            })}

        </div>
    )
}
