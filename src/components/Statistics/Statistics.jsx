import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
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
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Stack } from '@mui/material';

import styles from './Statistics.module.css';

const Statistics = () => {
  const [weeklyWaterData, setWeeklyWaterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const { currentMonth, currentYear } = useSelector(state => state.calendar);
  const realMonth = currentMonth + 1;
  const daysPerPage = 7;
  const navigate = useNavigate();
  const tz = useMemo(() => moment.tz.guess(), []);

  useEffect(() => {
    const fetchWaterData = async () => {
      if (!tz) return;
      setLoading(true);

      try {
        const response = await axios.get(
          `https://water-intake-control-backend.onrender.com/api/water/monthly/${currentYear}/${realMonth}?timezone=${tz}`
        );

        const { records } = response.data;

        const daysInMonth = dayjs(
          `${currentYear}-${currentMonth + 1}`
        ).daysInMonth();

        const allDays = Array.from({ length: daysInMonth }, (_, i) => {
          const dayOfMonth = i + 1;
          const date = dayjs(
            `${currentYear}-${currentMonth + 1}-${dayOfMonth}`
          ).format('YYYY-MM-DD');
          return { date, waterConsumed: 0 };
        });

        records.forEach(record => {
          const date = record.date.split('T')[0];
          const waterConsumed = (record.volume * 0.001).toFixed(3);

          const dayIndex = dayjs(date).date() - 1;

          allDays[dayIndex].waterConsumed = (
            parseFloat(allDays[dayIndex].waterConsumed) +
            parseFloat(waterConsumed)
          ).toFixed(3);
        });

        setWeeklyWaterData(allDays);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.message === 'Request failed with status code 401') {
          setTimeout(() => {
            window.location.reload();
          }, 100);
          navigate('/signin');
        }
        toast.error('Error fetching water data:', error);
      }
    };
    fetchWaterData();
  }, [currentYear, realMonth, tz, navigate, currentMonth]);

  useEffect(() => {
    //Скидуєм число на 0, коли переключається місяць
    setPage(0);
  }, [currentMonth]);

  // Контроль сторінок пагінації
  const handlePrevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNextPage = () => {
    if ((page + 1) * daysPerPage < weeklyWaterData.length) {
      setPage(page + 1);
    }
  };

  //Отримуєм дані з поточної сторінки пагінації
  const currentPageData = weeklyWaterData.slice(
    page * daysPerPage,
    (page + 1) * daysPerPage
  );

  const CustomLegend = () => null;
  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Stack justifyContent="center" alignItems="center" height="100%">
          <CircularProgress sx={{ color: 'var(--static-mint' }} />
        </Stack>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={currentPageData}>
          <defs>
            <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--static-mint)" stopOpacity={1} />
              <stop offset="100%" stopColor="var(--background-color)" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={tick => dayjs(tick).format('D')}
            interval={0}
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
          <Legend content={<CustomLegend />} />
          <Area
            type="monotone"
            fill="url(#colorWater)"
            dataKey="waterConsumed"
            stroke="#9be1a0"
            activeDot={{ r: 8 }}
            dot={{ r: 10, stroke: 'var(--static-mint)', strokeWidth: 3 }}
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={page === 0}>
          Previous week
        </button>
        <button
          onClick={handleNextPage}
          disabled={(page + 1) * daysPerPage >= weeklyWaterData.length}
        >
          Next week
        </button>
      </div>
    </div>
  );
};

export default Statistics;
