import api from "../Axios/Api";
import {useEffect, useState} from "react";

const KeyMetricsHandler = () => {
    const [metrics, setMetrics] = useState({
        MedicineTotalCount: 0,
        PatientTotalCount: 0,
        DoctorTotalCount: 0
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found. Please log in.");
            return;
        }
        const fetchMetrics = async () => {
            try {
                const response = await api.get('/admin/keyMetrics', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setMetrics(response.data);
            } catch (error) {
                console.error('Error fetching metrics:', error);
            }
        };

        fetchMetrics();
    }, []);

    return(metrics)
};

export default KeyMetricsHandler;