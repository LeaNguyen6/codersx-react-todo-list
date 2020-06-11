import React, { Component } from "react";
import axios from "axios";
import Book from "./Book";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

export default class BookList extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }
    async componentDidMount() {
        console.log("didmount");
        let listBooks = await axios.get(
            "https://27--rest-api.glitch.me/api/book/all"
        );
        console.log(listBooks.data)
        this.setState({
            books: listBooks.data
        })
    }
    render() {
        const { books } = this.state
        return (
            <div>
                <Row justify="space-around" align="middle" gutter={[0, 16]}>
                    {books.map(x => (
                        <Book key={x._id} title={x.title} description={x.description} coverUrl={x.coverUrl} />
                    ))}
                </Row>
            </div>
        );
    }
}
