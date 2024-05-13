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
                teamColor: null,
                sidesPoints: {
                    North: 0,
                    East: 0,
                    South: 0,
                    West: 0
                }
            },
            switchindex: {
                value: null
            }
        })

    return tempData
}

