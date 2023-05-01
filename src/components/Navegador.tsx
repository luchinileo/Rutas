
import {Grid} from '@mui/material'
import { NavLink } from 'react-router-dom'

export const Navegador = () => {
  return (
    <Grid container style={{height:60}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <Grid item xs={12} md={4}>
        Addidas Sitio Ofiacial
    </Grid>
    <Grid item xs={12} md={8}>
        <ul style={{display:'flex'}}>
            <NavLink to={'/'} style={{marginLeft:'25px'}}>Inicio</NavLink>
            <NavLink to={'/acercade'} style={{marginLeft:'25px'}}>Acerca de</NavLink>
            <NavLink to={'/contacto'} style={{marginLeft:'25px'}}>Contacto</NavLink>
        </ul>
    </Grid>
</Grid>
  )
}
