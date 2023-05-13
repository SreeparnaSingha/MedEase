import React, { useEffect, useState } from "react";

const ShowAmbulance = () => {
  const [ambulance, setAmbulance] = useState({});
  useEffect(() => {
    const fetchAmbulance = async () => {
      try {
        const fetchAmbulanceResponse = await fetch(
          `http://65.0.168.160:8000/common/fetchAmbulance`
        );
        const data = await fetchAmbulanceResponse.json();
        setAmbulance(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAmbulance();
  }, []);
  return (
    <>
      <div className="text-3xl font-yanone pt-4 pl-4 underline">
        Ambulance list
      </div>
      <div className="flex flex-col justify-center items-center w-full mb-12 mt-4">
        {ambulance.result?.length > 0 ? (
          <section className="container bg-white rounded-lg shadow overflow-x-auto px-12">
            <table className="table-auto w-full border border-gray-400">
              <thead>
                <tr className="bg-gray-200 font-bold border border-gray-400">
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Ambulance ID
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Vehicle Number
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Driver Mobile
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Driver Name
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Location
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Sector
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Hospital ID
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {ambulance.result.map((user) => (
                  <tr className="hover:bg-gray-100 border border-gray-400">
                    <td className="px-4 py-3 border border-gray-400">
                      {user.ambulance_id}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.vehicle_number}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.driver_mobile}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.driver_name}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.location}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.sector}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.hospital_id}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ) : (
          <div className="flex items-center justify-center">
            <div className="text-5xl font-yanone">
              Sorry, no data is available at this moment :(
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowAmbulance;
