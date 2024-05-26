import { useState } from "react";

const BackCover = () => {
  let img = "https://avatars.githubusercontent.com/u/112820027?v=4";
  let str = `For event organizers, it is crucial to collect their attendee’s information and preferences before the event to plan accordingly. It is a critical aspect, and leveraging suitable event registration form ideas is the easiest and most effective way to gather their information.`;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [fontColor, setFontColor] = useState("#000000");
  const [descri, setdes] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const backCoverData = {
      title,
      author,
      selectedImage,
      fontColor,
      descri,
    };
    localStorage.setItem("backCoverData", JSON.stringify(backCoverData));
    alert("Back cover data saved!");
  };

  return (
    <div className="mt-[20px] flex">
      <div className="w-[470px] m-auto bg-yellow-100 rounded-[10px] p-[20px]">
        <h1 className="text-center text-[32px] font-bold">BackCover Of Book</h1>
        <div className="flex justify-between flex-col p-[20px] gap-[10px]">
          <input
            type="text"
            placeholder="Write Your Book Title"
            value={title}
            className="p-[8px] border-[2px] border-violet-100 rounded-[6px]"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex flex-col gap-[10px]">
            <p className="p-[5px] font-semibold uppercase">
              Change the backcover image
            </p>
            <div>
              <input
                id="file"
                type="file"
                onChange={handleImageUpload}
                className="p-[8px] border-[2px] border-violet-100 rounded-[6px]"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Writer name"
            className="p-[8px] border-[2px] border-violet-100 rounded-[6px]"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <span className="flex gap-[20px] p-[10px] font-semibold">
            Choose Color For Cover Page
            <input
              className="w-[30px] rounded-[500px] overflow-hidden"
              type="color"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
              placeholder="select font colour"
            />
          </span>
          <input
            type="text"
            placeholder="Write Book description"
            value={descri}
            className="p-[6px] border-[3px] border-green-300 rounded-md"
            onChange={(e) => setdes(e.target.value)}
          />
          <button
            onClick={handleSave}
            className="p-[10px] bg-blue-500 text-white rounded-[6px] hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "2px 2px 4px rgba(0,0,0,0.7)",
        }}
        className="flex flex-col h-[90vh] w-[70vh] p-[20px] m-auto border-[10px] border-[#c2e7ff] rounded-[10px] bg-green-800"
      >
        <div className="pb-[10px] h-[100px]">
          <h1
            style={{ color: fontColor }}
            className="text-[28px] uppercase font-mono my-[5px]"
          >
            {title || "Book title"}
          </h1>
          <h3
            style={{ color: fontColor }}
            className="font-mono uppercase text-[16px]"
          >
            Written By: {author || "JHONE"}
          </h3>
        </div>
        <hr />
        <div className="flex gap-[20px] my-[12px]">
          <div className="w-[35%]">
            <img
              src={selectedImage || img}
              alt=""
              className="w-[100px] h-[80px]"
            />
            <p className="text-[12px] mt-[5px]">NAME : {author || "author?"}</p>
          </div>
          <p className="text-[14px] max-w-[65%] overflow-hidden whitespace-normal mt-[10px]">
            I will try to Upload new version of this book my brother and sister
          </p>
        </div>
        <hr />
        <div className="my-[10px] font-serif">
          <h3 className="mb-[10px]">PUBLISHED BY BRIBOOKS</h3>
          <p className="text-sm whitespace-pre-wrap">{descri || str}</p>
          <p className="my-[10px]">©️ BriBooks</p>
        </div>
        <hr />
        <div className="flex justify-between my-[10px] font-serif">
          <div>
            <img
              src="https://www.bribooks.com/assets/images/BriBooks.svg"
              className="w-[100px] my-[10px]"
              alt=""
            />
            <a href="https://www.bribooks.com/">www.bribooks.com</a>
            <p className="text-[12px] mt-[5px]">
              Previous Copy For Limited Distribution
            </p>
          </div>
          <div>
            <img
              src="https://www.qrstuff.com/images/default_qrcode.png"
              className="w-[80px] h-[80px]"
              alt="QR"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackCover;
