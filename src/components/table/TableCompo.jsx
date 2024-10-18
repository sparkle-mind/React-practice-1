import React from "react";
import tableStyle from "../table/tableStyle.module.css";
import { Col, Row, Table } from "react-bootstrap";

const tableData = [
  {
    id: 1,
    first_name: "Shara",
    last_name: "Weeds",
    email: "sweeds0@barnesandnoble.com",
    gender: "Female",
    marks: "80",
    result: "",
  },
  {
    id: 2,
    first_name: "Conant",
    last_name: "Puddan",
    email: "cpuddan1@ihg.com",
    gender: "Male",
    marks: "31",
    result: "",
  },
  {
    id: 3,
    first_name: "Mehetabel",
    last_name: "Mawtus",
    email: "mmawtus2@sakura.ne.jp",
    gender: "Female",
    marks: "92",
    result: "",
  },
  {
    id: 4,
    first_name: "Jonas",
    last_name: "Truman",
    email: "jtruman3@google.com",
    gender: "Male",
    marks: "28",
    result: "",
  },
  {
    id: 5,
    first_name: "Elena",
    last_name: "Fitzgerald",
    email: "efitzgerald4@live.com",
    gender: "Female",
    marks: "91",
    result: "",
  },
  {
    id: 6,
    first_name: "Liam",
    last_name: "Sullivan",
    email: "lsullivan5@yahoo.com",
    gender: "Male",
    marks: "78",
    result: "",
  },
  {
    id: 7,
    first_name: "Ava",
    last_name: "O'Reilly",
    email: "aoreilly6@aol.com",
    gender: "Female",
    marks: "25",
    result: "",
  },
  {
    id: 8,
    first_name: "Mason",
    last_name: "Harris",
    email: "mharris7@outlook.com",
    gender: "Male",
    marks: "82",
    result: "",
  },
  {
    id: 9,
    first_name: "Sophia",
    last_name: "Khan",
    email: "skhan8@hotmail.com",
    gender: "Female",
    marks: "33",
    result: "",
  },
  {
    id: 10,
    first_name: "Ethan",
    last_name: "Nguyen",
    email: "enguyen9@icloud.com",
    gender: "Male",
    marks: "87",
    result: "",
  },
];

const TableCompo = () => {
  return (
    <div className={tableStyle.tableWrp}>
      <div className="container">
        <div className={tableStyle.tableInner}>
          <div className={tableStyle.tableHeading}>
            <h2>Student's Data</h2>
          </div>
          <Row className={tableStyle.tableRow}>
            <Col sm={12} className={tableStyle.tableCol}>
              <div className={tableStyle.tableColIn}>
                <Table className={tableStyle.mainTable}>
                  <thead className={tableStyle.tHead}>
                    <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Marks</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((tableList) => (
                      <tr key={tableList.id}>
                        <td>{tableList.id}</td>
                        <td>{tableList.first_name}</td>
                        <td>{tableList.last_name}</td>
                        <td>{tableList.email}</td>
                        <td>{tableList.gender}</td>
                        <td
                          style={{
                            color: tableList.marks > 80 ? "green" : "red",
                          }}
                        >
                          {tableList.marks}
                        </td>
                        <td>
                          {tableList.result}
                            {tableList.marks > 33 ? "PASS" : "FAIL"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TableCompo;
