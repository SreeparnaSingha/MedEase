import React, { useEffect, useState } from "react";

const ShowUser = () => {
  const [users, setUsers] = useState({});
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchUserResponse = await fetch(
          `http://65.0.168.160:8000/common/fetchUser`
        );
        const data = await fetchUserResponse.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <div className="text-3xl font-yanone pt-4 pl-4 underline">
        Users' list
      </div>
      <div className="flex flex-col justify-center items-center w-full mb-12 mt-4">
        {users.result?.length > 0 ? (
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
                    Date of birth
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Mobile no
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Email
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-400">
                    Guardian Name
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {users.result.map((user) => (
                  <tr className="hover:bg-gray-100 border border-gray-400">
                    <td className="px-4 py-3 border border-gray-400">
                      <img
                        src={user.image}
                        alt="User Image"
                        className="h-16 w-24 border-2 border-black"
                      />
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.name}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.dob}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.mobileno}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.emailid}
                    </td>
                    <td className="px-4 py-3 border border-gray-400">
                      {user.guardianname}
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

export default ShowUser;
