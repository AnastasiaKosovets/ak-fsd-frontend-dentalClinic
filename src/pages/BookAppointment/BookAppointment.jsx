import React, { useEffect, useState } from "react";
import "./BookAppointment.css";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../../common/SelectOption/SelectOption";
import { bookAppointment, getAllTreatments } from "../../services/apiCalls";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllDoctors, getAllPatients } from "../../services/apiCalls";
// import { inputHandler } from "../../services/useful";


export const BookAppointment = () => {
  const [body, setBody] = useState({});
  const credRdx = useSelector(userData);
  const token = credRdx?.credentials?.token;
  const navigate = useNavigate();
  const [allTreatments, setAllTreatments] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [confirmApp, setConfirmApp] = useState("");
//   const [user, setUser] = useState({});

useEffect(() => {
    if(allDoctors?.length === 0){
        getAllDoctors(allDoctors).then((results) => {
            setAllDoctors(results)
        }).catch((error) => console.log(error))
    }
}, [])

console.log(allDoctors)

// useEffect(() => {
//     if(allTreatments?.length === 0){
//         getAllTreatments(allTreatments).then((results) => {
//             setAllTreatments(results.data.data)
//         }).catch((error) => console.log(error))
//     }
// }, [])
  
const editHandler = async () => {

    const createAppointment = {
        "doctor_id": Number(selectedDoctor),
        "treatment_id": Number(selectedTreatment),
        "date": "2023-07-10 00:00:00"
    }
    await bookAppointment(createAppointment)

    setTimeout(() => {
        navigate("/account");
    }, 2500)

    setConfirmApp("Su cita ha sido confirmada");
}



  return (
    <div className="mainBookApp">
      Pide tu cita
      {confirmApp !== "" ? (
        <div>{confirmApp}</div>
      ) : (
        <Container>
        <Row>
          <Col>
            <Form>
              <SelectOption
              placeholder="Elige al doctor"
              options={allDoctors}
            changeFunction={(e) => { setSelectedDoctor(e.target.value)}}
              />
            </Form>
          </Col>
          <Col xs={10} md={6} lg={6} className="d-flex justify-content-center">
            <Link
              className="modInfo"
              onClick={() => {
                editHandler(body, token);
              }}
            >
              Confirmar
            </Link>
            <Link to="/account" className="modInfo">
              Cancelar
            </Link>
          </Col>
        </Row>
      </Container>
      )}
      
    </div>
  );
};
