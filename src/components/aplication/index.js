import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavbarBrand,
  Container,
  Table,
  Nav,
  Form,
  Input,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import $ from 'jquery';
import api from '../../api';
import 'jquery-mask-plugin/dist/jquery.mask.min';
import './table.css';
import logo from '../../images/logo-rodape.webp';

export default (props) => {
  const [students, setStudent] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [academicnumber, setAcademicnumber] = useState('');
  const [cpf, setCpf] = useState('');

  // VARIABLES OF MODAL ADD STUDENT
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // VARIABLES OF COLLAPSE
  const [isOpen, setIsOpen] = useState(false);
  const toggle2 = () => setIsOpen(!isOpen);

  // VARIABLES OF MODAL EDIT STUDENT
  const [modal2, setModal2] = useState(false);
  const toggle3 = () => setModal2(!modal2);

  // VARIABLES OF MODAL DELETE STUDENT
  const [modal3, setModal3] = useState(false);
  const toggle4 = () => setModal3(!modal3);

  $(function () {
    $('#cpf').mask('000.000.000-00');
    $('#academicnumber').mask('000000');
  });

  function handleSuccessInsertMessage() {
    alert('Dados inseridos com sucesso!');
  }

  async function handleStoreStudent() {
    await api
      .post('/students', {
        name,
        email,
        academicnumber,
        cpf,
      })
      .then((response) =>
        setStudent(
          [...students, response.data.student],
          handleSuccessInsertMessage()
        )
      )
      .catch((error) => console.log(error));
    setName('');
    setEmail('');
    setAcademicnumber('');
    setCpf('');
  }

  async function handleUpdateStudent(uid) {
    await api
      .put(`/students/${uid}`, {
        name,
        email,
      })
      .then((response) => {
        if (response.data.updated === 1) {
          alert('Dados atualizados com sucesso!');
          console.log(uid);
        }
        if (response.data.updated === 0) {
          alert('Os dados não foram atualizados');
        }
      })
      .catch((error) => console.log(error));
  }

  async function handleDeleteStudent(uid) {
    await api
      .delete(`/students/${uid}`)
      .then((response) => {
        const studentsUpdated = students.filter(
          (student) => student.uid !== uid
        );
        setStudent(studentsUpdated);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    api
      .get('/students')
      .then((response) => setStudent(response.data.students))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Nav className="navbar bg-dark text-light">
        <Form inline>
          <FormGroup>
            <NavbarBrand href="https://www.grupoa.com.br/">
              <img width="75px" height="50px" src={logo} alt="logo" />
            </NavbarBrand>
          </FormGroup>
        </Form>
        <h3>MÓDULO ACADÊMICO</h3>
        <Button color="primary" onClick={toggle2}>
          Alunos
        </Button>
      </Nav>

      {/* COLLAPSE */}
      <Container fluid>
        <Collapse isOpen={isOpen}>
          <Nav className="navbar bg-light">
            <h4> Consulta de Alunos </h4>

            {/* BUTTON MODAL ADD STUDENT */}
            <Button type="button" color="success" onClick={toggle}>
              {buttonLabel}Cadastrar Aluno
            </Button>
          </Nav>

          {/* Table */}
          <Table dark className="text-center">
            <thead>
              <tr>
                <th>Registro Acadêmico</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.uid}>
                  <th>{student.academicnumber}</th>
                  <td>{student.name}</td>
                  <td>{student.cpf}</td>
                  <td>
                    <Button type="button" color="primary" onClick={toggle3}>
                      Editar
                    </Button>
                    <Button type="button" color="danger" onClick={toggle4}>
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Collapse>

        {/* MODAL DELETE STUDENT */}
        <div>
          {students.map((student) => (
            <Modal isOpen={modal3} toggle={toggle4} className={className}>
              <ModalHeader toggle={toggle4}>AVISO!</ModalHeader>
              <ModalBody>
                <h2>VOCÊ DESEJA DELETAR ESTE ALUNO?</h2>
              </ModalBody>
              <ModalFooter key={student.uid}>
                <Button
                  color="danger"
                  onClick={() => handleDeleteStudent(student.uid)}
                >
                  Deletar
                </Button>{' '}
                <Button color="secondary" onClick={toggle4}>
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
          ))}
        </div>

        {/* MODAL EDIT STUDENT */}
        <div>
          {students.map((student) => (
            <Modal isOpen={modal2} toggle={toggle3} className={className}>
              <ModalHeader toggle={toggle3}>Cadastro do Aluno</ModalHeader>
              <ModalBody>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Nome</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder={student.name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>E-mail</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder={student.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>RA</InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder={student.academicnumber} disabled />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>CPF</InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder={student.cpf} disabled />
                </InputGroup>
              </ModalBody>
              <ModalFooter key={student.uid}>
                <Button
                  color="primary"
                  onClick={() => handleUpdateStudent(student.uid)}
                >
                  Atualizar
                </Button>{' '}
                <Button color="secondary" onClick={toggle3}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          ))}
        </div>

        {/* MODAL ADD STUDENT */}
        <div>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Cadastro de Aluno</ModalHeader>
            <ModalBody>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Nome</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Informe o nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>E-mail</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Informe apenas um e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>RA</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Informe o registro acadêmico"
                  value={academicnumber}
                  onChange={(e) => setAcademicnumber(e.target.value)}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>CPF</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Informe o número do documento"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </InputGroup>
              <br />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Cancelar
              </Button>
              <Button color="primary" onClick={handleStoreStudent}>
                Salvar
              </Button>{' '}
            </ModalFooter>
          </Modal>
        </div>
      </Container>
    </>
  );
};
