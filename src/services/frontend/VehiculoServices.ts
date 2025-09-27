export async function obtenerVehiculo(): Promise<{ID_PLACA: number; MODELO: string; MARCA_CARRO: string, ESTADO: boolean}[]> {
  try {
    const response = await fetch('/api/consultarVehiculo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al consultar el Vehiculo');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en VehiculoServices:', error);
    return [];
  }
}