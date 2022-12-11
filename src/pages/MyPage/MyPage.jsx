import { FlexBox, FlexTextBox } from "components/Common";
import Searchbar from "components/Navbar/Searchbar";
import Profile from "components/MyPage/Profile";
import MyArticleCard from "components/MyPage/MyArticleCard";
import { useMyPostListQueries } from "queries/mypage";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const [{ data: myPosts }, { data: scrappedPosts }] = useMyPostListQueries();
  const category = {
    R: "review",
    A: "ad",
  };
  return (
    <>
      <FlexBox width="100%" column margin="2rem 0 0 0" gap="2.2rem">
        <Searchbar />
        <FlexBox width="100%" column gap="4rem" margin="2rem 0 0 0">
          <Profile />
          <FlexBox width="100%" gap="7%">
            <FlexBox width="90%" gap="1.25rem" column>
              <FlexTextBox fontSize="1.25rem">내가 쓴 글</FlexTextBox>
              {myPosts &&
                myPosts.map((post, idx) => (
                  <MyArticleCard
                    key={idx}
                    {...post}
                    onClick={() => {
                      navigate(`/${category[post.type]}/${post.related_id}`);
                    }}
                  />
                ))}
            </FlexBox>
            <FlexBox width="90%" gap="1.25rem" column>
              <FlexTextBox fontSize="1.25rem">내가 스크랩한 글</FlexTextBox>
              {scrappedPosts &&
                scrappedPosts.map((post, idx) => (
                  <MyArticleCard
                    key={idx}
                    {...post}
                    onClick={() => navigate(`/${category[post.type]}/${post.related_id}`)}
                  />
                ))}
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};
export default MyPage;
