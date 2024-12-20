
import { useState } from 'react'

const Home = () => {

    return (<>

        <div className="home-page">

            <div className="nav">
                <div className="name1">
                    <h4>Pulkit</h4>
                </div>
                <div className="home1">
                    <h2>HOME</h2>
                </div>
                <div className="pro">
                    <img className='pro' src='team-3.jpg'></img>

                </div>

            </div>
            <div className="box-list-table">
                <div className="list-box">
                    <div className="list">List</div>
                    <div className="about">About</div>
                    <div className="contact">Contact</div>
                </div>
                <div className="table-1">




                    <table className='table-2'>

                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Number</th>
                        </tr>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>






                </div>




            </div>
        </div>

    </>)
}

export default Home