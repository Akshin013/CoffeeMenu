// export async function uploadImage(file) {
//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", "coffee_upload");

//   const res = await fetch(
//     "https://api.cloudinary.com/v1_1/coffee_upload/image/upload",
//     {
//       method: "POST",
//       body: formData,
//     }
//   );

//   const data = await res.json();

//   return data.secure_url;
// }
export async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "coffee_upload"); // твой preset

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/du6bwir0x/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return data.secure_url;
}
