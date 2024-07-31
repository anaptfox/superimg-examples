import React from "npm:react";
// import { useImageData } from "../../superimg.ts";

export async function loader() {
  const guestsJson = await Deno.readTextFile("./guests.json");
  const guests = JSON.parse(guestsJson);
  return { guests };
}

export default function Splash() {
  // const { guests } = useImageData();
  // const guest = guests[0]; // For simplicity, we'll use the first guest

  const guest = {
    episode: 1,
    name: "John Doe",
    title: "Software Engineer",
  };

  return (
    <div
      style={{
        display: "flex",
        width: 1280,
        height: 720,
        backgroundColor: "#1a1a1a",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Tech Talk Show</h1>
      <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>
        Episode {guest.episode}
      </h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "#3a3a3a",
            borderRadius: "100px",
            marginRight: "40px",
          }}
        >
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 style={{ fontSize: "32px", marginBottom: "10px" }}>
            {guest.name}
          </h3>
          <p style={{ fontSize: "24px" }}>{guest.title}</p>
        </div>
      </div>
    </div>
  );
}

// export fonts
// //{
//   name: 'Roboto',
//   data: robotoArrayBuffer,
//   weight: 400,
//   style: 'normal',
// }

export const fonts = [
  {
    name: "Roboto",
    data: "./fonts/Roboto-Regular.ttf",
    weight: 400,
    style: "normal",
  },
];

// export const config = {
//   output: {
//     formats: ["png"],
//     sizes: [
//       { width: 1280, height: 720, suffix: "hd" }
//     ],
//   },
// };
