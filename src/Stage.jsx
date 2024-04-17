import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

export default function Stage ({x,y}){
    console.log(x,y);
    
    const stage=[];
    const tmp= []
    for (let i=0; i < x; i++){
        tmp.push({
            "key":i
    });
    }
    console.log(tmp);


    for (let i=0; i<y; i++){
        stage.push(tmp)
    }
}