// src/components/PostCard.js
import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Link,
  Box,
} from '@mui/material';
import { unescapeHtml } from '../utils/unescapeHtml';
import { blue } from '@mui/material/colors';

const PostCard = ({ title, selftext_html, url, score }) => {
  const decodedHtml = selftext_html ? unescapeHtml(selftext_html) : '';

  return (
    <Card
      sx={{
        background: 'linear-gradient(145deg, #ffffff 0%, #e3e9f7 100%)',
        borderRadius: 5,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.4s ease',
        '&:hover': {
          transform: 'translateY(-10px) scale(1.02)',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
          border: '2px solid blue'
        },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#4a4a4a',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {title}
        </Typography>
        {decodedHtml ? (
          <Box
            sx={{
              mt: 2,
              color: '#555',
              fontSize: '0.9rem',
              overflowY: 'auto',
              flexGrow: 1,
              paddingRight: 1,
              scrollbarWidth: 'thin',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#a0a0a0',
                borderRadius: '10px',
              },
            }}
            dangerouslySetInnerHTML={{ __html: decodedHtml }}
          />
        ) : (
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 500,
              fontSize: 16,
              color: 'rgba(0, 0, 0, 0.6)',
              mt: 2,
            }}
          >
            No Content Available.
          </Typography>
        )}
      </CardContent>

      <CardActions
        sx={{
          padding: '16px',
          backgroundColor: '#f0f4fa',
          borderTop: '1px solid #e0e0e0',
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500, color: '#777' }}>
          ⭐ {score}
        </Typography>
        <Link
          href={url}
          target="_blank"
          rel="noopener"
          sx={{
            marginLeft: 'auto',
            fontWeight: 600,
            color: '#6a1b9a',
            fontSize: '0.9rem',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
              color: '#9c27b0',
            },
          }}
        >
          View Post
        </Link>
      </CardActions>
    </Card>

  );
};

export default PostCard;
