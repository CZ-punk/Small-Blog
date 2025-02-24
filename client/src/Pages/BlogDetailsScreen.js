import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Content,
  HeaderContainer,
  HeaderImage,
  MarkDownContainer,
  MdFileContainer,

} from "../components/Styles/Container/Container.style";
import { HeaderH2, HeaderP } from "../components/Styles/Font/Font.style";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'


const BlogDetailsScreen = () => {
  const [postDetails, setPostDetails] = useState({});
  const [mdFileDetail, setMdFileDetail] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postResponse = await axios.get(
          `http://localhost:5000/blog/blog-list/${id}`
        );
        const data = postResponse.data.data;
        setPostDetails(data);

        const signedMdUrl = await axios.get(data.md_file);
        setMdFileDetail(signedMdUrl.data);

      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <HeaderImage src={postDetails.image_url} alt="postImage" />
        <Content>
          <HeaderH2>{postDetails.header}</HeaderH2>
          <HeaderP>{postDetails.quote}</HeaderP>
          <HeaderP>by {postDetails.author}</HeaderP>
        </Content>
      </HeaderContainer>

      <MdFileContainer>
        <MarkDownContainer>
          <ReactMarkdown remarkPlugins={remarkGfm}
            children={mdFileDetail}
            components={{
              code(props) {
                const {children, className, node, ...rest} = props
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={dracula}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </MarkDownContainer>
      </MdFileContainer>
    </Container>
  );
};

export default BlogDetailsScreen;
