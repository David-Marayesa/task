import { moveOutList } from "../../data";
import React, { useState } from 'react';

export const roomCounterReducer = (state = moveOutList, action) => {
    switch (action.type) {
        case 'FLIP': {
            let room = state.find((room) => room.id === action.payload)
            let index = state.findIndex((room) => room.id === action.payload);

            const newRoom = state.filter((room) => room.id !== action.payload);
         
            return state = [{...room, rooms: room.rooms + 1 }, ...newRoom];
        }

        default:
            return state;
    }
}

export default roomCounterReducer;