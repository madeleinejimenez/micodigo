// Importar React y los componentes de Material-UI
import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { Services } from '../services/service';

import configs from '../configs/env';


const RegisterTeacher = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [teacherList, setTeacherList] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await Services(
            {
                name: name,
                last_name: lastName,
                email: email
            },
            configs.routes.teacher.create);
        if (response?.status == false) {
            alert("Error de servicio")
            return;
        } else {

            alert("Registro correcto !!")
            setName('');
            setLastName('');
            setEmail('');
            await handleTeacherList()

            return
        }
    };

    const handleTeacherList = async () => {
        const response = await Services({}, configs.routes.teacher.list)

        if (response.status == false) {
            alert("Error de servicio")
            return;
        } else {
            setTeacherList(response.data)
        }
        // !response?.status && (alert("Error en servicio"))
    }

    const handlerTeacherDelete = async (idTeacher) => {

        const response = await Services({ id: idTeacher }, configs.routes.teacher.delete)

        if (response.status == false) {
            alert("Error de servicio")
            return;
        } else {
            alert("Maestro eliminado correctamente!!")
            handleTeacherList()
        }

    }

    useEffect(() => {
        handleTeacherList();
    }, [])

    return (
        <Container>
            <Box mt={6}>
                <Typography variant="h4" gutterBottom>
                    Formulario de RegisterTeacher
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        autoComplete="off"
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Apellido"
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                        label="Correo Electrónico"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Enviar
                    </Button>
                </form>
            </Box>

            <Box mt={6}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell align="right">Apellido</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="center">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {teacherList.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.last_name}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="center">
                                        <IconButton aria-label="delete" color='error' onClick={() => { handlerTeacherDelete(row.id) }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </Box>


        </Container>
    );
};
export default RegisterTeacher;