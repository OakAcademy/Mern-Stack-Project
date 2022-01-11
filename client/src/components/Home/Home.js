import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import StoryForm from "../StoryForm/StoryForm";
import StoryList from "../StoryList/StoryList";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { getStories } from "../../actions/stories";

const { Sider, Content } = Layout;

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);
  return (
    <Layout>
      <Sider
        width={400}
        style={styles.sider}
        // breakpoint="md"
        // collapsedWidth="0"
      >
        <StoryForm selectedId={selectedId} setSelectedId={setSelectedId} />
      </Sider>
      <Content style={styles.content}>
        <StoryList setSelectedId={setSelectedId} />
      </Content>
    </Layout>
  );
};

export default Home;
