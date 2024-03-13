export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  export const userRows = [
    {
      id: 1,
      username: "Amit Patel",
      img: "https://i.postimg.cc/bJsBzpxC/b3.jpg",
      email: "amit.patel@yahoo.com",
      status: "active",
      age: 28,
    },
    {
      id: 2,
      username: "Dia Mishra",
      img: "https://i.postimg.cc/44zt7pFZ/g1.jpg",
      email: "dia.mishra@yahoo.com",
      status: "passive",
      age: 21,
    },
    {
      id: 3,
      username: "Abhishek Reddy",
      img: "https://i.postimg.cc/d3xKthCf/b2.jpg",
      email: "abhi.reddy@gmail.com",
      status: "pending",
      age: 33,
    },
    {
      id: 4,
      username: "Kiara Agarwal",
      img: "https://i.postimg.cc/dtbzHPjG/g2.jpg",
      email: "kiara.agarwal@gmail.com",
      status: "active",
      age: 34,
    },
    {
      id: 5,
      username: "Hrithik Desai",
      img: "https://i.postimg.cc/mgTS2mb0/B1.jpg",
      email: "hrithik.desai@yahoo.com",
      status: "pending",
      age: 28,
    },
    {
      id: 6,
      username: "Priyanka Malhotra",
      img: "https://i.postimg.cc/J7kwbzbR/g3.jpg",
      email: "priyanka.malhotra@yahoo.com",
      status: "passive",
      age: 22,
    },
    {
      id: 7,
      username: "Zara Gupta",
      img: "https://i.postimg.cc/v8WqYgrx/g4.jpg",
      email: "zara.gupta@yahoo.com",
      status: "active",
      age: 30,
    },
    {
      id: 8,
      username: "Aarav Sharma",
      img: "https://i.postimg.cc/brT9Qng6/b4.jpg",
      email: "aarav.sharma@gmail.com",
      status: "passive",
      age: 27,
    },
    {
      id: 9,
      username: "Riya Mehra",
      img: "https://i.postimg.cc/MKgv9TLt/g5.jpg",
      email: "riya.mehra@gmail.com",
      status: "active",
      age: 35,
    },
    {
      id: 10,
      username: "Aryan Singh",
      img: "https://i.postimg.cc/vTkH2q0D/b6.jpg",
      email: "aryan.singh@gmail.com",
      status: "passive",
      age: 67,
    },
    {
      id: 11,
      username: "Kabir Nair",
      img: "https://i.postimg.cc/0QNkkR3b/b5.jpg",
      email: "kabir.nair@yahoo.com",
      status: "pending",
      age: 38,
    },
    {
      id: 12,
      username: "Meera Joshi",
      img: "https://i.postimg.cc/gkPYjTxc/g6.jpg",
      email: "meera.joshi@yahoo.com",
      status: "active",
      age: 26,
    },
    {
      id: 13,
      username: "Rohan Banerjee",
      img: "https://i.postimg.cc/hjrXMRzr/b7.jpg",
      email: "rohan.banerjee@yahoo.com",
      status: "pending",
      age: 39,
    },
    {
      id: 14,
      username: "Rahul Kumar",
      img: "https://i.postimg.cc/jqBb9kHQ/b8.jpg",
      email: "rahul.kumar@yahoo.com",
      status: "passive",
      age: 20,
    },
    {
      id: 15,
      username: "Samaira Mathur",
      img: "https://i.postimg.cc/QCfWNZjt/g7.jpg",
      email: "samaira.mathur@yahoo.com",
      status: "active",
      age: 30,
    },
    {
      id: 16,
      username: "Amisha Gupta",
      img: "https://i.postimg.cc/3R4K0MjN/g8.jpg",
      email: "amisha.gupta@gmail.com",
      status: "passive",
      age: 27,
    },
  ];
  
   