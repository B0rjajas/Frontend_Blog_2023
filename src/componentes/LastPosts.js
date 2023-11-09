import React, { useEffect, useState } from 'react';

function LastPosts() {
    const [lastPosts, setLastPosts] = useState([]);

    useEffect(() => {
        // Realizar la solicitud a la API para obtener los últimos posts
        fetch('https://bmlx3df4ma7r1yh4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ujaqz3w25wtt4t6e/api/last_posts')
            .then(response => response.json())
            .then(data => setLastPosts(data))
            .catch(error => console.error('Error al cargar los últimos posts:', error));
    }, []);

    return (
        <div className="last-posts-container">
            {lastPosts.map(post => (
                <div key={post.id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.message}</p>
                    <img src={post.image} alt={post.title} />
                </div>
            ))}
        </div>
    );
}

export default LastPosts;
