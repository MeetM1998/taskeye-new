
const ContentRendererPage = ({ data }) => {
  {console.log("data", data)}
  
  if (!data) return <div>Select an item to view content </div>;

  // switch (data.type) {
  //   case "text":
  //     return <p>{data.content}</p>;
  //   case "list":
  //     return (
  //       <ul>
  //         {data.content.map((item, index) => (
  //           <li key={index}>{item}</li>
  //         ))}
  //       </ul>
  //     );
  //   case "chart":
  //     return <div>Chart type: {data.content.type}</div>;
  //   default:
  //     return <div>No content available</div>;
  // }
};

export default ContentRendererPage;
