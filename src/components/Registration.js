import React from "react";
import { useForm } from "react-hook-form";

export default () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const submit = (data) => {
    //send data to backend
    console.log(data);
  };

  return (
    <form>
      <input {...register("user", { required: true })} placeholder="username" />
      <input {...register("email", { required: true })} placeholder="email" />
      <input {...register("password", { required: true })} placeholder="password" />
    </form>
  );
};
