import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const WaterContext = createContext();

export const WaterProvider = ({ children }) => {
  const [weeklyWaterData, setWeeklyWaterData] = useState([]);

  useEffect(() => {
    const fetchWaterData = async () => {
      try {
        const response = await fetch('https://water-intake-control-backend.onrender.com/api-docs/#/Water/getMonthlyWaterData'); 
        const data = await response.json();

        // Перетворення даних для графіка
        const transformedData = data.records.map(record => ({
          name: record.date.split('T')[0], // Форматування дати
          waterConsumed: record.volume,
        }));

        setWeeklyWaterData(transformedData);
      } catch (error) {
        console.error('Error fetching water data:', error);
      }
    };

    fetchWaterData();
  }, []);

  return (
    <WaterContext.Provider value={{ weeklyWaterData }}>
      {children}
    </WaterContext.Provider>
  );
};

WaterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};