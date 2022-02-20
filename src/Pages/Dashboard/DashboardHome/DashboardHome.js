import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
    { name: "USERS", value: 400 },
    { name: "COURSES", value: 300 },
    { name: "REVIEWS", value: 300 }
];

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
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ background: '#0B4619' }}>
                        <Box sx={{ py: 3 }}>
                            <Typography variant='h2' sx={{ color: '#fff' }}> 3 </Typography>
                            <Typography variant='h5' sx={{ mt: 2, color: '#fff', py: 1, fontWeight: 400 }}>COURSES WE OFFER </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ background: '#1A374D' }}>
                        <Box sx={{ py: 3 }}>
                            <Typography variant='h2' sx={{ color: '#fff' }}> 3 </Typography>
                            <Typography variant='h5' sx={{ mt: 2, color: '#fff', py: 1, fontWeight: 400 }}>USER HAS ACCOUNT</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ background: '#1A1A40' }}>
                        <Box sx={{ py: 3 }}>
                            <Typography variant='h2' sx={{ color: '#fff' }}> 3 </Typography>
                            <Typography variant='h5' sx={{ mt: 2, color: '#fff', py: 1, fontWeight: 400 }}>TOTAL REVIEW</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Typography variant='h5' sx={{ textAlign: 'left', mt: 2 }}>HERE IS VISUAL PIE CHART REPRESENTATION</Typography>
            <PieChart width={370} height={370}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={true}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    // fill="#000"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </>
    );
};

export default DashboardHome;