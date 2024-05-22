import { useState, useEffect } from 'react';
import styles from './Statistics.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const [weeklyWaterData, setWeeklyWaterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWaterData = async () => {
      try {
        const response = await fetch('https://water-intake-control-backend.onrender.com/api-docs/#/Water/getMonthlyWaterData');
        if (!response.ok) {
          throw new Error('Failed to fetch water data');
        }
        const data = await response.json();

        const transformedData = data.records.map(record => ({
          name: record.date.split('T')[0],
          waterConsumed: record.volume,
        }));

        // Sorting the data by date
        transformedData.sort((a, b) => new Date(a.name) - new Date(b.name));

        setWeeklyWaterData(transformedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWaterData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Рендеримо щось поки дані завантажуються
  }

  if (error) {
    return <div>Error: {error}</div>; // Рендеримо повідомлення про помилку, якщо є
  }

  return (
    <div className={styles.container}>
      <h2>Статистика споживання води за останні 7 днів</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={weeklyWaterData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Літри', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="waterConsumed" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;