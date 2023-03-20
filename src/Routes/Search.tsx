import { useLocation } from "react-router";
import { useQuery } from "react-query";
import { getSearchMovie, IGetSearch } from "../api";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: balck;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const { data, isLoading } = useQuery<IGetSearch>(["search", keyword], () =>
    getSearchMovie(keyword!)
  );
  console.log(data, "data");
  return (
    <Wrapper>{isLoading ? <Loader>...loading</Loader> : <div>11</div>}</Wrapper>
  );
}

export default Search;
