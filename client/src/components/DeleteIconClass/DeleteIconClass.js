import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux'
import { removeClass } from '../../actions/classes'
import './DeleteIconClass.css'

export default function DeleteIconClass({idClass}) {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')

    const handleClick = () => {
        dispatch(removeClass(idClass, token))
    }

    return (
        <div>
            <button className='noButton' onClick={handleClick}><DeleteIcon /></button>
        </div>
    )
}
