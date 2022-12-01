import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <h3 className="search-top-text">I grow by helping people in need</h3>

      <Form className="d-flex col-md-5 mx-auto">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="success" className="">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default Search;
