import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import { newClass } from '../../actions/classes'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import './AddClass.css'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

export default function AddClass() {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const user = useSelector(state => state.user)
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const classes = useStyles();
    const [classData, setclassData] = useState({
        description: '',
        url: '',
        start: '',
        end: '',
        userId: user.id
    })

    
    const resetForm = () => {
        setclassData({
            description: '',
            url: '',
            start: '',
            end: ''
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (classData.description && classData.url && classData.start && classData.end) {
            dispatch(newClass(classData, token))
            setOpenSuccess(true); //to open the success message
            resetForm()
        }
        else {
            setOpenError(true)
        }
    }
    
    const handleChange = (event) => {
        setclassData({...classData, [event.target.name]: event.target.value})
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        setOpenSuccess(false)
        setOpenError(false)
    };
    
    return (
        <div>
            <NavBar />
            <div className='OuterContainerNavBar'>
                <div className='InnerContainerNavBar shadow'>
                <h1>Add new class</h1>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className='dataRow mt-20'>
                            <p>Description:</p>
                            <input
                            name='description'
                            className='Input'
                            type='text'
                            placeholder='Description'
                            value={classData.description}
                            onChange={handleChange}
                            />
                        </div>
                        <div className='dataRow'>
                            <p>Url:</p>
                            <input
                            name='url'
                            className='Input'
                            type='text'
                            placeholder='URL'
                            value={classData.url}
                            onChange={handleChange}
                            />
                        </div>
                        <div className='dataRow'>
                            <p>Starting day and time:</p>
                            <input
                            name='start'
                            className='Input'
                            type='datetime-local'
                            placeholder='Start time'
                            value={classData.start}
                            onChange={handleChange}
                            />
                        </div>
                        <div className='dataRow'>
                            <p>End time:</p>
                            <input
                            name='end'
                            className='Input' 
                            type='datetime-local' 
                            placeholder='End time'
                            value={classData.end}
                            onChange={handleChange}
                            />
                        </div>
                        <button className='buttonRegister mt-20' type="submit">Add</button>
                    </form>

                        <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success">
                                Class added!
                            </Alert>
                        </Snackbar>
                        <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="error">
                                All inputs are required
                            </Alert>
                        </Snackbar>

                </div>
            </div>
        </div>
    )
}
