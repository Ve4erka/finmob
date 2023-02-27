import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../Styles/mobile.scss";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation, UseTranslation } from "react-i18next";


export function MobileForm() {
  const {t} = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = async (data) => {
    const response = await axios.post("http://localhost:3000/subscribe", data);
    if (response.data.success) {
      toast.success("Заявка отправлена", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Ошибка отправки", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    console.log(response);
    console.log(errors);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-mob">
      <input
        type="text"
        placeholder={t("fourthblock.ph1")}
        {...register("firstName", { required: true, maxLength: 80 })}
      />
      <div style={{ height: 20 }}>
        {errors?.firstName && (
          <span>
            {errors?.firstName.message || "! Поле должно быть заполененно"}
          </span>
        )}
      </div>
      <input
        type="text"
        placeholder="E-mail"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <div style={{ height: 20 }}>
        {errors?.email && (
          <span>
            {errors?.email.message || "! Поле должно быть заполененно"}
          </span>
        )}
      </div>
      <input
        type="tel"
        placeholder={t("fourthblock.ph2")}
        {...register("phone", { required: true, maxLength: 12 })}
      />
      <div style={{ height: 20 }}>
        {errors?.phone && (
          <span>
            {errors?.phone.message || "! Поле должно быть заполененно"}
          </span>
        )}
      </div>
      <textarea
        placeholder={t("fourthblock.ph3")}
        className="textArea-mob"
        {...register("question", {})}
      />
      <input type="submit" className="buttonSubmit-mob" value={t("button")}/>
    </form>
  );
}
