import { Router } from "express";
import { getEmpleados, createEmpleados, updateEmpleados, deleteEmpleados, getEmpleadoById } from "../controllers/empleados.controller.js";

const router = Router()

router.get('/empleados', getEmpleados)

router.get('/empleados/:id', getEmpleadoById)

router.post('/empleados', createEmpleados)

router.patch('/empleados/:id', updateEmpleados)


router.delete('/empleados/:id', deleteEmpleados)

export default router