import React from 'react'

export default function template (){

    const tempData = []
    tempData
        .push({
            data: {
                amiiboSeries:"Default",
                character:"template",
                gameSeries:"Default",
                image:"./assets/react.svg ",
                name:"template",
                tier:"E",
                type:"figure",
            },

            stone: {
                hasPlayed: false,
                hasSpecial: false,
                asSpecial: false,
                startTeam: null,
                teamColor: 'blue',
                sidesPoints: {
                    North: 1,
                    East: 2,
                    South: 3,
                    West: 4
                }
            },
            switchindex: {
                value: null
            }
        })

    return tempData
}

