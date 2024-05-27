import React from 'react'

export default function template2 (){

    const tempData = []
    tempData
        .push({
            data: {
                amiiboSeries:"Default2",
                character:"template2",
                gameSeries:"Default2",
                image:"./assets/react.svg ",
                name:"template2",
                tier:"F",
                type:"figure2",
            },

            stone: {
                hasPlayed: false,
                hasSpecial: false,
                asSpecial: false,
                startTeam: null,
                teamColor: 'red',
                sidesPoints: {
                    north: 4,
                    east: 3,
                    south: 2,
                    west: 1
                }
            },
            switchindex: {
                value: null
            }
        })

    return tempData
}
