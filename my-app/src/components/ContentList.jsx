import Card from "./Card";

const ContentList = ({ content }) => {
  return (
    <div className="cards_box">
      {content &&
        content.map((content) => (
         <Card content={content} />
        ))}
    </div>
  );
};

export default ContentList;
