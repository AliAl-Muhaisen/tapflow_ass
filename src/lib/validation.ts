import * as yup from "yup";
const minText = (number: number = 3) => {
  return "Must be more than " + number + " characters";
};
const maxText = (number: number = 15) => {
  return "Must be less than " + number + " characters";
};

const countryMess = {
  required: "Please, select a country",
};

const citiesMess = {
  required: "Please, select a cities",
  min:"Please select at least one city",
};
const NameMsg = {
  min: minText(),
  max: maxText(),
  required: "Name is required",
};
const imageMess = {
  required: "Please, select a profile image",
};

const linkPattern =
/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
export const geoUserValidation = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, NameMsg.min)
    .max(15, NameMsg.max)
    .required(NameMsg.required),
  country: yup.string().required(countryMess.required).nullable(),
  cities: yup.array().min(1,citiesMess.min).required(citiesMess.required),
  image: yup.mixed().required(imageMess.required),
  link: yup
    .string()
    .matches(linkPattern, "example www.example.com")
    .required("Please enter a link"),
});
