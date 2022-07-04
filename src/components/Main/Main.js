import React, { useEffect, useState } from 'react';
import UserList from '../User List/UserList';
import Details from '../User Details/Details';
import './Main.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';
import img9 from '../../assets/img9.png';
import img10 from '../../assets/img10.png';

const avatars = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
]

const Main = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);

    const settingId =  (num) => {
        setUserId(num);
    }
    
    useEffect(()=>{
        const handleFetch = async () => {
            const response = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users');
            const res = await response.json();
            setUsers(res || []);
            setLoading(false);
        }
        handleFetch();
    }, [loading]);

    return (
        <section>
            <Grid container spacing={4}>
                <Grid item md={5} xs={12} className='cont'>
                    <Typography variant="h5" gutterBottom component="div" className='text-align-center heading-list'>
                        User List
                    </Typography>
                </Grid>
                <Grid item md={7} xs={12} className='cont'>
                    <Typography variant="h5" gutterBottom component="div" className='text-align-center heading-details'>
                        User Details
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={4} className='mt4'>
                <Grid item md={5} xs={12}>
                    <UserList settingId={settingId} users={users} avatars={avatars}/>
                </Grid>
                <Grid item md={7} xs={12} className='container'>
                    <Details loading={loading} userId={userId} users={users} avatars={avatars}/>
                </Grid>
            </Grid>
        </section>
    );
}
 
export default Main;