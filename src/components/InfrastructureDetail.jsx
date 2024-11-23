import React from "react";
import { useParams } from "react-router-dom";
import "./InfrastructureDetail.css"; // For styling

// Data for each detail page
export const details = {
  Reception: {
    title: "Reception",
    image:
      "//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.19.06%20AM.jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true",
    description: "Details about Postgate News...",
  },
  "Mathematics Laboratory": {
    title: "Mathematics Laboratory",
    image:
      "//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.39.55%20AM%20(1).jpeg/:/rs=w:600,cg:true,m",
    description: "Details about Schools Prospectus...",
  },
  "Biology Lab": {
    title: "Biology Lab",
    image:
      "//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.35%20PM%20(5).jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1023,cg:true",
    description: "Details about Our Vision...",
  },
  "Chemistry Lab": {
    title: "Chemistry Lab",
    image:
      "//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.36%20PM.jpeg/:/rs=w:1023,cg:true,m",
    description: "Message from our CEO...",
  },
  "Physics Lab": {
    title: "Physics Lab",
    image:
      "//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.35%20PM.jpeg/:/cr=t:0%25,l:0%25,w:65.71%25,h:65.71%25/rs=w:1023,cg:true,m",
    description: "Details about Trust Prayer...",
  },
  "Computer Lab": {
    title: "Computer Lab",
    image:
      "//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.39.54%20AM.jpeg/:/",
    description: "Details about Catholic Life...",
  },
  "Play Zone": {
    title: "Play Zone",
    image:
      "//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.37%20PM%20(1).jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:814,h:407,cg:true",
    description: "Details about Catholic Life...",
  },
  Music: {
    title: "Music",
    image:
      "//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-19%20at%201.00.31%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
    description: "Details about Catholic Life...",
  },
  Playground: {
    title: "Playground",
    image:
      "//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2014.17.11_f6673a8b.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
    description: "Details about Catholic Life...",
  },
  Library: {
    title: "Library",
    image:
      "//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.29.13%20PM%20(1).jpeg/:/",
    description: "Details about Catholic Life...",
  },
  Transportation: {
    title: "Transportation",
    image:
      "//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-23%20at%2011.15.06%20AM.jpeg/:/",
    description: "Details about Catholic Life...",
  },
  "Class Room": {
    title: "Class Room",
    image:
      "//img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.37.18%20PM.jpeg/:/cr=t:0%25,l:0.92%25,w:98.16%25,h:98.16%25/rs=w:600,cg:true,m",
    description: "Details about Catholic Life...",
  },
};

const InfrastructureDetail = () => {
  const { detailId } = useParams();
  const detail = details[detailId];

  if (!detail) {
    return <h2>Detail not found!</h2>;
  }

  return (
    <div className="infrastructure-detail">
      <h1>{detail.title}</h1>
      <img src={detail.image} alt={detail.title} className="detail-image" />
      <p>{detail.description}</p>
    </div>
  );
};

export default InfrastructureDetail;
