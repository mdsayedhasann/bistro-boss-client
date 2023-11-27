import React from "react";
import SectionHeading from "../../../components/SectionHeading";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from 'sweetalert2'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItem = () => {

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    if(res.data.success){
        // Now send the menu item data to the server  with the image
        const menuItem  = {
            name: data.name, 
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe, 
            image: res.data.data.display_url
        }
        const menuRes = await axiosSecure.post('/menu', menuItem)
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
            // console.log('hi');
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            reset()
        }
    }
    console.log(res.data);
  };
  return (
    <div className="p-16">
      <div className="">
        <h2 className="text-2xl">Add New Item</h2>
      </div>
      <SectionHeading
        heading={"Add Items"}
        subheading={"Add new food Items"}
      ></SectionHeading>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              {...register("name", { required: true})}
              type="text"
              placeholder="Receipe Name"
              className="input input-bordered w-full "
            />
          </div>
          {/*  */}
          <div className="w-full flex gap-6 my-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">How much this Price?</span>
              </label>
              <input
                {...register("price", { required: true})}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category", { required: true})}
                className="select select-bordered w-full"
              >
                <option value="Select a Category" disabled selected>
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desert">Desert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
          </div>
          {/*  */}

          <div className="form-control ">
            <label className="label">
                <span className="label-text">Reciepe Details</span>
            </label>
            <textarea
            {...register('recipe', { required: true})}
              className="textarea textarea-bordered h-24"
              placeholder="Reciepe"
            ></textarea>
          </div>

          <div className="form-control my-5">
          <input {...register('image', { required: true})} type="file" className="file-input file-input-bordered  w-full max-w-xs" />
          </div>

          <input className="btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
