import React, { useEffect, useState } from 'react'

const useTotalPrice = (boldOnsData) => {
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      const sum = boldOnsData.reduce((totals, data) => {
        return totals + data.Price * data.Quantity;
      }, 0);
      setTotal(sum);
    }, [boldOnsData]);
  
    return total;
  };


export default useTotalPrice 