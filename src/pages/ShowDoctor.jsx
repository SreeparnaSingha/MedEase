import React, { useEffect, useState } from "react";

const ShowDoctor = () => {
  const [doctor, setDoctor] = useState({});
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const fetchDoctorResponse = await fetch(
          `http://65.0.168.160:8000/common/fetchDoctor`
        );
        const data = await fetchDoctorResponse.json();
        setDoctor(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDoctor();
  }, []);
  return (
    <>
      <div className="text-3xl font-yanone pt-4 pl-4 underline">
        Doctors list
      </div>
      <div className="flex flex-col justify-center items-center w-full mb-12 mt-4">
        {doctor.result?.length > 0 ? (
          <section className="container bg-white rounded-lg shadow overflow-x-auto px-12">
            <table className="table-auto w-full border border-gray-400">
              <thead>
                <tr className="bg-gray-200 font-bold border border-gray-400">
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
                {doctor.result.map((doctor1) => (
                  <tr className="hover:bg-gray-100 border border-gray-400 text-center">
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
                      {doctor1.mobileNo}
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

export default ShowDoctor;
