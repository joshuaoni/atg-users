import React from 'react';
import './UserList.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UserList = ({users, avatars, settingId}) => {
    const handleRequest = (id) => {
        settingId(Number(id));
    }
    
    return (
        <div className='list'>
            <List dense={false}>
                {users.length ?
                <Box className='w-100'>
                    {users.map((user, i) => {
                        return (
                            <ListItem 
                                key={user.id} 
                                onClick={()=>{
                                    handleRequest(user.id)
                                }} 
                                className='user'
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <img width='40px' height='40px' alt='' src={avatars[i]} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={user.profile.firstName + ' ' + user.profile.lastName}
                                />
                            </ListItem>
                        )
                    })}
                </Box> :
                <>
                    <Box className='avatar'>
                        <CircularProgress/>
                    </Box>
                    <Typography variant="h6" gutterBottom component="div" className='text-align-center'>
                        Loading...
                    </Typography>
                </>}
            </List>
        </div>
    );
}
 
export default UserList;