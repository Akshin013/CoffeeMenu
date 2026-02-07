// "use client";

// import { useState } from "react";
// import { uploadImage } from "../lib/uploadImage";
// import { FiUpload, FiCoffee } from "react-icons/fi";

// export default function AdminPage() {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   async function sendToGoogleForm(data) {
//     const formData = new FormData();

//     // 🔥 ЗАМЕНИ entry ID НА СВОИ
//     formData.append("entry.1111111111", data.title);
//     formData.append("entry.2222222222", data.price);
//     formData.append("entry.3333333333", data.category);
//     formData.append("entry.4444444444", data.image);

//     await fetch(
//       "https://docs.google.com/forms/d/e/1FAIpQLSebtr8AesfOfoVJ1KzSGIvwJRzyx2Qp4lFkxPcoQ9JZ7zr-ig/formResponse",
//       {
//         method: "POST",
//         mode: "no-cors",
//         body: formData,
//       }
//     );
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (!image) {
//       alert("Загрузите фото");
//       return;
//     }

//     setLoading(true);

//     try {
//       const imageUrl = await uploadImage(image);

//       await sendToGoogleForm({
//         title,
//         price,
//         category,
//         image: imageUrl,
//       });

//       alert("Товар добавлен 🚀");

//       setTitle("");
//       setPrice("");
//       setCategory("");
//       setImage(null);
//     } catch (error) {
//       alert("Ошибка");
//     }

//     setLoading(false);
//   }

//   return (
//     <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-[#1f1f1f] rounded-2xl p-6 shadow-2xl space-y-4"
//       >
//         <h1 className="text-2xl font-bold flex items-center gap-2 text-amber-400">
//           <FiCoffee /> Admin Panel
//         </h1>

//         <input
//           type="text"
//           placeholder="Название кофе"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-3 rounded-xl bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-amber-500"
//           required
//         />

//         <input
//           type="number"
//           placeholder="Цена"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full p-3 rounded-xl bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-amber-500"
//           required
//         />

//         <input
//           type="text"
//           placeholder="Категория"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="w-full p-3 rounded-xl bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-amber-500"
//           required
//         />

//         <label className="flex items-center gap-2 cursor-pointer bg-[#2a2a2a] p-3 rounded-xl hover:bg-[#333] transition">
//           <FiUpload />
//           <span>{image ? image.name : "Загрузить фото"}</span>
//           <input
//             type="file"
//             className="hidden"
//             onChange={(e) => setImage(e.target.files[0])}
//             accept="image/*"
//           />
//         </label>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-amber-600 hover:bg-amber-700 transition p-3 rounded-xl font-semibold"
//         >
//           {loading ? "Добавление..." : "Добавить товар"}
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { uploadImage } from "../lib/uploadImage";
import { FiUpload, FiCoffee } from "react-icons/fi";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function sendToGoogleForm(data) {
    const formData = new FormData();

    formData.append("entry.790927292", data.title);    // Title
    formData.append("entry.539363541", data.price);    // Price
    formData.append("entry.1573017104", data.category);// Category
    formData.append("entry.1415161543", data.image);   // Image

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSebtr8AesfOfoVJ1KzSGIvwJRzyx2Qp4lFkxPcoQ9JZ7zr-ig/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!image) {
      alert("Загрузите фото");
      return;
    }

    setLoading(true);

    try {
      const imageUrl = await uploadImage(image);

      await sendToGoogleForm({
        title,
        price,
        category,
        image: imageUrl,
      });

      alert("Товар добавлен 🚀");

      setTitle("");
      setPrice("");
      setCategory("");
      setImage(null);
    } catch (error) {
      alert("Ошибка добавления");
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#1f1f1f] rounded-2xl p-6 shadow-2xl space-y-4"
      >
        <h1 className="text-2xl font-bold flex items-center gap-2 text-amber-400">
          <FiCoffee /> Admin Panel
        </h1>

        <input
          type="text"
          placeholder="Название кофе"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />

        <input
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />

        <input
          type="text"
          placeholder="Категория"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />

        <label className="flex items-center gap-2 cursor-pointer bg-[#2a2a2a] p-3 rounded-xl hover:bg-[#333] transition">
          <FiUpload />
          <span>{image ? image.name : "Загрузить фото"}</span>
          <input
            type="file"
            className="hidden"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-600 hover:bg-amber-700 transition p-3 rounded-xl font-semibold"
        >
          {loading ? "Добавление..." : "Добавить товар"}
        </button>
      </form>
    </div>
  );
}
