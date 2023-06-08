import * as Yup from "yup";

export const formSc = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Lütfen İsminizi Giriniz.")
    .min(3, "Lütfen adınızı tam giriniz"),

  lastname: Yup.string()
    .trim()
    .required("Lütfen Soyadınızı Giriniz.")
    .min(3, "Lütfen Soyadınızı tam giriniz"),

  email: Yup.string()
    .email("Lütfen Geçerli Bir Email Adresi Giriniz.")
    .required("Lütfen Bir Email Adresi giriniz"),
  password: Yup.string()
    .required("Lütfen Geçerli bir Parola Giriniz.")
    .min(6, "En az 6 karakter olmalı."),

  terms: Yup.boolean().oneOf([true], "Onaylanmalıdır."),
});
