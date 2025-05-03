// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, CircularProgress, Box } from '@mui/material';
import PostCard from './components/PostCard';

const baseUrl = "https://www.reddit.com/r/reactjs.json"

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        const children = response.data.data.children;
        const postsData = children.map((child) => child.data);
        setPosts(postsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Reddit posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #c3ecf5 0%, #f5c3e0 100%)',
        paddingY: 8,
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            mb: 6,
            color: '#222',
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: '1px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          🚀 Trending ReactJS Posts
        </Typography>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress size={80} color="secondary" />
          </Box>
        ) : (
          <Grid container spacing={5} justifyContent="center">
            {posts.map((post) => (
              <Grid
                item
                key={post.id}
                sx={{
                  width: 360,
                  height: 500,
                }}
              >
                <PostCard
                  title={post.title}
                  selftext_html={post.selftext_html}
                  url={post.url}
                  score={post.score}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>

  );
};

export default App;
