import { useState } from "react";
import { useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
        
    }, [currency])
    console.log(data);
    return data;
    
}

export default useCurrencyInfo;


// import { useState, useEffect } from "react";

// const useCurrencyInfo = (currency) => {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true); // ✅ Loading state added

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
//         const json = await res.json();
//         setData(json.rates || {}); // ✅ Ensuring rates exist
//       } catch (error) {
//         console.error("Error fetching currency data:", error);
//         setData({});
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [currency]);

//   return { data, loading }; // ✅ Return loading state
// };

// export default useCurrencyInfo;
