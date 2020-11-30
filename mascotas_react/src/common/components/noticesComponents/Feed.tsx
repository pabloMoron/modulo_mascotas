import React, { useEffect, useState } from 'react';
import { IPost, FetchPosts } from '../../../notices/NoticeServices';
import InfiniteScroll from "react-infinite-scroll-component";
import './Feed.css';
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [timestamp, setTimestamp] = useState(new Date().getTime());
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(4)
    const [hasMore, sethasMore] = useState(true)

     const findPosts = async () => {
        const result = await FetchPosts(page, limit, timestamp);
        let newPosts = [...posts].concat(result.posts);
        
        if(result.posts.length==0){ //Paro el scroll para que muestre el mensaje de fin
            sethasMore(false);
            return
        }

        setPosts(newPosts);
        setPage(result.next.nextPage);
        setLimit(result.next.limit); //La idea era calcular el resto de la ultima pagina
    }

    useEffect(() => {
        void findPosts();

    },[])

    return (
        ///Me acabo de dar cuenta que puedo pasar el id del post
        ///y en useEfect de post asignar todos los states, mala mia
        <div className="feed">
            <InfiniteScroll
                dataLength={posts.length}
                next={findPosts}
                hasMore={hasMore}
                loader={<h4>Fetching data...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Felicidades estás al día</b>
                    </p>
                }>

                {posts.map((post, i) => (
                    <Post
                        key={i}
                        profileId={post.profileId}
                        id={post.id}
                        image={post.image}
                        message={post.message}
                        petId={post.petId}
                        timestamp={post.timestamp}
                    />
                ))}

            </InfiniteScroll>
        </div>
    );
}

export default Feed
