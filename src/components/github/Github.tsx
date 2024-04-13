import { useEffect, useState } from "react";

const Github = () => {

  const [data, setData] = useState({} as any);

  const getData = async() => {
    const url: string = `https://api.github.com/users/kumarabh`;
    fetch(url).then((res: Response) => res.json()).then((res: Response) => setData(res))
    console.log('==> github user data', data);
  }
  useEffect(() => {
    getData();
  }, [])


  return (
    <>
      <div className="card ">
        <div className="card-header">
          <h4>{data.name}</h4>
        </div>
        <div className="card-body">
        <img src={data && data.avatar_url} alt="" />
        </div>
        <div className="card-footer">
        <p>Bio: {data.bio}</p>
          <p>Followers: {data.followers}</p>
        </div>
      </div>
    </>
  )
}

export default Github;