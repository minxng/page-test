import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      <img src={detail.medium_cover_image} />
      <p>{detail.title}</p>
      <p>{detail.description_intro}</p>
    </div>
  );
}

export default Detail;
