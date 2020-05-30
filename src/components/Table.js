import React from 'react'
import './Table.css'
import classNames from 'classnames'
export default function Table(props) {
    return (
        <div className='Table'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((x,index) => {
                     return  <tr key={index} className={classNames({even:x.is_even})}>
                            <td>{x.id}</td>
                            <td>{x.First}</td>
                            <td>{x.Last}</td>
                            <td>{x.Handle}</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}
