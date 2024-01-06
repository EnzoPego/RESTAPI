import {pool} from'../db.js'


export const getEmpleados = async(req ,res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM empleados')
        res.json(rows)
    } catch (error) {
        return  res.status(500).json({msg: 'algo salio mal'})        
    }
}


export const getEmpleadoById = async(req, res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [req.params.id])
        console.log(rows)
        if (rows.length <= 0){
            res.status(404).json({msg:'Empleado no encontrado'})
        }else{
            res.json(rows[0])
        }   
    } catch (error) {
        return  res.status(500).json({msg: 'algo salio mal'}) 
    }
}


export const createEmpleados = async(req ,res)=> {
    try {
        const {name,salary} = req.body
    const [rows] = await pool.query('INSERT INTO empleados (name,salary) VALUES (?,?)',[name, salary]) 
    res.send({
        id:rows.insertId,
        name,
        salary,
    }) 
        
    } catch (error) {
         
    }
}


export const deleteEmpleados = async(req ,res) => {
    try {
        const [result] = await pool.query('DELETE FROM empleados WHERE id = ?', [req.params.id]) 
    console.log(result)
    if(result.affectedRows == 0){
        res.status(404).json({msg:'Empleado no encontrado'})
    }else{
        res.sendStatus(204)
    }        
    } catch (error) {
        return  res.status(500).json({msg: 'algo salio mal'})        
    }
    
}



export const updateEmpleados = async(req ,res) => {

    try {
        const { id } = req.params
        const { name , salary } = req.body
    
        const [result] = await pool.query('UPDATE empleados SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?',[name,salary,id])
    
        console.log(result)
    
        if(result.affectedRows == 0){
            res.status(404).json({
                msg: 'empleado no encontrado'
            })
        }
        const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?',[id])
    
        res.json(rows[0])
        
    } catch (error) {
        return  res.status(500).json({msg: 'algo salio mal'})                
    }

}

