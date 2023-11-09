import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadPost = ({ match }) => {
  const postId = match.params.id;
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://bmlx3df4ma7r1yh4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ujaqz3w25wtt4t6e/obtener_publicacion/${postId}`);
        setPost(response.data); // Actualiza el estado con los detalles del post
      } catch (error) {
        console.error('Error al cargar el post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.message}</p>
      {/* ... Mostrar la imagen u otros detalles si es necesario */}
    </div>
  );
};

export default ReadPost;
