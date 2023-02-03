import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/headers";
import { resetDetails } from "../../reducers/userSlice";

const Dashboard = ()=>{
    const {name} = useSelector(state=> state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(resetDetails())
        navigate('/')
    }
    return(
        <section id="admin_dashboard">
            <div className="container">
                <div className="main_content">
                    <h1>Welcome, {name}</h1>
                    <h2>Problem solved</h2>
                    <button onClick={() => logout()}>logout</button>
                </div>
            </div>
        </section>
    )
}
