import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, CircularProgress, Card } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from "recharts";

// Adding config to the PIE CHART
const COLORS = ["#0B4619", "#1A374D", "#1A1A40"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


const DashboardHome = () => {
    const [courses, setCourses] = useState([])
    const [users, setUsers] = useState([])
    const [feedbacks, setFeedbacks] = useState([])

    // Fetching for state
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/feedbacks')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])

    const user = users.length
    const course = courses.length
    const feedback = feedbacks.length

    const data = [
        { name: "USERS", value: user },
        { name: "COURSES", value: course },
        { name: "REVIEWS", value: feedback }
    ];

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ background: '#0B4619' }}>
                        <Box sx={{ py: 3 }}>
                            {courses.length === 0 ? <CircularProgress /> : <Typography variant='h2' sx={{ color: '#fff' }}> {courses.length} </Typography>}
                            <Typography variant='h5' sx={{ mt: 2, color: '#fff', py: 1, fontWeight: 400 }}>COURSES WE OFFER </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ background: '#1A374D' }}>
                        <Box sx={{ py: 3 }}>
                            {courses.length === 0 ? <CircularProgress /> : <Typography variant='h2' sx={{ color: '#fff' }}> {users.length}</Typography>}
                            <Typography variant='h5' sx={{ mt: 2, color: '#fff', py: 1, fontWeight: 400 }}>USER HAS ACCOUNT</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ background: '#1A1A40' }}>
                        <Box sx={{ py: 3 }}>
                            {courses.length === 0 ? <CircularProgress /> : <Typography variant='h2' sx={{ color: '#fff' }}>{feedbacks.length}</Typography>}
                            <Typography variant='h5' sx={{ mt: 2, color: '#fff', py: 1, fontWeight: 400 }}>TOTAL REVIEW</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <div>
                <Typography variant='h5' sx={{ textAlign: 'left', mt: 2 }}>PIE CHART REPRESENTATION</Typography>

                <Card sx={{ py: 3 }} >
                    <PieChart width={300} height={300}>
                        <Pie
                            data={data}
                            cx={150}
                            cy={140}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={130}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </Card>
            </div>
        </>
    );
};

export default DashboardHome;