import React, { useEffect, useState } from "react";

const ShowChamber = () => {
  const [chamber, setChamber] = useState({});
  useEffect(() => {
    const fetchChamber = async () => {
      try {
        const fetchChamberResponse = await fetch(
          `http://65.0.168.160:8000/common/fetchChamber`
        );
        const data = await fetchChamberResponse.json();
        setChamber(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChamber();
  }, []);
  return (
    <>
      <div className="text-3xl font-yanone pt-4 pl-4 underline">
        Chamber list
      </div>
      <div className="flex flex-col justify-center items-center w-full mb-12 mt-4">
        {chamber.result?.length > 0 ? (
          <section className="container bg-white rounded-lg shadow overflow-x-auto px-12">
            <table className="table-auto w-full border border-gray-400">
              <thead>
                <tr className="bg-gray-200 font-bold border border-gray-400">
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Chamber Name
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Chamber Address
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Mobile Number
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Email
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Fee
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Date & Time
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {chamber.result.map((user) => (
                  <tr className="hover:bg-gray-100 border border-gray-400">
                    <td className="px-4 py-3 border border-gray-400">
                      {user.chamber_name}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.chamber_address}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.chamber_mobile}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.chamber_email}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.fee}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {new Date(user.datetime).toLocaleString()}
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

export default ShowChamber;
