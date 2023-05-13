import React, { useEffect, useState } from "react";

const ShowHospital = () => {
  const [hospitals, setHospitals] = useState({});
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const fetchHospitalsResponse = await fetch(
          `http://65.0.168.160:8000/common/fetchHospital`
        );
        const data = await fetchHospitalsResponse.json();
        setHospitals(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHospitals();
  }, []);
  return (
    <>
      <div className="text-3xl font-yanone pt-4 pl-4 underline">
        Hospitals list
      </div>
      <div className="flex flex-col justify-center items-center w-full mb-12 mt-4">
        {hospitals.result?.length > 0 ? (
          <section className="container bg-white rounded-lg shadow overflow-x-auto px-12">
            <table className="table-auto w-full border border-gray-400">
              <thead>
                <tr className="bg-gray-200 font-bold border border-gray-400">
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Name
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Address
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Type
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Mobile no
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Email
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {hospitals.result.map((hospital) => (
                  <tr className="hover:bg-gray-100 border border-gray-400">
                    <td className="px-4 py-3 border border-gray-400">
                      <img
                        src={hospital.hospital_name}
                        alt="Hospital Image"
                        className="h-16 w-24 border-2 border-black"
                      />
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {hospital.hospital_address}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {hospital.hospital_type}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {hospital.mobileno}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {hospital.email}
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

export default ShowHospital;
