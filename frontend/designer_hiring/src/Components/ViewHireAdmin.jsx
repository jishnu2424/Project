import React, { useEffect, useState } from 'react';
import ApiRequest from '../Lib/ApiRequest';

function ViewHireAdmin() {
    const [hiredDetails, setHiredDetails] = useState([]);
    const [userDetails, setUserDetails] = useState({});
    const [designerDetails, setDesignerDetails] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchHiredDetails = async () => {
            try {
                const response = await ApiRequest.get('/hire/get');
                const hiredData = response.data; // Safeguard against undefined

                setHiredDetails(hiredData);

                // Fetch user and designer details
                await Promise.all(hiredData.map(async (detail) => {
                    try {
                        const userResponse = await ApiRequest.get(`/user/viewid/${detail.userId}`);
                        const designerResponse = await ApiRequest.get(`/user/viewid/${detail.desgnerId}`);
                        
                        setUserDetails(prev => ({ ...prev, [detail.userId]: userResponse.data }));
                        setDesignerDetails(prev => ({ ...prev, [detail.desgnerId]: designerResponse.data }));
                    } catch (fetchError) {
                        console.error(`Error fetching details for user ${detail.userId} or designer ${detail.desgnerId}`, fetchError);
                    }
                }));
            } catch (err) {
                setError('Error fetching hired details');
                console.error(err);
            }
        };

        fetchHiredDetails();
    }, []);

    return (
        <>
            <div>ViewHire</div>
            <h1>Hired Details</h1>
            {error && <p>{error}</p>}
            {Array.isArray(hiredDetails) && hiredDetails.length > 0 ? (
                <ul>
                    {hiredDetails.map((detail) => (
                        <li key={detail._id}>
                            <h2>User: {userDetails[detail.userId]?.username || detail.userId}  Hired  Designer: {designerDetails[detail.desgnerId]?.username || detail.desgnerId}</h2>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hired details found</p>
            )}
        </>
    );
}

export default ViewHireAdmin;
