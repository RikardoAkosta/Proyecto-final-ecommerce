import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterCategory } from '../store/slices/news.slice';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { addToFavorites } from '../store/slices/favorites.slice';

const NewsDetail = () => {

    const [news, setNews] = useState({});
    const [ rate, setRate ] = useState("");

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newsList = useSelector(state => state.news);

    useEffect(() => {
        axios.get("https://news-app-academlo.herokuapp.com/news/")
            .then(res => {
                const newsSearched = res.data.find(newsItem => newsItem.id === Number(id));
                setNews(newsSearched);
                dispatch(filterCategory(newsSearched.category.id));
            })
    }, [dispatch, id]);

    const addFavorite = () => {
        const favorite = {
            news: id,
            rate: rate
        }
        dispatch(addToFavorites(favorite));
    }

    return (
        <div>
            <Row>
                <Col>
                    <h1>{news.headline}</h1>

                    <input 
                        type="number" 
                        placeholder='rate' 
                        onChange={e => setRate(e.target.value)} 
                        value={rate} 
                    />
                    <Button onClick={addFavorite}>Add to favorites</Button>

                    <img src={news.image} alt="" className="img-fluid" />
                    {
                        news.body?.map(paragraph => (
                            <p>
                                {paragraph.paragraph}
                            </p>
                        ))
                    }
                </Col>
                <Col lg={3}>
                    <ListGroup variant="flush">
                    {
                        newsList.map(newsItem => (
                            <ListGroup.Item onClick={() => navigate(`/news/${newsItem.id}`)}>
                                {newsItem.headline}
                            </ListGroup.Item>
                        ))
                    }
                    </ListGroup>
                </Col>
            </Row>

        </div>
    );
};

export default NewsDetail;