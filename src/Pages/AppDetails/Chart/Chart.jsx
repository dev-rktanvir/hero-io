import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({ appData }) => {
    return (
        <div className="w-full bg-gray-100 p-4 rounded-lg">

            <ResponsiveContainer width="100%" height="350">
                <BarChart
                    data={appData.ratings}
                    layout="vertical"
                    barCategoryGap="30%"
                >
                    <XAxis type="number" />

                    <YAxis
                        type="category"
                        dataKey="name"
                        reversed={true}
                        axisLine={false}  
                        tickLine={false} 
                    />

                    <Tooltip />

                    <Bar
                        dataKey="count"
                        fill="orange"
                        barSize={32}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;