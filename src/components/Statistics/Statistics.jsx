import { useState, useEffect } from 'react';
import styles from './Statistics.module.css';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';

const Statistics = () => {
  const [weeklyWaterData, setWeeklyWaterData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [timezone, setTimezone] = useState('');
  const { currentMonth, currentYear } = useSelector(state => state.calendar);
  const realMonth = currentMonth + 1;
  console.log('used Month', realMonth);
  useEffect(() => {
    const tz = moment.tz.guess();
    setTimezone(tz);
  }, []);

  useEffect(() => {
    const fetchWaterData = async () => {
      if (!timezone) return;
      console.log('timezone', timezone);
      try {
        const response = await axios.get(
          `https://water-intake-control-backend.onrender.com/api/water/monthly/${currentYear}/${realMonth}?timezone=${timezone}`
        );

        const { records } = response.data;
        console.log('records', records);
        const transformedData = records.reduce((accumulator, record) => {
          const date = record.date.split('T')[0];
          const waterConsumed = (record.volume * 0.001).toFixed(3);

          const existingRecord = accumulator.find(item => item.date === date);

          if (existingRecord) {
            existingRecord.waterConsumed = (
              parseFloat(existingRecord.waterConsumed) +
              parseFloat(waterConsumed)
            ).toFixed(3);
          } else {
            accumulator.push({ date, waterConsumed });
          }

          return accumulator;
        }, []);

        // Сортування за значенням date від меншого до більшого
        transformedData.sort((a, b) => new Date(a.date) - new Date(b.date));

        console.log('transformedData', transformedData);
        // Sorting the data by date
        setWeeklyWaterData(transformedData);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };
    fetchWaterData();
  }, [currentYear, realMonth, timezone]);
  console.log('weeklyWaterData', weeklyWaterData);

  // if (loading) {
  //   return <div>Loading...</div>; // Рендеримо щось поки дані завантажуються
  // }

  // if (error) {
  //   return <div>Error: {error}</div>; // Рендеримо повідомлення про помилку, якщо є
  // }

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={weeklyWaterData}>
          <defs>
            <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9be1a0" stopOpacity={1} />
              <stop offset="100%" stopColor="#f0eff4" stopOpacity={0.8} />
            </linearGradient>
          </defs>  
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date"
            tickFormatter={(tick) => moment(tick).format('DD')}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            label={{ position: 'insideLeft' }}
            tick={{ fontSize: 12 }}
            ticks={[2.5, 2, 1.5, 1, 0.5, 0]}
            tickFormatter={value => `${value}L`}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip formatter={value => [`${value * 1000} ml`]} />
          <Legend />
          <Area
            type="monotone" 
            fill="url(#colorWater)"
            dataKey="waterConsumed"
            stroke="#9be1a0"
            activeDot={{ r: 8 }}
            dot={{ r: 10, stroke: '#9be1a0', strokeWidth: 3 }}
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
