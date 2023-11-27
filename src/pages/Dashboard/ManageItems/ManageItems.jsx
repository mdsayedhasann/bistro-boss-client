import SectionHeading from "../../../components/SectionHeading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import { FaPen, FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    console.log(item, "Deleted");
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const res = axiosSecure.delete(`/menu/${item._id}`)
        if(res.data.deledCount > 0){
            refetch()
            Swal.fire({
                title: `Deleted!`,
                text: "Your file has been deleted.",
                icon: "success",
                timer: "1000",
              });
        }
        // .then((res) => {
        //   if (res.item.deledCount > 0) {
        //     Swal.fire({
        //       title: `Deleted!`,
        //       text: "Your file has been deleted.",
        //       icon: "success",
        //       timer: "1000",
        //     });
        //   }
        // });
      }
    });
  };
  return (
    <div className="p-16">
      <SectionHeading
        heading={"Manage Items"}
        subheading={"Manage All Items Here"}
      ></SectionHeading>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="table-fixed">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                    <br />
                  </td>
                  <td> {item.price} </td>
                  <th>
                    <button className="btn bg-blue-500 p-3 text-white">
                      {" "}
                      <FaPen></FaPen>{" "}
                    </button>
                  </th>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn p-3 bg-red-500 text-white"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
