import React from 'react';
import { Table } from 'react-bootstrap';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { flip, unFlip } from '../store/action';

const Home = () => {

    const dispatch = useDispatch();
    const moveOutList = useSelector((state) => state.room);
    const handleFlip = (id) => {
        dispatch(flip(id));
    }

    return (
        <div className='home'>
            <h1>Move-out List</h1>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Move-out Date</th>
                        <th>ID</th>
                        <th width='300'>Address</th>
                        <th>Rooms</th>
                        <th>Location</th>
                        <th>Last Occupant</th>
                        <th>UID</th>
                        <th>Balance</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {moveOutList.map((list) => (
                        <tr key={list.id}>
                            <td>{list.moveOutDate}</td>
                            <td>{list.userId}</td>
                            <td style={{ color: 'green' }}>
                                <span><img className='img' src={list.imgUrl} alt="" /></span>
                                {list.address}
                            </td>
                            <td>{list.rooms}</td>
                            <td>{list.location}</td>
                            <td style={{ color: 'green' }}>{list.lastOccupant}</td>
                            <td>{list.uid}</td>
                            <td>({list.balance})</td>
                            <td>
                                <button className='home-btn' onClick={() => handleFlip(list.id)}>Flip room</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Home
