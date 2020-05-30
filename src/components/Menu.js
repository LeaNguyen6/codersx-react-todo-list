import React from 'react'
import './Menu.css'
export default function Menu() {
    return (
        <div className='Menu'>
            <ul>
                <li className='menu-active'>
                    <i class="fas fa-home fa-fw"></i>
                    <p>Home</p>
                </li>
                <li>
                <i class="fas fa-gift fa-fw"></i>
                    <p>Deal</p>
                </li>
                <li>
                <i class="fas fa-cloud-upload-alt fa-fw"></i>
                    <p>Upload</p>
                </li>
                <li>
                <i class="fas fa-mug-hot fa-fw"></i>
                    <p>Work</p>
                </li>
                <li>
                     <i class="fas fa-cog fa-fw"></i>
                    <p>Setting</p>
                </li>
            </ul>
        </div>
    )
}
