import React from 'react'

export default function Card({item}) {
    console.log(item,"VERİ")
    var date = new Date(item?.dt*1000);

    var days = date.getDate();
// Hours part from the timestamp
var hours = date.getHours();

// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();

// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = days+':'+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return (
    <div className='flex gap-4 items-center'>
        <span> tarihi  : {formattedTime}</span>
        <span>Rüzgar</span>
        <span>{item?.wind?.speed}</span>
    </div>
  )
}
