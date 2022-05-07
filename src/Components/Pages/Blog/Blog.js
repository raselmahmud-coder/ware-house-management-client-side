import React from "react";
import { ListGroup, Table } from "react-bootstrap";

const Blog = () => {
  return (
    <>
      <h5 className="text-center my-5">
        Difference between javascript and nodejs
      </h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>JavaScript</th>
            <th>Node JS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              Javascript is a programming language that is used for writing
              scripts on the website.
            </td>
            <td>NodeJS is a Javascript runtime environment.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Javascript can only be run in the browsers.</td>
            <td>
              We can run Javascript outside the browser with the help of NodeJS.
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>It is basically used on the client-side.</td>
            <td>It is mostly used on the server-side.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              Javascript is capable enough to add HTML and play with the DOM.
            </td>
            <td>Nodejs does not have capability to add HTML tags.</td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              Javascript can run in any browser engine as like JS core in safari
              and Spidermonkey in Firefox.
            </td>
            <td>
              V8 is the Javascript engine inside of node.js that parses and runs
              Javascript.
            </td>
          </tr>
        </tbody>
      </Table>
      <h5 className="text-center my-5">
        Differences between SQL and NoSQL databases.
      </h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>SQL</th>
            <th>No SQL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
            <td>Non-relational or distributed database system.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>These databases have fixed or static or predefined schema</td>
            <td>They have dynamic schema</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              These databases are not suited for hierarchical data storage.
            </td>
            <td>
              These databases are best suited for hierarchical data storage.
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>These databases are best suited for complex queries</td>
            <td>These databases are not so good for complex queries</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Oracle, Postgres, and MS-SQL.</td>
            <td>MongoDB, Redis, Neo4j, Cassandra, Hbase.</td>
          </tr>
        </tbody>
      </Table>

      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-2">
        <div className="col-md-4 my-5">
          <h5 className="text-center">When should we use to Node JS?</h5>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">
              It runs Javascript, so you can use the same language on server and
              client, and even share some code between them (e.g. for form
              validation, or to render views at either end.)
            </ListGroup.Item>
            <ListGroup.Item as="li">
              The single-threaded event-driven system is fast even when handling
              lots of requests at once, and also simple, compared to traditional
              multi-threaded Java or ROR frameworks.
            </ListGroup.Item>
            <ListGroup.Item as="li">
              The ever-growing pool of packages accessible through NPM,
              including client and server-side libraries/modules, as well as
              command-line tools for web development. Most of these are
              conveniently hosted on github, where sometimes you can report an
              issue and find it fixed within hours! It's nice to have everything
              under one roof, with standardized issue reporting and easy
              forking.
            </ListGroup.Item>
            <ListGroup.Item as="li">
              It has become the defacto standard environment in which to run
              Javascript-related tools and other web-related tools, including
              task runners, minifiers, beautifiers, linters, preprocessors,
              bundlers and analytics processors.
            </ListGroup.Item>
            <ListGroup.Item as="li">
              It seems quite suitable for prototyping, agile development and
              rapid product iteration.
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="col-md-4 my-5">
          <h5 className="text-center">When should you use mongodb?</h5>
          <p>
            MongoDB is a general-purpose database used in various ways to
            support applications in many different industries (e.g.,
            telecommunications, gaming, finances, healthcare, and retail).
            MongoDB has found a home in many different businesses and functions
            because it solves long-standing problems in data management and
            software development. Typical use cases for MongoDB include:
          </p>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">
              Integrating large amounts of diverse data
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Describing complex data structures that evolve
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Delivering data in high-performance applications
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Supporting hybrid and multi-cloud applications
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Supporting agile development and collaboration
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  );
};

export default Blog;
