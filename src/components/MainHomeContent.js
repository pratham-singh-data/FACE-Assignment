import React, { useEffect, useState } from 'react'
import { getData } from '../utils/getData'
import { PersonCard } from './PersonCard';
import "./overflower.css"

export const MainHomeContent = () => {
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [last, setLast] = useState(10);


    useEffect(() => {
        getData().then(res => {
            setFullData(res);
        })
    }, [])

    useEffect(() => {
        if((! fullData )|| fullData.length < last) return;
        setData(fullData.slice(0, last));
        setIsLoading(false);
    }, [fullData, last])

    const scrollCheck = (event) => {
        console.log("yes");
        const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
        if (bottom) {
          console.log("bottom");
        }
    };

  return (
    <main className='content' style={{display: "flex", flexDirection: {md: "row", sm: "column"}, flexWrap: "wrap", justifyContent: "space-around" }} onScroll={() => {console.log("te")}}>
        {isLoading && (
            <p>Loading</p>
        )}
        {!isLoading && !data && (
            <p>Error Loading data</p>
        )}
        {data && data.length !== 0 && (
            data.map(entry => {
                return <PersonCard data={entry} key={entry.login.uuid}/>
            })
        )}
    </main>
  )
}
