import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from 'sweetalert2'
const AllUsers = () => {
  const number = 1;
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = user => {
      console.log('Users Deleted');
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

          axiosSecure.delete(`/users/${user._id}`)
          .then(res => {
              console.log(res);
              if(res.data.deletedCount > 0){
                  refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
              }
          })
          
        }
      });
  }
  const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
  }
  return (
    <div className="p-16">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">All Users</h2>
        <h2 className="text-2xl font-bold">Total Users: {users.length}</h2>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th> 
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>

                  {" "}
                    <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-600 btn-sm p-2 ">
                      {" "}
                      <FaUsers className="text-white"></FaUsers>{" "}
                    </button>{" "}
                  </td>
                  <td>
                    {" "}
                    <button onClick={handleDelete} className="btn bg-red-600 btn-sm p-2 ">
                      {" "}
                      <FaTrash className="text-white hover:text-red-600"></FaTrash>{" "}
                    </button>{" "}
                  </td>
                </tr>
              ))}

              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
