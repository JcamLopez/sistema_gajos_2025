export async function obtenerTrabajador(): Promise<{id: number; N1: string; N2: string, ap1: string, ap2:string, es:boolean }[]> {
  try {
    const response = await fetch('/api/consultarTrabajador', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al consultar el departamento');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en TrabajadorServices:', error);
    return [];
  }
}