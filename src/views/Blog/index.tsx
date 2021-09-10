import React from 'react';
import { BlogPost } from '../../components/BlogPost';
import { Title } from '../../styles/title';

import { Container } from './styles';

const Blog: React.FC = () => {
    return (
        <>
            <Title>BLOG</Title>
            <BlogPost />
        </>
    )
}

export default Blog;