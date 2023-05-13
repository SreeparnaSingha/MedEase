import React, { useEffect, useState } from "react";

const PendingDoctor = () => {
  const [doctor, setDoctor] = useState({});
  useEffect(() => {
    const fetchPendingDoctor = async () => {
      try {
        const token = localStorage.getItem("token");
        const fetchPendingDoctorResponse = await fetch(
          `http://65.0.168.160:8000/admin/fetchPendingDoctor`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await fetchPendingDoctorResponse.json();
        setDoctor(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPendingDoctor();
  }, []);

  return (
    <>
      <div className="text-3xl font-yanone pt-4 pl-4 underline">
        Pending Doctors list
      </div>
      <div className="flex flex-col justify-center items-center w-full mb-12 mt-4">
        {doctor.data?.length > 0 ? (
          <section className="container bg-white rounded-lg shadow overflow-x-auto px-12">
            <table className="table-auto w-full border border-gray-400">
              <thead>
                <tr className="bg-gray-200 font-bold border border-gray-400">
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Doctor Id
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Image
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Name
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Specialization
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
                {doctor.data.map((doctor1) => (
                  <tr className="hover:bg-gray-100 border border-gray-400 text-center">
                    <td className="px-4 py-3 border border-gray-400">
                      {doctor1.userid}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      <img
                        src={doctor1.image}
                        alt="Doctor Image"
                        className="h-16 w-24 border-2 border-black"
                      />
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {doctor1.name}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {doctor1.specialization}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {doctor1.mobileno}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {doctor1.email}
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

export default PendingDoctor;
