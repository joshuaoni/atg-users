import React from 'react';
import './Details.css';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Details = ({users, avatars, userId, loading, error}) => {
    
    return (
        <div className='details'>
            {loading && !error ?
            <Box>
                <Box className='avatar'>
                    <CircularProgress/>
                </Box>
                <Typography variant="h6" gutterBottom component="div" className='text-align-center'>
                    Loading...
                </Typography>
            </Box> : 
            <>
                {error ?
                <Box className='error'>
                    <Typography variant="h6" gutterBottom component="div" className='text-align-center'>
                        {error}
                    </Typography> 
                </Box> :
            <>
                {userId ? 
                <Box className='w-100'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} className='avatar'>
                            <Avatar sx={{ width: 150, height: 150 }}>
                                <img width='150px' height='150px' alt='' src={avatars[userId-1]} />
                            </Avatar>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom component="div" className='text-align-center'>
                                {'@' + users[userId-1].profile.username}
                            </Typography>
                            <Typography variant="body2" gutterBottom component="div" className='text-align-center'>
                                {users[userId-1].jobTitle}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className='padding-left'>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom component="div">
                                Full Name
                            </Typography>
                            <Typography variant="body2" gutterBottom component="div">
                                {users[userId-1].profile.firstName + ' ' + users[userId-1].profile.lastName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom component="div">
                                Email
                            </Typography>
                            <Typography variant="body2" gutterBottom component="div">
                                {users[userId-1].profile.email}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom component="div">
                                Bio
                            </Typography>
                            <Typography variant="body2" gutterBottom component="div">
                                {users[userId-1].Bio}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom component="div">
                                Account Created
                            </Typography>
                            <Typography variant="body2" gutterBottom component="div">
                                {users[userId-1].createdAt.slice(11,16) + ', ' + users[userId-1].createdAt.slice(0,10)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box> :
                <Typography variant="h6" gutterBottom component="div">
                    No user selected
                </Typography>}
            </>
                }
            </>
            }
        </div>
    );
}
 
export default Details;