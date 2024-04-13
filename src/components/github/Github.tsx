import { useLoaderData } from "react-router-dom";
const profileUrl: string = `https://api.github.com/users/kumarabh`;

const Github = () => {
  // const [data, setData] = useState({} as any);

  // const getData = async() => {
  //   fetch(profileUrl).then((res: Response) => res.json()).then((res: Response) => setData(res))
  //   console.log('==> github user data', data);
  // }
  // useEffect(() => {
  //   getData();
  // }, [])
  const dataResult: any = useLoaderData();

  return (
    <>
      <div className="card ">
        <div className="card-header">
          <h4>{dataResult.name}</h4>
        </div>
        <div className="card-body">
        <img src={dataResult && dataResult.avatar_url} alt="" />
        </div>
        <div className="card-footer">
        <p>Bio: {dataResult.bio}</p>
          <p>Followers: {dataResult.followers}</p>
        </div>
      </div>
    </>
  )
}

export default Github;
export const GithubInfoLoader = async() => {
  const response = await fetch(profileUrl);
  const responseData = await response.json();
  return responseData;
}